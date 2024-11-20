"use client"
import { get } from "lodash"

import ReportForm from "@/components/report-form/ReportForm"
import { useUser } from "@stackframe/stack"

export default function ReportPage() {
  const user = useUser()

  return (
    <ReportForm
      userDetails={{
        email: get(user, "primaryEmail", null),
        displayName: get(user, "displayName", null),
      }}
    />
  )
}
