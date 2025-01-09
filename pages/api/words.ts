import { connectDB } from '@/lib/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = (await connectDB).db('xiongdi')
    if (req.method === 'GET') {
      if (req.query.level && req.query.chapter) {
        const result = await db
          .collection('words')
          .find({ level: +req.query.level, chapter: req.query.chapter })
          .toArray()
        return res.status(200).json(result)
      } else if (req.query.random) {
        const result = await db
          .collection('words')
          .aggregate([{ $sample: { size: +req.query.random } }])
          .toArray()
        return res.status(200).json(result)
      }
    } else if (req.method === 'POST') {
      const result = await db.collection('words').insertMany(req.body)
      return res.status(200).json(result)
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
