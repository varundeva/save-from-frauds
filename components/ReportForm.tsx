import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Plus, X } from "lucide-react";

type FraudEntityFormValues = {
  entityType: "phone" | "email" | "website";
  entityIdentifier: string;
  shortDescription?: string;
  longDescription: string;
  impact: Array<{
    type: "financial" | "emotional" | "reputational" | "other";
    details: string;
    metadata: { amount?: number; currency?: string; stress?: boolean; anxiety?: boolean };
  }>;
  preventionSteps?: string;
  status: "open" | "resolved" | "closed" | "progress";
};

const ReportForm = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
  } = useForm<FraudEntityFormValues>({
    // Remove Zod validation for debugging
    defaultValues: {
      entityType: "phone",
      impact: [
        {
          type: "financial",
          details: "",
          metadata: { amount: undefined, currency: "INR", stress: false, anxiety: false },
        },
      ],
      status: "open",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "impact",
  });

  const onSubmit = (data: FraudEntityFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Entity Type */}
      <div>
        <label>Entity Type</label>
        <Select
          onValueChange={(value) => setValue("entityType", value as "phone" | "email" | "website")}
          value={getValues("entityType") as "phone" | "email" | "website"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select entity type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="website">Website</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Entity Identifier */}
      <div>
        <label>Entity Identifier</label>
        <Input
          type="text"
          placeholder="Enter identifier (e.g., phone number, email)"
          {...register("entityIdentifier")}
        />
      </div>

      {/* Short Description */}
      <div>
        <label>Short Description</label>
        <Input
          type="text"
          placeholder="Enter a brief description (optional)"
          {...register("shortDescription")}
        />
      </div>

      {/* Long Description */}
      <div>
        <label>Long Description</label>
        <Textarea
          placeholder="Enter a detailed description"
          {...register("longDescription")}
        />
      </div>

      {/* Impact */}
      <div>
        <label>Impact</label>
        <Button
          type="button"
          onClick={() =>
            append({
              type: "financial",
              details: "",
              metadata: {},
            })
          }
        >
          <Plus /> Add Impact
        </Button>
        {fields.map((field, index) => {
          console.log(getValues(`impact.${index}`)); // Log the current value of each impact index
          return (
            <div key={field.id} className="space-y-0.5">
              {/* Impact Type Dropdown */}
              <div>
                <label>Type</label>
                <Select
                  value={getValues(`impact.${index}.type`)} // Get value for current index from React Hook Form
                  onValueChange={(value) => {
                    setValue(`impact.${index}.type`, value as "financial" | "emotional" | "reputational" | "other"); // Update form state on value change
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select impact type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial</SelectItem>
                    <SelectItem value="emotional">Emotional</SelectItem>
                    <SelectItem value="reputational">Reputational</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Impact Details */}
              <div>
                <label>Details</label>
                <Textarea
                  placeholder="Enter details about the impact"
                  {...register(`impact.${index}.details` as const)}
                />
              </div>

              {/* Metadata (Conditional rendering based on impact type) */}
              <div>
                {field.type === "financial" && (
                  <>
                    <Input
                      type="number"
                      placeholder="Amount"
                      {...register(`impact.${index}.metadata.amount` as const)}
                    />
                    <Input
                      type="text"
                      placeholder="Currency"
                      {...register(`impact.${index}.metadata.currency` as const)}
                    />
                  </>
                )}
                {field.type === "emotional" && (
                  <>
                    <label>
                      <input
                        type="checkbox"
                        {...register(`impact.${index}.metadata.stress` as const)}
                      />
                      Stress
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        {...register(`impact.${index}.metadata.anxiety` as const)}
                      />
                      Anxiety
                    </label>
                  </>
                )}
              </div>

              {/* Remove Impact Button */}
              <Button type="button" onClick={() => remove(index)} size="icon">
                <X />
              </Button>
            </div>
          );
        })}
      </div>

      {/* Prevention Steps */}
      <div>
        <label>Prevention Steps</label>
        <Textarea
          placeholder="Enter prevention steps (optional)"
          {...register("preventionSteps")}
        />
      </div>

      {/* Status */}
      <div>
        <label>Status</label>
        <Select
          onValueChange={(value) => setValue("status", value as "open" | "resolved" | "closed" | "progress")}
          value={getValues("status") as "open" | "resolved" | "closed" | "progress"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="progress">In Progress</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Submit Button */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReportForm;
