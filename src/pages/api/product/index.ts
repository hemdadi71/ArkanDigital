import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConenct'
import ProductModel from '@/server/models/ProductModel'
import Product from '@/server/models/ProductModel'
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

        const products = await Product.find(filter)
          .sort(sortOption)
          .skip((Number(page) - 1) * Number(limit))
          .limit(Number(limit))

        res.status(200).json({ success: true, products })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to fetch products' })
      }
      break
    case 'POST':
      try {
        await dbConnect()
        const {
          name,
          slugname,
          brand,
          price,
          quantity,
          images,
          thumbnail,
          category,
          subcategory,
          description,
        } = req.body

        const product = await Product.create({
          name,
          slugname,
          brand,
          price,
          quantity,
          images,
          thumbnail,
          category,
          subcategory,
          description,
        })

        res.status(201).json({ success: true, data: product })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to create product' })
      }
      break
    case 'PUT':
      try {
        const { id } = req.query
        const {
          name,
          slugname,
          brand,
          price,
          quantity,
          images,
          thumbnail,
          category,
          subcategory,
          description,
        } = req.body

        // Find the product by ID and update its properties
        const updatedProduct = await Product.findByIdAndUpdate(
          id,
          {
            name,
            slugname,
            brand,
            price,
            quantity,
            images,
            thumbnail,
            category,
            subcategory,
            description,
          },
          { new: true }
        )

        if (!updatedProduct) {
          res.status(404).json({ success: false, error: 'Product not found' })
        } else {
          res.status(200).json({ success: true, data: updatedProduct })
        }
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to update product' })
      }
      break

    case 'DELETE':
      try {
        const { id } = req.query

        // Find the product by ID and delete it
        const product = await Product.findByIdAndDelete(id)

        if (!product) {
          res.status(404).json({ success: false, error: 'Product not found' })
        } else {
          res.status(200).json({ success: true, data: product })
        }
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to delete product' })
      }
      break
    default:
      res.status(400).json({ success: false, error: 'Invalid request method' })
      break
  }
}
