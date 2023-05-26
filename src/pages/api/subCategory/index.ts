// Import necessary modules
import { NextApiRequest, NextApiResponse } from 'next'

// Define the array that will hold the subcategories
let subcategories: { category: string; subCategory: string[] }[] = []

// Define the API route handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract the category and subcategory from the request body
    const { category, subCategory } = req.body

    // Find the index of the subcategories array where the category matches the requested category
    const categoryIndex = subcategories.findIndex(
      item => item.category === category
    )

    if (categoryIndex === -1) {
      // If the requested category does not exist in the subcategories array, add a new object with the category and subcategory
      subcategories.push({ category, subCategory: [subCategory] })
    } else {
      // If the requested category already exists in the subcategories array, append the subcategory to its existing array
      subcategories[categoryIndex].subCategory.push(subCategory)
    }

    // Send a response with the updated subcategories array
    res
      .status(200)
      .json({ message: 'Subcategory added successfully', subcategories })
  } else if (req.method === 'GET') {
    // Send a response with all subcategories in the array
    res.status(200).json({ subcategories })
  } else {
    // If the request method is not POST or GET, send a 405 Method Not Allowed status
    res.status(405).json({ message: 'Method not allowed' })
  }
}
