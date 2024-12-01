import { NextResponse } from "next/server"
import { FraudEntity } from "@/models/FraudEntity" // Import FraudEntity model
import { Report } from "@/models/Report" // Import Report model
import { FraudEntitySchema, ReportSchema } from "@/schemas/validationSchemas"
import mongoose from "mongoose"

export async function POST(request: Request) {
  try {
    const requestBody = await request.json()
    if (!requestBody) {
      return NextResponse.json(
        { error: "Request Body is Required" },
        { status: 500 }
      )
    }
    // Validate the incoming request body using Zod
    const parsedFraudEntity = FraudEntitySchema.safeParse(requestBody) // Validate FraudEntity schema
    if (!parsedFraudEntity.success) {
      return NextResponse.json(
        { message: parsedFraudEntity.error.format() },
        { status: 400 }
      )
    }
    const { entityType, entityIdentifier } = parsedFraudEntity.data
    // 1. Check if the FraudEntity already exists by entityIdentifier
    let fraudEntity = await FraudEntity.findOne({ entityIdentifier })

    if (!fraudEntity) {
      // 2. If it doesn't exist, create a new FraudEntity
      fraudEntity = new FraudEntity({
        entityType,
        entityIdentifier,
      })
      await fraudEntity.save() // Save the fraud entity
    }
    const parsedReport = ReportSchema.safeParse({
      ...requestBody,
      fraudEntityId: fraudEntity?._id?.toString(),
    }) // Validate FraudEntity schema
    if (!parsedReport.success) {
      return NextResponse.json(
        { message: parsedReport.error.format() },
        { status: 400 }
      )
    }
    // If validation is successful, proceed with database operations
    // 3. Create a new report and associate it with the fraud entity
    const report = new Report(parsedReport.data)
    await report.save() // Save the report
    return NextResponse.json(
      {
        message: "Report created successfully",
        report,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return NextResponse.json({ message: error?.message }, { status: 500 })
    } else {
      return NextResponse.json(
        { message: "Something wrong at server" },
        { status: 500 }
      )
    }
  }
}

export async function GET(request: Request) {
  try {
    // Extract the query parameter from the URL
    const url = new URL(request.url)
    const entityId = url.searchParams.get("reportId") // Search parameter for query

    // If entityIdentifier is not provided, return an error
    if (!entityId) {
      return NextResponse.json(
        { message: "reportId is required" },
        { status: 400 }
      )
    }

    // Perform a case-insensitive search for the entityIdentifier using $regex
    const fraudEntity = await FraudEntity.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(entityId),
        },
      },
      {
        $lookup: {
          from: "reports", // The Report collection
          localField: "_id", // The `_id` in FraudEntity
          foreignField: "fraudEntityId", // The `fraudEntityId` in Report
          as: "reports", // Embed the matched reports as an array
        },
      },
      {
        $group: {
          _id: "$_id", // Group by the FraudEntity's ID
          entityType: { $first: "$entityType" },
          entityIdentifier: { $first: "$entityIdentifier" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
          reports: { $push: "$reports" }, // Collect all reports in an array
        },
      },
    ])

    // If no fraud entity is found, return a 404
    if (!fraudEntity?.length) {
      return NextResponse.json(
        { message: "No matching fraud entity found" },
        { status: 404 }
      )
    }

    // Return the found fraud entity
    return NextResponse.json(fraudEntity, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Something went wrong while searching for fraud entities" },
      { status: 500 }
    )
  }
}
