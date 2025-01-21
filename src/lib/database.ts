import { MongoClient } from 'mongodb'
interface CustomGlobal {
  _mongoClientPromise?: Promise<MongoClient>
}
declare const global: CustomGlobal
const uri = process.env.MONGODB_URI
let client: MongoClient
let connectDB: Promise<MongoClient>
if (!uri) {
  throw new Error('URI 이상함')
}
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  connectDB = global._mongoClientPromise
} else {
  connectDB = new MongoClient(uri).connect()
}
export { connectDB }
