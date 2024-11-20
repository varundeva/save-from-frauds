import * as z from "zod"

export const fraudEntitySchema = z.object({
  entityType: z.enum(["phone", "email", "website"], {
    required_error: "Entity type is required",
  }),
  entityIdentifier: z.string().nonempty("Entity identifier is required"),
  longDescription: z.string().nonempty("Long description is required"),
  shortDescription: z.string().optional(),
  impact: z
    .array(
      z.object({
        type: z.enum(["financial", "emotional", "reputational", "other"]),
        details: z.string().nonempty("Details about the impact are required"),
        metadata: z.object({
          amount: z.number().optional(),
          currency: z.string().optional(),
          stress: z.boolean().optional(),
          anxiety: z.boolean().optional(),
        }),
      })
    )
    .nonempty("At least one impact is required"),
  preventionSteps: z.string().optional(),
  status: z.enum(["open", "resolved", "closed", "progress"], {
    required_error: "Status is required",
  }),
})
