import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phonenumber: { type: Number, required: false },
  address: { type: String, required: false },
  role: { type: String, default: 'user', required: false },
  ordertime: { type: Date, required: false },
  deliverytime: { type: Date, required: false },
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)

export default UserModel
