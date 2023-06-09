import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategory: { type: [String], required: true },
})
const CategoryModel =
  mongoose.models.Category || mongoose.model('Category', CategorySchema)

export default CategoryModel

