import React, { useContext, useEffect } from 'react';
import { useForm, useFieldArray, SubmitHandler, Controller } from 'react-hook-form';
import { get } from "lodash"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import {
    Input,
} from "@/components/ui/input"
import {
    Textarea
} from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import { FormContext, IFraudEntityForm, IImpact, IReportDataForm } from './FormContext';



const ReportDataForm: React.FC = () => {

    const formContext = useContext(FormContext);

    if (!formContext) {
        throw new Error("Context not found");
    }

    const { data, setData, setStep } = formContext;

    const { register, handleSubmit, control, setValue, formState: { errors }, watch, reset, getValues } = useForm<IFraudEntityForm>({
        defaultValues: data
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'impact',
    });

    useEffect(() => {
        reset(data); // Populate all fields
    }, [data, reset]);

    const onSubmit: SubmitHandler<IFraudEntityForm> = (reportData) => {
        setData((prev) => {
            return ({ ...prev, ...reportData })
        })
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-white mb-4">
                Fraud Report Submission
            </h1>

            {/* Description */}
            <p className="text-gray-100 mb-6">
                This form allows you to submit a detailed report regarding an incident of fraud or suspicious activity.<br/>
                Please provide the necessary information about the type of fraud, the entity involved, and any additional details that will help us understand the situation better.<br/>
                The more accurate and thorough the information, the better we can assess and take appropriate action.<br/>
                If you&apos;re unsure about any field, don&apos;t hesitate to refer to the tooltips for guidance.<br/>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mx-auto">
                {/* Short Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        <span>
                            Short Description
                        </span>
                        <span className="text-red-500 ml-1">*</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                            />
                                        </svg>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                    Provide a brief overview of the fraudulent activity.
                                    This is a quick summary to describe the fraud in one or two sentences. For example, &quot;Received a phishing email claiming to be from my bank.&quot;
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </label>
                    <Input
                        {...register('shortDescription', { required: 'Short description is required.' })}
                        placeholder="Enter short description"
                    />
                    {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>}

                </div>
                {/* Long Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        <span>Long Description</span>
                        <span className="text-red-500 ml-1">*</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                            />
                                        </svg>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                    Explain the fraudulent activity in detail.
                                    Include all relevant information about the fraud, such as when it occurred, how you were targeted, the actions taken by the entity, and any communication or evidence (e.g., messages, calls, or emails). The more details you provide, the better we can understand the situation. </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </label>
                    <Textarea
                        {...register('longDescription', { required: 'Long description is required.' })}
                        placeholder="Enter detailed description"
                    />
                    {errors.longDescription && <p className="text-red-500 text-sm">{errors.longDescription.message}</p>}
                </div>
                {/* Impact */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        <span>Impacts</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                            />
                                        </svg>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                    Describe how this fraud has affected you.
                                    Impacts can be financial, emotional, reputational, or other. For example, a financial impact could involve losing money, while an emotional impact might involve stress or anxiety.
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </label>
                    <Button type="button" className='w-1/4-' size={'sm'} onClick={() => append({ type: '', details: '' })}>
                        Add Impact
                    </Button>
                    {fields.map((field, index) => (
                        <div key={field.id} className="space-y-2 border p-4 rounded-md my-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    <span>Select Impact Type</span>
                                    <span className="text-red-500 ml-1">*</span>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                                        />
                                                    </svg>
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                                Select the type of impact caused by this fraud.
                                                You can choose from Financial, Emotional, Reputational, or Other. This helps us understand the kind of harm the fraud caused.
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </label>
                                <Controller
                                    name={`impact.${index}.type`}
                                    control={control}
                                    rules={{ required: 'Select impact type' }}
                                    render={({ field }) => (
                                        <Select {...field} onValueChange={(value) => setValue(`impact.${index}.type`, value as IImpact['type'])}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Impact Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="financial">Financial</SelectItem>
                                                <SelectItem value="emotional">Emotional</SelectItem>
                                                <SelectItem value="reputational">Reputational</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {get(errors, `impact.${index}.type`) && (
                                    <p className="text-red-500 text-sm mt-1">{get(errors, `impact.${index}.type.message`)}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    <span>Impact Details</span>
                                    <span className="text-red-500 ml-1">*</span>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                                        />
                                                    </svg>
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                                Provide additional details about the impact.
                                                Explain how the fraud affected you. For instance, if the type is financial, specify the monetary loss. If emotional, mention stress or anxiety levels.
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </label>
                                <Textarea
                                    {...register(`impact.${index}.details` as const, { required: 'Impact details are required.' })}
                                    placeholder="Enter details about the impact"
                                />
                                {get(errors, `impact.${index}.details`) && (
                                    <p className="text-red-500 text-sm mt-1">{get(errors, `impact.${index}.details.message`)}</p>
                                )}
                            </div>

                            {watch(`impact.${index}.type`) === "financial" && <div className="flex gap-4">
                                {/* Metadata: Financial */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        <span>Amount</span>
                                        <span className="text-red-500 ml-1">*</span>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                                            />
                                                        </svg>
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                                    Enter the approximate amount of money lost due to the fraud
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                    </label>
                                    <Input
                                        type="number"
                                        {...register(`impact.${index}.metadata.amount` as const, { required: "Please enter amount" })}
                                        placeholder="Amount (Financial Impact)"
                                    />
                                    {get(errors, `impact.${index}.metadata.amount`) && (
                                        <p className="text-red-500 text-sm mt-1">{get(errors, `impact.${index}.metadata.amount.message`)}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        <span>Currency</span>
                                        <span className="text-red-500 ml-1">*</span>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                                            />
                                                        </svg>
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                                    Select the relevant currency (e.g., USD, EUR).
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </label>
                                    <Input
                                        {...register(`impact.${index}.metadata.currency` as const, { required: "Please enter currency" })}
                                        placeholder="Currency"
                                        defaultValue="INR"
                                    />
                                    {get(errors, `impact.${index}.metadata.currency`) && (
                                        <p className="text-red-500 text-sm mt-1">{get(errors, `impact.${index}.metadata.currency.message`)}</p>
                                    )}
                                </div>
                            </div>}

                            {watch(`impact.${index}.type`) === "emotional" && <div className="flex items-center gap-5">
                                {/* Metadata: Emotional */}
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            {...register(`impact.${index}.metadata.stress` as const)}
                                        />
                                        Stress
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            {...register(`impact.${index}.metadata.anxiety` as const)}
                                        />
                                        Anxiety
                                    </label>
                                </div>
                            </div>}

                            <div className='flex justify-end'>
                                <Button
                                    type="button"
                                    onClick={() => remove(index)}
                                    variant="destructive"
                                    className="w-1/4-"
                                    size={'sm'}
                                >
                                    Remove Impact
                                </Button>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Prevention Steps */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        <span>Prevention Steps</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                            />
                                        </svg>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                    Describe any steps you took to prevent or mitigate the fraud.
                                    For example, did you block a phone number, report the fraud to authorities, or change your passwords? This information helps us understand what actions were taken after the incident.
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </label>
                    <Textarea
                        {...register('preventionSteps')}
                        placeholder="What prevention steps you taken  to come out from this fruad"
                    />
                </div>
                {/* Status */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        <span>Status</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="inline-flex align-text-bottom ml-1 cursor-pointer text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8.25v4.5m0 4.5h.008v.008H12v-.008zm0-15.75a9 9 0 100 18 9 9 0 000-18z"
                                            />
                                        </svg>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-700 text-white p-2 rounded-md shadow-md max-w-xs">
                                    Indicate the current status of the fraud case.<br />
                                    Choose one of the following:
                                    <ul>
                                        <li>Open: The fraud is unresolved and requires further attention.</li>
                                        <li>In Progress: Actions are being taken to resolve the fraud.</li>
                                        <li>Resolved: The fraud has been addressed and no further action is needed.</li>
                                        <li> Closed: The case is no longer being pursued, regardless of resolution.</li>
                                    </ul>

                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </label>
                    <Controller
                        name={"status"}
                        control={control}
                        rules={{ required: 'Please select report status', }}
                        render={({ field }) => (
                            <Select {...field} onValueChange={(value) => setValue('status', value as IReportDataForm['status'])}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="open">Open</SelectItem>
                                    <SelectItem value="progress">Investigation Progress</SelectItem>
                                    <SelectItem value="resolved">Resolved</SelectItem>
                                    <SelectItem value="closed">Closed</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                </div>
                {/* Submit Button and Goback button */}
                <div className='flex justify-between'>
                    <Button type="button" className="w-full lg:w-1/3 bg-indigo-300 hover:bg-indigo-700" onClick={() => {
                        setStep((prev) => prev - 1);
                        setData((prev) => {
                            return ({ ...prev, ...getValues() })
                        })
                    }}>
                        Go Back
                    </Button>
                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-green-700 lg:w-1/3">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ReportDataForm;
