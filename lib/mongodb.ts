import { MongoClient, Db } from 'mongodb'

const uri = process.env.DB_CONNECT_URI

let mongoClient: MongoClient | null = null
let database: Db | null = null

if (!process.env.DB_CONNECT_URI) {
    throw new Error('Please add your Mongo URI to .env.local')
}

export async function connectToDatabase() {
    try {
        if (!uri) return {}
        if (mongoClient && database) {
            return { mongoClient, database }
        }

        mongoClient = await new MongoClient(uri).connect()
        database = await mongoClient.db('Test')
        return { mongoClient, database }
    } catch (e) {
        console.error(e)
    }
}
