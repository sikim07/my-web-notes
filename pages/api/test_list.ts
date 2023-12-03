import Exception, { CF_ERROR_CODES } from '@/configs/error'
import connectToDatabase from '@/lib/mongodb'
import { Db } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next/types'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    const connection = await connectToDatabase()
    const database: Db | undefined = connection?.database
    if (database === undefined) throw new Exception(CF_ERROR_CODES.DB_CONNECTION_UNDFINED)

    const collection = database.collection('Test1')

    if (request.method === 'GET') {
        const results = await collection.find({}).limit(10).toArray()
        response.status(200).json(results)
    } else if (request.method === 'POST') {
        const condition: string | string[] | undefined = request.query.id
        if (condition === undefined) throw new Exception(CF_ERROR_CODES.NO_QUERY_PARAMS)
        const data = request.body
    }
}

export default handler
