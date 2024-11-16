import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProof extends Document {
    reportId: mongoose.Types.ObjectId;
    proofType: 'photo' | 'audio' | 'video';
    proofData: string;
    createdAt: Date;
  }
  
  const ProofSchema = new Schema<IProof>(
    {
      reportId: { type: Schema.Types.ObjectId, ref: 'Report', required: true },
      proofType: { type: String, enum: ['photo', 'audio', 'video'], required: true },
      proofData: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  export const Proof: Model<IProof> =
    mongoose.models.Proof || mongoose.model<IProof>('Proof', ProofSchema);