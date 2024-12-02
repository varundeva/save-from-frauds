import { headers } from "next/headers"
import maskEmail from "@/utils/maskEmail"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Impact {
  type: string
  details: string
  metadata: {
    stress?: boolean
    anxiety?: boolean
    amount?: number
    currency?: string
  }
}

interface Report {
  _id: string
  fraudEntityId: string
  longDescription: string
  shortDescription: string
  impact: Impact[]
  preventionSteps: string
  reportedBy: string
  status: string
  reportedAt: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface FraudEntity {
  _id: string
  entityType: string
  entityIdentifier: string
  createdAt: string
  updatedAt: string
  reports: Report[]
}

type FraudData = FraudEntity[]

const page = async ({ params }: { params: { reportId: string } }) => {
  const { reportId } = params

  let data: FraudData
  try {
    const baseUrl = `${headers().get("x-forwarded-proto")}://${headers().get("host")}`
    const reqUrl = baseUrl + "/api/report?reportId=" + reportId

    const response = await fetch(reqUrl, {
      method: "GET",
      cache: "no-cache",
    })

    if (!response.ok) {
      console.error("Fetch Failed with Status:", response.status)
      throw new Error("Failed to fetch data")
    }
    data = await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      return (
        <div className="mx-auto max-w-lg p-4 text-center text-red-500">
          Failed to load data: {error.message}
        </div>
      )
    } else {
      return (
        <div className="mx-auto max-w-lg p-4 text-center text-red-500">
          Failed to load data
        </div>
      )
    }
  }

  return (
    <div className="mx-auto mt-5 min-h-screen space-y-6">
      {data.map((entity) => (
        <Card key={entity._id} className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Entity Type: {entity.entityType}
            </CardTitle>
            <CardDescription className="text-current">
              Identifier: {entity.entityIdentifier}
            </CardDescription>
            <p className="text-sm text-gray-500">
              First Reported At: {new Date(entity.createdAt).toLocaleString()}
            </p>
          </CardHeader>
          <CardContent>
            {entity.reports.map((report) => (
              <Card key={report._id} className="mt-2 break-words border">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Detailed Report
                  </CardTitle>
                  <CardDescription className="text-current">
                    <p>
                      <span className="font-bold">Short Description:</span>
                      {report.shortDescription}
                    </p>
                    <p>
                      <span className="font-bold">Long Description:</span>
                      {report.longDescription}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="mb-2 font-medium text-current">Impact:</h4>
                    {report.impact.map((impactItem, index) => (
                      <div key={index} className="mb-4 rounded border p-4">
                        <p className="text-sm font-medium">
                          <strong>Type:</strong> {impactItem?.type || "N/A"}
                        </p>
                        <p className="text-sm">
                          <strong>Details:</strong>{" "}
                          {impactItem?.details || "N/A"}
                        </p>

                        {/* Financial Impact */}
                        {impactItem?.type === "financial" && (
                          <p className="text-sm">
                            <strong>Amount:</strong>{" "}
                            {impactItem?.metadata?.amount || "N/A"}{" "}
                            {impactItem?.metadata?.currency || ""}
                          </p>
                        )}

                        {/* Emotional Impact */}
                        {impactItem?.type === "emotional" && (
                          <div>
                            <p className="text-sm">
                              <strong>Stress:</strong>{" "}
                              {impactItem?.metadata?.stress ? "Yes" : "No"}
                            </p>
                            <p className="text-sm">
                              <strong>Anxiety:</strong>{" "}
                              {impactItem?.metadata?.anxiety ? "Yes" : "No"}
                            </p>
                          </div>
                        )}

                        {/* Reputational Impact */}
                        {impactItem?.type === "reputational" && (
                          <p className="text-sm">
                            <strong>Details:</strong>{" "}
                            {impactItem?.details || "No details provided."}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  <p>
                    <span className="font-bold">Prevention Steps:</span>{" "}
                    {report.preventionSteps}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Reported By:</span>{" "}
                    {maskEmail(report.reportedBy)}
                  </p>
                  <p className="text-sm">
                    {" "}
                    <span className="font-bold">Status:</span> {report.status}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Reported At:</span>
                    {new Date(report.reportedAt).toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default page
