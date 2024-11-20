import mongoose, { Connection } from "mongoose"

const MONGO_URI = process.env.MONGO_URI as string

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  )
}

// Define the mongooseCache with explicit typing
const mongooseCache = {
  conn: null as Connection | null,
  promise: null as Promise<Connection> | null,
}

async function connectToDatabase(): Promise<Connection> {
  // If we already have the connection cached, return it
  if (mongooseCache.conn) {
    return mongooseCache.conn
  }

  // If there's no promise, create one
  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose
      .connect(MONGO_URI)
      .then((mongooseInstance) => {
        // eslint-disable-next-line no-console
        console.log("Connected to Database")
        return mongooseInstance.connection
      }) // Resolve to mongoose.Connection
  }

  // Wait for the connection promise to resolve and store it in the cache
  mongooseCache.conn = await mongooseCache.promise
  return mongooseCache.conn
}

export default connectToDatabase
