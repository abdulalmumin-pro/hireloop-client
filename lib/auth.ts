import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "@better-auth/mongo-adapter"
const mongoUri = process.env.BETTER_AUTH_DB_URI

if (!mongoUri) {
  throw new Error("BETTER_AUTH_DB_URI is not set")
}

const client = new MongoClient(mongoUri)
const db = client.db("hireloopdb")

export const auth = betterAuth({
  //...

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
})
