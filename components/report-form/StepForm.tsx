import React, { useContext } from "react"

import { FormContext } from "./FormContext"
import FraudEntityForm from "./FraudEntityForm"
import ReportDataForm from "./ReportDataForm"

const StepForm = () => {
  const formContext = useContext(FormContext)

  if (!formContext) {
    throw new Error("Context not found")
  }

  const { step } = formContext

  return (
    <div className="min-h-screen my-5">
      {/* Conditionally render the forms based on the current step */}
      {step === 1 && <FraudEntityForm />}
      {step === 2 && <ReportDataForm />}
    </div>
  )
}

export default StepForm
