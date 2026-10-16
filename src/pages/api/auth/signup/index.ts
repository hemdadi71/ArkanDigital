import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConenct'
import UserModel from '@/server/models/User.model'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const { username, email, password, reenterPassword } = req.body

        if (!username || !email || !password || !reenterPassword) {
          res
            .status(400)
            .json({ success: false, message: 'Missing required properties' })
          return
        }

        if (password !== reenterPassword) {
          res
            .status(400)
            .json({ success: false, message: 'Passwords do not match' })
          return
        }

        const existingUser = await UserModel.findOne({
          $or: [{ email }, { username }],
        })

        if (existingUser) {
          res.status(400).json({
            success: false,
            message:
              existingUser.email === email
                ? 'این ایمیل قبلاً ثبت شده است'
                : 'این نام کاربری قبلاً ثبت شده است',
          })
          return
        }

        const user = await UserModel.create({
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
    case 'PUT':
      try {
        const { firstname, lastname, phone, address, userId } = req.body

        const user = await UserModel.findById(userId)
        if (!user) {
          res.status(404).json({ success: false, message: 'User not found' })
          return
        }

        user.firstname = firstname || user.firstname
        user.lastname = lastname || user.lastname
        user.phone = phone || user.phone
        user.address = address || user.address

        await user.save()

        res.status(200).json({ success: true, user })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to update user' })
      }
      break
  }
}
