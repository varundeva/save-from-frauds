import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react"

export interface IImpact {
  type?: "financial" | "emotional" | "reputational" | "other" | ""
  details?: string
  metadata?: {
    amount?: number
    currency?: string
    stress?: boolean
    anxiety?: boolean
  }
}

export interface IReportDataForm {
  fraudEntityId?: string
  longDescription?: string
  shortDescription?: string
  impact?: IImpact[]
  preventionSteps?: string
  reportedAt?: string
  reportedBy?: string
  status?: "open" | "resolved" | "closed" | "progress"
}

export interface IFraudEntityForm extends IReportDataForm {
  entityType?: "email" | "phone" | "website"
  entityIdentifier?: string | undefined
}
// Define the context type
interface DataContextType {
  data: IFraudEntityForm
  setData: Dispatch<SetStateAction<IFraudEntityForm>>
  step: number
  setStep: Dispatch<SetStateAction<number>>
  userData: object
}

// Create the context
export const FormContext = createContext<DataContextType | undefined>(undefined)

interface DataProviderProps {
  children: ReactNode
  userData: {
    email: string | null
    displayName: string | null
  }
}

// Create the Provider
export const FormContextProvider: React.FC<DataProviderProps> = ({
  userData,
  children,
}) => {
  const [data, setData] = useState<IFraudEntityForm>({}) // Initialize as an empty object
  const [step, setStep] = useState<number>(1) // Initialize the step at 1
  return (
    <FormContext.Provider value={{ data, setData, step, setStep, userData }}>
      {children}
    </FormContext.Provider>
  )
}
