import { NextResponse } from "next/server"
import { FraudEntity } from "@/models/FraudEntity" // Import your FraudEntity model
import { isQueryValid } from "@/utils/identifyEntity"

// Define the GET handler for searching FraudEntity by entityIdentifier
export async function GET(request: Request) {
  try {
    // Extract the query parameter from the URL
    const url = new URL(request.url)
    const query = url.searchParams.get("query") // Search parameter for query

    // If entityIdentifier is not provided, return an error
    if (!query) {
      return NextResponse.json(
        { message: "Search Query is required" },
        { status: 400 }
      )
    }

    const isValid = isQueryValid(query)

    if (!isValid) {
      return NextResponse.json(
        {
          message:
            "Search Query is invalid. It should be phone, email or website address",
        },
        { status: 400 }
      )
    }

    // Perform a case-insensitive search for the entityIdentifier using $regex
    const fraudEntity = await FraudEntity.findOne({
      entityIdentifier: { $regex: query, $options: "i" },
    })

    // If no fraud entity is found, return a 404
    if (!fraudEntity) {
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
