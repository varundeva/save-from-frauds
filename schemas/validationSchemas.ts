import { z } from "zod"

// Zod schema for Impact details
const ImpactSchema = z.object({
  type: z.enum(["financial", "emotional", "reputational", "other"]),
  details: z.string().min(1, "Impact details are required"),
  metadata: z
    .object({
      amount: z
        .union([z.number(), z.string()])
        .optional()
        .transform((val) => (typeof val === "string" ? Number(val) : val)),
      currency: z.string().default("INR"),
      stress: z.boolean().optional(),
      anxiety: z.boolean().optional(),
    })
    .optional(),
})

// Zod schema for the Report data
export const ReportSchema = z.object({
  fraudEntityId: z.string().length(24, "Invalid fraud entity ID"), // Assuming this is a UUID from MongoDB (ObjectId as string)
  longDescription: z
    .string()
    .min(10, "Long description must be at least 10 characters"),
  shortDescription: z.string().optional(),
  impact: z.array(ImpactSchema).optional(),
  preventionSteps: z.string().optional(),
  reportedBy: z.string().min(1, "Reported By is required"),
  status: z.enum(["open", "resolved", "closed", "progress"]).default("open"),
})

// Zod schema for the FraudEntity data
export const FraudEntitySchema = z.object({
  entityType: z.enum(["phone", "email", "website"]),
  entityIdentifier: z.string().min(1, "Entity identifier is required").max(255),
})
