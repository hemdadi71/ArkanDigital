// pages/api/products/[id].js

import ProductModel from '@/server/models/ProductModel'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query // Extract the [id] parameter from the request query

  if (req.method === 'GET') {
    try {
      // Retrieve the product by ID from the database
      const product = await ProductModel.findById(id)

      if (!product) {
        res.status(404).json({ success: false, error: 'Product not found' })
      } else {
        res.status(200).json({ success: true, data: product })
      }
    } catch (error) {
      res.status(400).json({ success: false, error: 'Failed to fetch product' })
    }
  } else if (req.method === 'PUT') {
    try {
      const { name, price, description } = req.body

      // Update the product by ID with the data from the request body
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        { name, price, description },
        { new: true, runValidators: true }
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
  } else if (req.method === 'DELETE') {
    try {
      // Delete the product by ID from the database
      const deletedProduct = await ProductModel.findByIdAndDelete(id)

      if (!deletedProduct) {
        res.status(404).json({ success: false, error: 'Product not found' })
      } else {
        res.status(200).json({ success: true, data: deletedProduct })
      }
    } catch (error) {
      res
        .status(400)
        .json({ success: false, error: 'Failed to delete product' })
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }
}
