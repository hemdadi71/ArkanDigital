import UserModel from '@/server/models/User.model'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import dbConnect from '@/lib/dbConenct'
import crypto from 'crypto'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      const { username, password } = body
      // Check if required properties exist
      if (!username || !password) {
        res
          .status(400)
          .json({ success: false, message: 'Missing required properties' })
        return
      }

      const user = await UserModel.findOne({ username })

      if (!user) {
        res.status(401).json({ success: false, message: 'Invalid credentials' })
        return
      }

      const isPasswordValid = (await user.password) === password
      if (!isPasswordValid) {
        res.status(401).json({ success: false, message: 'Invalid credentials' })
        return
      }

      const accessTokenSecret = crypto.randomBytes(64).toString('hex')
      const refreshTokenSecret = crypto.randomBytes(64).toString('hex')
      // Generate tokens
      const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret)
      const refreshToken = jwt.sign({ userId: user._id }, refreshTokenSecret)
      res.status(200).json({
        success: true,
        user: {
          id: user._id,
          email: user.email,
          password: user.password,
          name: user.name,
          username: user.username,
          role: user.role,
          firstname: user.firstname,
          lastname: user.lastname,
          phonenumber: user.phonenumber,
          address: user.address,
          avatar: user.avatar,
        },
        tokens: {
          accessToken,
          refreshToken,
        },
      })
    } catch (error) {
      res.status(400).json({ success: false, error: 'fkldsfj' })
    }
  } else {
    res.status(400).json({ success: false })
  }
}
