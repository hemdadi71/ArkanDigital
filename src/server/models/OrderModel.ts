import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const OrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user is required'],
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'products.product is required'],
      },
      count: {
        type: Number,
        required: [true, 'products.count is required'],
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  deliveryDate: {
    type: Date,
    default: () => {
      const now = new Date()
      const tomorrow = new Date()
      tomorrow.setDate(now.getDate() + 1)

      return tomorrow
    },
  },
  deliveryStatus: {
    type: Boolean,
    default: false,
  },
})
const OrderModel = mongoose.models.Order || mongoose.model('Order', OrderSchema)

export default OrderModel
