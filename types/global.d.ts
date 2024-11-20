// global.d.ts
import mongoose from "mongoose"

declare global {
  let mongoose: {
    conn: mongoose.Connection | null
    promise: Promise<mongoose.Connection> | null
  }
}
