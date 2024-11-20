import { FormContextProvider } from "./FormContext"
import StepForm from "./StepForm"

interface ReportProps {
  userDetails: {
    email: string | null
    displayName: string | null
  }
}
const ReportForm = (props: ReportProps) => {
  return (
    <FormContextProvider userData={props.userDetails}>
      <StepForm />
    </FormContextProvider>
  )
}

export default ReportForm
