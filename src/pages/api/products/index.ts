import { NextApiRequest, NextApiResponse } from 'next'
import ProductModel from '@/server/models/ProductModel'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import dbConnect from '@/lib/dbConenct'
import { Request, Response } from 'express'
const storage = multer.diskStorage({
  destination: './public/product/images',
  filename: function (req, file, cb) {
    const originalFilename = file.originalname
    const extension = path.extname(originalFilename)
    const uploadedFilename = originalFilename.replace(/\.[^.]+$/, '')
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const filename = `${uploadedFilename}${extension}`
    cb(null, filename)
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000000 }, // Adjust the file size limit as needed
})

export const config = {
  api: {
    bodyParser: false,
  },
}
export default async function handler(req: Request, res: Response) {
  const { method, body } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const { page = 1, limit = 10, sort, quantity } = req.query

        // Prepare the query parameters for filtering
        const filter: any = {}

        if (quantity && typeof quantity === 'object' && 'gte' in quantity) {
          filter.quantity = { $gte: Number(quantity.gte) }
        }

        // Prepare the sort option
        let sortOption: any = {}

        if (sort === 'price') {
          sortOption = { price: 1 }
        } else if (sort === '-price') {
          sortOption = { price: -1 }
        }

        // Fetch the paginated, sorted, and filtered products from the MongoDB collection
        const products = await ProductModel.find(filter)
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
    // case 'POST':
    //   try {
    //     upload.fields([
    //       { name: 'thumbnail', maxCount: 1 },
    //       { name: 'images', maxCount: 10 },
    //     ])(req, res, async function (err) {
    //       if (err instanceof multer.MulterError) {
    //         // Handle multer error
    //         return res.status(400).json({ success: false, error: err.message })
    //       } else if (err) {
    //         // Handle other errors
    //         return res
    //           .status(400)
    //           .json({ success: false, error: 'Failed to upload files' })
    //       }

    //       // Get the uploaded files' information from the request object
    //       const { thumbnail, images } = req.files

    //       // Process the uploaded files as needed
    //       // ...

    //       // Create a new product using the data from the request body
    //       const product = await ProductModel.create({
    //         ...req.body,
    //         thumbnail: thumbnail[0].filename,
    //         images: images.map(image => image.filename),
    //       })

    //       res.status(201).json({ success: true, product })
    //     })
    //   } catch (error) {
    //     res
    //       .status(400)
    //       .json({ success: false, error: 'Failed to create product' })
    //   }
    //   break
    case 'POST':
      try {
        upload.fields([
          { name: 'thumbnail', maxCount: 1 },
          { name: 'images', maxCount: 10 },
        ])(req, res, async function (err) {
          if (err instanceof multer.MulterError) {
            // Handle multer error
            return res.status(400).json({ success: false, error: err.message })
          } else if (err) {
            // Handle other errors
            return res
              .status(400)
              .json({ success: false, error: 'Failed to upload files' })
          }

          // Get the uploaded files' information from the request object
          const { thumbnail, images }: any = req.files

          // Process the uploaded files as needed
          // ...

          // Check if a product with the same name already exists
          const existingProduct = await ProductModel.findOne({
            name: req.body.name,
          })
          if (existingProduct) {
            return res.status(400).json({
              success: false,
              error: 'Product with the same name already exists',
            })
          }

          // Create a new product using the data from the request body
          const product = await ProductModel.create({
            ...req.body,
            thumbnail: thumbnail[0].filename,
            images: images.map((image: any) => image.filename),
          })

          res.status(201).json({ success: true, product })
        })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to create product' })
      }
      break
    case 'PUT':
      try {
        const { id } = req.query

        // Find the product by ID and update it with the data from the request body
        const product = await ProductModel.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        })

        if (!product) {
          res.status(404).json({ success: false, error: 'Product not found' })
        } else {
          res.status(200).json({ success: true, data: product })
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
        const product = await ProductModel.findByIdAndDelete(id)

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
