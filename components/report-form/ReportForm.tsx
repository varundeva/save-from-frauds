import { FormContextProvider } from "./FormContext";
import StepForm from "./StepForm";

const ReportForm = () => {
  return (
    <FormContextProvider>
      <StepForm />
    </FormContextProvider>
  );
};

export default ReportForm;
