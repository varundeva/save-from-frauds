import React, { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { get } from "lodash"
import { Loader2 } from "lucide-react"
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  FormContext,
  IFraudEntityForm,
  IImpact,
  IReportDataForm,
} from "./FormContext"

const ReportDataForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const formContext = useContext(FormContext)
  const { toast } = useToast()
  const route = useRouter()
  if (!formContext) {
    throw new Error("Context not found")
  }

  const { data, setData, setStep, userData } = formContext

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
    reset,
    getValues,
  } = useForm<IFraudEntityForm>({
    defaultValues: data,
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "impact",
  })

  useEffect(() => {
    reset(data) // Populate all fields
  }, [data, reset])

  const onSubmit: SubmitHandler<IFraudEntityForm> = async (reportData) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          ...reportData,
          reportedBy: get(userData, "email", ""),
        }),
      })
      if (response.status === 201) {
        setIsLoading(false)
        setData({})
        reset({})
        route.push("/")
        return toast({
          title: "Report created successfully",
          description:
            "Report Submitted, After approval it will be available to view publically",
        })
      }
    } catch (error) {
      console.error("Error creating report:", error)
      if (error instanceof Error) {
        toast({
          title: "Something wrong while creating report",
          description: error.message,
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      {/* Heading */}
      <h1 className="mb-4 text-2xl font-bold">Fraud Report Submission</h1>

      {/* Description */}
      <p className=" mb-6">
        This form allows you to submit a detailed report regarding an incident
        of fraud or suspicious activity.
        <br />
        Please provide the necessary information about the type of fraud, the
        entity involved, and any additional details that will help us understand
        the situation better.
        <br />
        The more accurate and thorough the information, the better we can assess
        and take appropriate action.
        <br />
        If you&apos;re unsure about any field, don&apos;t hesitate to refer to
        the tooltips for guidance.
        <br />
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-4">
        {/* Short Description */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            <span>Short Description</span>
            <span className="ml-1 text-red-500">*</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                  Provide a brief overview of the fraudulent activity. This is a
                  quick summary to describe the fraud in one or two sentences.
                  For example, &quot;Received a phishing email claiming to be
                  from my bank.&quot;
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <Input
            {...register("shortDescription", {
              required: "Short description is required.",
            })}
            placeholder="Enter short description"
          />
          {errors.shortDescription && (
            <p className="text-sm text-red-500">
              {errors.shortDescription.message}
            </p>
          )}
        </div>
        {/* Long Description */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            <span>Long Description</span>
            <span className="ml-1 text-red-500">*</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                  Explain the fraudulent activity in detail. Include all
                  relevant information about the fraud, such as when it
                  occurred, how you were targeted, the actions taken by the
                  entity, and any communication or evidence (e.g., messages,
                  calls, or emails). The more details you provide, the better we
                  can understand the situation.{" "}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <Textarea
            {...register("longDescription", {
              required: "Long description is required.",
            })}
            placeholder="Enter detailed description"
          />
          {errors.longDescription && (
            <p className="text-sm text-red-500">
              {errors.longDescription.message}
            </p>
          )}
        </div>
        {/* Impact */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            <span>Impacts</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                  Describe how this fraud has affected you. Impacts can be
                  financial, emotional, reputational, or other. For example, a
                  financial impact could involve losing money, while an
                  emotional impact might involve stress or anxiety.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <Button
            type="button"
            className="w-1/4-"
            size={"sm"}
            onClick={() => append({ type: "", details: "" })}
          >
            Add Impact
          </Button>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="my-4 space-y-2 rounded-md border p-4"
            >
              <div>
                <label className="mb-1 block text-sm font-medium">
                  <span>Select Impact Type</span>
                  <span className="ml-1 text-red-500">*</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                            />
                          </svg>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                        Select the type of impact caused by this fraud. You can
                        choose from Financial, Emotional, Reputational, or
                        Other. This helps us understand the kind of harm the
                        fraud caused.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <Controller
                  name={`impact.${index}.type`}
                  control={control}
                  rules={{ required: "Select impact type" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      onValueChange={(value) =>
                        setValue(
                          `impact.${index}.type`,
                          value as IImpact["type"]
                        )
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Impact Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="emotional">Emotional</SelectItem>
                        <SelectItem value="reputational">
                          Reputational
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {get(errors, `impact.${index}.type`) && (
                  <p className="mt-1 text-sm text-red-500">
                    {get(errors, `impact.${index}.type.message`)}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  <span>Impact Details</span>
                  <span className="ml-1 text-red-500">*</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                            />
                          </svg>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                        Provide additional details about the impact. Explain how
                        the fraud affected you. For instance, if the type is
                        financial, specify the monetary loss. If emotional,
                        mention stress or anxiety levels.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <Textarea
                  {...register(`impact.${index}.details` as const, {
                    required: "Impact details are required.",
                  })}
                  placeholder="Enter details about the impact"
                />
                {get(errors, `impact.${index}.details`) && (
                  <p className="mt-1 text-sm text-red-500">
                    {get(errors, `impact.${index}.details.message`)}
                  </p>
                )}
              </div>

              {watch(`impact.${index}.type`) === "financial" && (
                <div className="flex gap-4">
                  {/* Metadata: Financial */}
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      <span>Amount</span>
                      <span className="ml-1 text-red-500">*</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                />
                              </svg>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                            Enter the approximate amount of money lost due to
                            the fraud
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Input
                      type="number"
                      {...register(`impact.${index}.metadata.amount` as const, {
                        required: "Please enter amount",
                      })}
                      placeholder="Amount (Financial Impact)"
                    />
                    {get(errors, `impact.${index}.metadata.amount`) && (
                      <p className="mt-1 text-sm text-red-500">
                        {get(errors, `impact.${index}.metadata.amount.message`)}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      <span>Currency</span>
                      <span className="ml-1 text-red-500">*</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                />
                              </svg>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                            Select the relevant currency (e.g., USD, EUR).
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <Input
                      {...register(
                        `impact.${index}.metadata.currency` as const,
                        { required: "Please enter currency" }
                      )}
                      placeholder="Currency"
                      defaultValue="INR"
                    />
                    {get(errors, `impact.${index}.metadata.currency`) && (
                      <p className="mt-1 text-sm text-red-500">
                        {get(
                          errors,
                          `impact.${index}.metadata.currency.message`
                        )}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {watch(`impact.${index}.type`) === "emotional" && (
                <div className="flex items-center gap-5">
                  {/* Metadata: Emotional */}
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        {...register(
                          `impact.${index}.metadata.stress` as const
                        )}
                      />
                      Stress
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        {...register(
                          `impact.${index}.metadata.anxiety` as const
                        )}
                      />
                      Anxiety
                    </label>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  variant="destructive"
                  className="w-1/4-"
                  size={"sm"}
                >
                  Remove Impact
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* Prevention Steps */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            <span>Prevention Steps</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                  Describe any steps you took to prevent or mitigate the fraud.
                  For example, did you block a phone number, report the fraud to
                  authorities, or change your passwords? This information helps
                  us understand what actions were taken after the incident.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <Textarea
            {...register("preventionSteps")}
            placeholder="What prevention steps you taken  to come out from this fruad"
          />
        </div>
        {/* Status */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            <span>Status</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-1 inline-flex cursor-pointer align-text-bottom text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs rounded-md bg-gray-700 p-2 text-white shadow-md">
                  Indicate the current status of the fraud case.
                  <br />
                  Choose one of the following:
                  <ul>
                    <li>
                      Open: The fraud is unresolved and requires further
                      attention.
                    </li>
                    <li>
                      In Progress: Actions are being taken to resolve the fraud.
                    </li>
                    <li>
                      Resolved: The fraud has been addressed and no further
                      action is needed.
                    </li>
                    <li>
                      {" "}
                      Closed: The case is no longer being pursued, regardless of
                      resolution.
                    </li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <Controller
            name={"status"}
            control={control}
            rules={{ required: "Please select report status" }}
            render={({ field }) => (
              <Select
                {...field}
                onValueChange={(value) =>
                  setValue("status", value as IReportDataForm["status"])
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="progress">
                    Investigation Progress
                  </SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.status && (
            <p className="text-sm text-red-500">{errors.status.message}</p>
          )}
        </div>
        {/* Submit Button and Goback button */}
        <div className="flex justify-between">
          <Button
            type="button"
            className="w-full bg-secondary text-primary hover:text-secondary lg:w-1/3"
            onClick={() => {
              setStep((prev) => prev - 1)
              setData((prev) => {
                return { ...prev, ...getValues() }
              })
            }}
          >
            Go Back
          </Button>
          <Button
            type="submit"
            className="w-full bg-primary lg:w-1/3"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ReportDataForm
