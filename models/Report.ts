import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReport extends Document {
    fraudEntityId: mongoose.Types.ObjectId;
    longDescription: string;
    shortDescription: string;
    impact: [
        {
            type: ['financial', 'emotional', 'reputational', 'other'],
            details: string,
            metadata: {
                amount?: number,
                currency?: string,
                stress?: boolean,
                anxiety?: boolean,
            },
        },
    ];
    preventionSteps: string;
    reportedAt: Date;
    reportedBy: string;
    status: 'open' | 'resolved' | 'closed' | 'progress';
}

const ReportSchema = new Schema<IReport>(
    {
        fraudEntityId: { type: Schema.Types.ObjectId, ref: 'FraudEntity', required: true },
        longDescription: { type: String, required: true },
        shortDescription: { type: String },
        impact: [
            {
                type: {
                    type: String,
                    required: true,
                    enum: ['financial', 'emotional', 'reputational', 'other'], // Type of impact
                },
                details: { type: String, required: true }, // Details about the impact
                metadata: {
                    amount: { type: Number }, // Specific to financial impact
                    currency: { type: String, default: 'INR' }, // Specific to financial impact
                    stress: { type: Boolean }, // Specific to emotional impact
                    anxiety: { type: Boolean }, // Specific to emotional impact
                },
            },
        ],
        preventionSteps: { type: String },
        reportedAt: { type: Date, default: Date.now },
        reportedBy: { type: String, required: true },
        status: { type: String, enum: ['open', 'resolved', 'closed', 'progress'], default: 'open' },
    },
    { timestamps: true }
);

export const Report: Model<IReport> =
    mongoose.models.Report || mongoose.model<IReport>('Report', ReportSchema);
