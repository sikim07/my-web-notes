import { MongoClient, Db } from 'mongodb'
import Exception, { CF_ERROR_CODES } from '@/configs/error'

export async function connectToDatabase() {
    const uri: string | undefined = process.env.DB_CONNECT_URI
    if (!uri) {
        throw new Exception(CF_ERROR_CODES.ENV_UNDEFINED)
    }

    try {
        if (uri === undefined) throw new Exception(CF_ERROR_CODES.ENV_UNDEFINED)

        const mongoClient: MongoClient | null = await new MongoClient(uri).connect()
        const database: Db | null = mongoClient.db('Test')
        return { mongoClient, database }
    } catch (e) {
        console.error(e)
    }
}
