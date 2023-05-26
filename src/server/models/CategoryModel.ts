import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'name is required'],
    trim: true,
  },
  slugname: {
    type: String,
    trim: true,
  },
  icon: {
    type: String,
    trim: true,
    default: 'categories-icons-default.png',
  },
})
const CategoryModel =
  mongoose.models.Category || mongoose.model('Category', CategorySchema)

export default CategoryModel
