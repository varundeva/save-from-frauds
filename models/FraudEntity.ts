import mongoose, { Schema, Document, Model } from "mongoose"

/** FraudEntity Schema */
export interface IFraudEntity extends Document {
  entityType: "phone" | "email" | "website"
  entityIdentifier: string
  createdAt: Date
  updatedAt: Date
}

const FraudEntitySchema = new Schema<IFraudEntity>(
  {
    entityType: {
      type: String,
      required: true,
      enum: ["phone", "email", "website"],
    },
    entityIdentifier: { type: String, required: true, unique: true },
  },
  { timestamps: true }
)

export const FraudEntity: Model<IFraudEntity> =
  mongoose.models.FraudEntity ||
  mongoose.model<IFraudEntity>("FraudEntity", FraudEntitySchema)
