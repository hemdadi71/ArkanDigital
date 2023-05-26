
import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

// Define the product schema
const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  slugname: {
    type: String,
    trim: true,
    required: false,
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
    trim: true,
    default: 'products-thumbnails-default.jpeg',
  },
  images: {
    type: [String],
    trim: true,
    default: ['products-images-default.jpeg'],
  },
  rating: {
    rate: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
})

// Create the Product model
const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel
