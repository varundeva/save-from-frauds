import { StackHandler } from "@stackframe/stack"
import { stackServerApp } from "@/stack"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Handler(props: any) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />
}
