// import dbConnect from '@/lib/dbConnect';
import dbConnect from '@/lib/dbConenct'
import OrderModel from '@/server/models/OrderModel'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const { page = 1, limit = 10, sort, quantity } = req.query

        const filter: any = {}

        if (quantity && typeof quantity === 'object' && 'gte' in quantity) {
          filter.quantity = { $gte: Number(quantity.gte) }
        }

        let sortOption: any = {}

        if (sort === 'price') {
          sortOption = { price: 1 }
        } else if (sort === '-price') {
          sortOption = { price: -1 }
        }

        const orders = await OrderModel.find(filter)
          .sort(sortOption)
          .skip((Number(page) - 1) * Number(limit))
          .limit(Number(limit))
          .populate('user', 'username')

        res.status(200).json({ success: true, orders })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to fetch orders' })
      }
      break

    case 'POST':
      try {
        // Create a new order using the data from the request body
        const order = await OrderModel.create(body)
        res.status(201).json({ success: true, order })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to create order' })
      }
      break

    case 'PUT':
      try {
        const { id } = req.query

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

    case 'DELETE':
      try {
        const { id } = req.query

        // Find the order by ID and delete it
        const order = await OrderModel.findByIdAndDelete(id)

        if (!order) {
          res.status(404).json({ success: false, error: 'Order not found' })
        } else {
          res.status(200).json({ success: true, order })
        }
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to delete order' })
      }
      break

    default:
      res.status(400).json({ success: false, error: 'Invalid request method' })
      break
  }
}
