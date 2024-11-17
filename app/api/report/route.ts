import { NextResponse } from 'next/server';
import { FraudEntity } from '@/models/FraudEntity';  // Import FraudEntity model
import { Report } from '@/models/Report';  // Import Report model
import { FraudEntitySchema, ReportSchema } from '@/schemas/validationSchemas';

export async function POST(request: Request) {
    try {
        const requestBody = await request.json()
        if (!requestBody) {
            return NextResponse.json({ error: 'Request Body is Required' }, { status: 500 })
        }
        // Validate the incoming request body using Zod
        const parsedFraudEntity = FraudEntitySchema.safeParse(requestBody);  // Validate FraudEntity schema
        if (!parsedFraudEntity.success) {
            return NextResponse.json({ message: parsedFraudEntity.error.format() }, { status: 400 });
        }
        const { entityType, entityIdentifier } = parsedFraudEntity.data;
        // 1. Check if the FraudEntity already exists by entityIdentifier
        let fraudEntity = await FraudEntity.findOne({ entityIdentifier });

        if (!fraudEntity) {
            // 2. If it doesn't exist, create a new FraudEntity
            fraudEntity = new FraudEntity({
                entityType,
                entityIdentifier,
            });
            await fraudEntity.save();  // Save the fraud entity
        }
        const parsedReport = ReportSchema.safeParse(requestBody);  // Validate FraudEntity schema
        if (!parsedReport.success) {
            return NextResponse.json({ message: parsedReport.error.format() }, { status: 400 });
        }
        // If validation is successful, proceed with database operations

        // 3. Create a new report and associate it with the fraud entity
        const report = new Report({
            ...parsedReport,
            fraudEntityId: fraudEntity._id,
        });

        await report.save();  // Save the report

        return NextResponse.json({
            message: 'Report created successfully',
            report,
        }, { status: 201 });
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return NextResponse.json({ message: error?.message }, { status: 500 });
        } else {
            return NextResponse.json({ message: "Something wrong at server" }, { status: 500 });
        }
    }
}
