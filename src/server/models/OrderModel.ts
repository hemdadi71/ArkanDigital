import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import moment from 'moment-jalaali'
import { getUnixTime, startOfDay, isSameDay, addDays, subDays } from 'date-fns'
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
      name: {
        type: String,
        required: [true, 'products.name is required'],
      },
      price: {
        type: Number,
        required: [true, 'products.price is required'],
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
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
