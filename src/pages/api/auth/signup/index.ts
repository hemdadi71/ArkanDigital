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
        const {
          firstname,
          lastname,
          username,
          email,
          password,
          reenterPassword,
        } = req.body

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
          firstname,
          lastname,
          username,
          email,
          password,
          reenterPassword,
          role: 'user',
        })
        res.status(201).json({ success: true, user })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to create user' })
      }
      break
    case 'PUT': // Update profile
      try {
        const { firstname, lastname, phone, address, userId } = req.body

        // Find the user in the database
        const user = await UserModel.findById(userId)
        if (!user) {
          res.status(404).json({ success: false, message: 'User not found' })
          return
        }

        // Update the user's profile fields
        user.firstname = firstname || user.firstname
        user.lastname = lastname || user.lastname
        user.phone = phone || user.phone
        user.address = address || user.address

        // Save the updated user
        await user.save()

        res.status(200).json({ success: true, user })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to update user' })
      }
      break
  }
}
