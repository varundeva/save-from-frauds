import "server-only"

import { StackServerApp } from "@stackframe/stack"

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  urls: {
    signIn: "/auth/login",
    signUp: "/auth/register",
    accountSettings: "/auth/account",
  },
})
