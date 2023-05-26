// Import necessary modules
import { NextApiRequest, NextApiResponse } from 'next'

// Define the array that will hold the categories
let categories: string[] = []

// Define the API route handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract the category from the request body
    const { category } = req.body

    // Add the category to the categories array
    categories.push(category)

    // Send a response with the updated categories array
    res.status(200).json({ message: 'Category added successfully', categories })
  } else if (req.method === 'GET') {
    // Send a response with all categories in the array
    res.status(200).json({ categories })
  } else {
    // If the request method is not POST or GET, send a 405 Method Not Allowed status
    res.status(405).json({ message: 'Method not allowed' })
  }
}
