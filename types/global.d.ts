// global.d.ts
import mongoose from "mongoose"

declare global {
  let mongoose: {
    conn: mongoose.Connection | null
    promise: Promise<mongoose.Connection> | null
  }
}

declare module "*.png" {
  const value: string
  export default value
}
