import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConenct'
import UserModel from '@/server/models/User.model'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'POST': // Sign up
      try {
        const { username, email, password, reenterPassword } = req.body

        // Check if required properties exist
        if (!username || !email || !password || !reenterPassword) {
          res
            .status(400)
            .json({ success: false, message: 'Missing required properties' })
          return
        }

        // Check if password and reentered password match
        if (password !== reenterPassword) {
          res
            .status(400)
            .json({ success: false, message: 'Passwords do not match' })
          return
        }

        // Check if user with the same email already exists
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
          res.status(400).json({
            success: false,
            message: 'User with this email already exists',
          })
          return
        }

        const user = await UserModel.create({
          username,
          email,
          password,
          reenterPassword,
          cart: [],
          rode: 'user',
        })
        res.status(201).json({ success: true, user })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to create user' })
      }
      break
  }
}
