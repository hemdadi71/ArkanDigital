import { NextApiRequest, NextApiResponse } from 'next'
import UserModel from '@/server/models/User.model'
import dbConnect from '@/lib/dbConenct'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  if (req.method === 'GET') {
    try {
      const users = await UserModel.find({})
      res.status(200).json({ success: true, users })
    } catch (error) {
      res.status(400).json({ success: false, error: 'Failed to fetch users' })
    }
  } else {
    res.status(400).json({ success: false, error: 'Invalid request method' })
  }
}
