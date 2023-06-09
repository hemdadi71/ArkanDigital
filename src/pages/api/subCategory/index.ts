import { NextApiRequest, NextApiResponse } from 'next'
import CategoryModel from '@/server/models/CategoryModel'
import dbConnect from '@/lib/dbConenct'

// Define the API route handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  if (req.method === 'POST') {
    try {
      // Extract the category and subcategory from the request body
      const { category, subCategory } = req.body

      // Find the subcategory document that matches the requested category
      let subcategoryDoc = await CategoryModel.findOne({ category })

      if (!subcategoryDoc) {
        // If the subcategory document does not exist, create a new one
        subcategoryDoc = new CategoryModel({
          category,
          subCategory: [subCategory],
        })
      } else {
        // If the subcategory document exists, append the subcategory to its existing array
        subcategoryDoc.subCategory.push(subCategory)
      }

      // Save the subcategory document
      await subcategoryDoc.save()

      // Send a response with the updated subcategories
      res
        .status(200)
        .json({
          message: 'Subcategory added successfully',
          subcategories: subcategoryDoc,
        })
    } catch (error) {
      res.status(400).json({ message: 'Failed to add subcategory', error })
    }
  } else if (req.method === 'GET') {
    try {
      // Retrieve all subcategories from the database
      const subcategories = await CategoryModel.find()

      // Send a response with all subcategories in the array
      res.status(200).json({ subcategories })
    } catch (error) {
      res.status(400).json({ message: 'Failed to fetch subcategories', error })
    }
  } else {
    // If the request method is not POST or GET, send a 405 Method Not Allowed status
    res.status(405).json({ message: 'Method not allowed' })
  }
}

