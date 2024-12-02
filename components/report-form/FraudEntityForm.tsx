import React, { useContext, useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { FormContext } from "./FormContext"

interface FormData {
  entityType: "phone" | "email" | "website"
  entityIdentifier: string
}

const ShadCNForm: React.FC = () => {
  const formContext = useContext(FormContext)

  if (!formContext) {
    throw new Error("Context not found")
  }

  const { data, setData, setStep } = formContext

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
    control,
  } = useForm<FormData>({
    defaultValues: data,
  })

  useEffect(() => {
    // Populate the form when the component loads
    if (data.entityType || data.entityIdentifier) {
      reset(data) // Populate all fields
    }
  }, [data, reset])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setData((prev) => {
      return { ...prev, ...data }
    })
    setStep((prev) => prev + 1)
  }

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      {/* Heading */}
      <h1 className="mb-4 text-2xl font-bold">Report a Fraudulent Entity</h1>

      {/* Description */}
      <p className=" mb-6">
        Help us take action against fraud by providing information about the
        entity involved.
        <br />
        This could be a phone number, email address, or website used in
        fraudulent activities.
        <br />
        Please fill out the form below with accurate details so everyone can be
        aware of this.
      </p>

      {/* Info about form */}
      <p className=" mb-6">
        This will be multi step form
        <br />
        Need to provide information in 2 steps.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-4">
        <div>
          <Label>
            <span>Entity/Fraud Type</span>
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
                  Select the type of entity involved in the fraud. This could be
                  a phone number used for scam calls, an email address used for
                  phishing, or a website used to deceive victims.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Controller
            name="entityType"
            control={control}
            rules={{ required: "Entity/Fraud type is required." }}
            render={({ field }) => (
              <Select
                {...field}
                onValueChange={(value) =>
                  setValue("entityType", value as FormData["entityType"])
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Entity Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.entityType && (
            <p className="mt-1 text-sm text-red-500">
              {errors?.entityType?.message}
            </p>
          )}
        </div>

        {/* Entity Identifier */}
        <div>
          <Label>
            Entity Identifier
            <span className="ml-1 text-red-500">*</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-2 inline-flex cursor-pointer items-center text-gray-400">
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
                  Provide the specific details of the entity you selected above.
                  For example, enter the phone number (e.g., +123456789), email
                  address (e.g., example@example.com), or website URL (e.g.,
                  https://example.com) that was involved in the fraud.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Input
            id="entityIdentifier"
            type="text"
            {...register("entityIdentifier", {
              required: "Entity Identifier is required.",
              validate: (value) => {
                const trimmedValue = value.trim()
                if (watch("entityType") === "phone") {
                  const phoneRegex =
                    /^(\+?[1-9]\d{0,3})?[\s-]?(\(?\d{1,4}\)?[\s-]?)?\d{4,14}$/
                  return (
                    phoneRegex.test(trimmedValue) ||
                    "Invalid phone number format."
                  )
                } else if (watch("entityType") === "email") {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                  return (
                    emailRegex.test(trimmedValue) || "Invalid email format."
                  )
                } else if (watch("entityType") === "website") {
                  const urlRegex =
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/
                  return (
                    urlRegex.test(trimmedValue) ||
                    "Invalid website URL format. It should be like https://domain.tld"
                  )
                }
                return true
              },
              setValueAs: (value) => value.trim(),
            })}
            placeholder={
              watch("entityType") === "phone"
                ? "Enter phone number"
                : watch("entityType") === "email"
                  ? "Enter email address"
                  : "Enter website URL"
            }
          />

          {errors.entityIdentifier && (
            <p className="mt-1 text-sm text-red-500">
              {errors?.entityIdentifier?.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" className="w-1/3 bg-primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ShadCNForm
