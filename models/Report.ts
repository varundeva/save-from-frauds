import mongoose, { Schema, Document, Model } from "mongoose"

export interface IReport extends Document {
  fraudEntityId: mongoose.Types.ObjectId
  longDescription: string
  shortDescription: string
  impact: [
    {
      type: ["financial", "emotional", "reputational", "other"]
      details: string
      metadata: {
        amount?: number
        currency?: string
        stress?: boolean
        anxiety?: boolean
      }
    },
  ]
  preventionSteps: string
  reportedAt: Date
  reportedBy: string
  status: "open" | "resolved" | "closed" | "progress"
}

// Define the schema for Impact metadata
const ImpactMetadataSchema = new Schema(
  {
    amount: { type: Number }, // Specific to financial impact
    currency: { type: String, default: "INR" }, // Specific to financial impact
    stress: { type: Boolean }, // Specific to emotional impact
    anxiety: { type: Boolean }, // Specific to emotional impact
  },
  { _id: false } // Disable the creation of _id for this nested schema
)

// Define the schema for Impact
const ImpactSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["financial", "emotional", "reputational", "other"],
    }, // Impact type
    details: {
      type: String,
      required: true,
    }, // Details about the impact
    metadata: {
      type: ImpactMetadataSchema,
      required: false, // metadata is optional, but when present, should match the schema
    },
  },
  { _id: false } // Disable the creation of _id for this nested schema
)
const ReportSchema = new Schema<IReport>(
  {
    fraudEntityId: {
      type: Schema.Types.ObjectId,
      ref: "FraudEntity",
      required: true,
    },
    longDescription: { type: String, required: true },
    shortDescription: { type: String },
    impact: [
      {
        type: ImpactSchema, // Impact schema as an array of objects
        required: false, // Impact array itself is optional
      },
    ],
    preventionSteps: { type: String },
    reportedAt: { type: Date, default: Date.now },
    reportedBy: { type: String, required: true },
    status: {
      type: String,
      enum: ["open", "resolved", "closed", "progress"],
      default: "open",
    },
  },
  { timestamps: true }
)

export const Report: Model<IReport> =
  mongoose.models.Report || mongoose.model<IReport>("Report", ReportSchema)
