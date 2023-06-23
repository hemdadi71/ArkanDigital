// import dbConnect from '@/lib/dbConnect';
import dbConnect from '@/lib/dbConenct'
import OrderModel from '@/server/models/OrderModel'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req
  await dbConnect()

  switch (method) {
    case 'PUT':
      try {
        const { id } = query

        // Find the order by ID and update it with the data from the request body
        const order = await OrderModel.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        })

        if (!order) {
          res.status(404).json({ success: false, error: 'Order not found' })
        } else {
          res.status(200).json({ success: true, order })
        }
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to update order' })
      }
      break

    default:
      res.status(400).json({ success: false, error: 'Invalid request method' })
      break
  }
}
