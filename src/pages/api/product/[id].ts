// pages/api/products/[id].js

import Product from '@/server/models/ProductModel'
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
