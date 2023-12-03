import { connectToDatabase } from '@/lib/mongodb'
import { Db, MongoClient } from 'mongodb'

const handler = async (request, response) => {
    const connection = await connectToDatabase()
    const database: Db | undefined = connection?.database
    if (database === undefined) return
    const collection = database?.collection('Test1')
    if (request.method === 'POST') {
        const data = request.body
    } else if (request.method === 'GET') {
        const condition = request.header
        const results = await collection
            .find({})
            .project({
                grades: 0,
                borough: 0,
                restaurant_id: 0,
            })
            .limit(10)
            .toArray()

        response.status(200).json(results)
    }
}

export default handler
