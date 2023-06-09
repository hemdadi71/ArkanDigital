import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: false, default: '' },
  lastname: { type: String, required: false, default: '' },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phonenumber: { type: Number, required: false, default: 0 },
  address: { type: String, required: false, default: '' },
  role: { type: String, default: 'user', required: false },
  ordertime: { type: Date, required: false, default: Date.now() },
  deliverytime: { type: Date, required: false, default: Date.now() },
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)

export default UserModel
