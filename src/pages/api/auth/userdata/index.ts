// import { NextApiRequest, NextApiResponse } from 'next'
// import jwt from 'jsonwebtoken'
// import dbConnect from '@/lib/dbConenct'
// import UserModel from '@/server/models/User.model'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method, headers } = req
//   await dbConnect()

//   if (method === 'GET') {
//     try {
//       const token: any = headers.authorization?.replace('Bearer ', '')

//       // Replace 'your-secret-key' with your actual secret key used for signing the token
//       const secretKey =
//         '5e46f014c708e7543564b04071a07010a9fe4bcbd97be6ed04204e6dfaf208ee3380f69e4bf2c6194545edb703141d95a298f07b611b6863084b147d10620742'

//       // Verify and decode the token
//       const decodedToken = jwt.verify(token, secretKey)

//       // Extract the user ID from the decoded token
//       const userId: any = decodedToken.userId

//       // Fetch the user data from the database
//       const user = await UserModel.findById(userId)

//       if (!user) {
//         res.status(404).json({ success: false, message: 'User not found' })
//         return
//       }

//       // Return the user data
//       res.status(200).json({
//         id: user._id,
//         email: user.email,
//         password: user.password,
//         name: user.name,
//         role: user.role,
//         avatar: user.avatar,
//       })
//     } catch (error) {
//       res.status(401).json({ success: false, message: 'Invalid token' })
//     }
//   } else {
//     res.status(400).json({ success: false, message: 'Bad request' })
//   }
// }
