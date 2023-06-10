import { ProductProps, loginData } from '@/Types/types'
import axios from 'axios'
// ........................................................
export const getProducts = async (limit: number = 0, page: number = 1) => {
  try {
    const { data } = await axios.get(`/api/product?limit=${limit}&page=${page}`)
    if (data.success) {
      const products = data.products
      return products
    } else {
      console.log(data.error)
    }
  } catch (error) {
    console.log(error)
  }
}
export const postLogin = async (Data: loginData) => {
  try {
    const { data } = await axios.post(`/api/auth/signin`, Data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const getOrders = async (
  limit: number = 0,
  page: number = 1,
  deliveryStatus: boolean = false
) => {
  try {
    const { data } = await axios.get(
      `/api/order?limit=${limit}&page=${page}&deliveryStatus=${deliveryStatus}`
    )
    if (data.success) {
      const orders = data.orders
      return orders
    } else {
      console.log(data.error)
    }
  } catch (error) {
    console.log(error)
  }
}
export const getUsers = async () => {
  try {
    const { data } = await axios.get('/api/users')
    if (data.success) {
      const users = data.users
      return users
    } else {
      console.log(data.error)
    }
  } catch (error) {
    console.log(error)
  }
}

export const postProduct = async (data: ProductProps) => {
  try {
    const response = await axios.post('/api/product', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const uploadCloudinary = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'thumbnail')
  const { data } = await axios.post(
    'https://api.cloudinary.com/v1_1/durpzunxl/image/upload',
    formData
  )
  return { publicId: data?.public_id, url: data?.secure_url }
}
export const getCategories = async () => {
  try {
    const { data } = await axios('/api/subCategory')
    return data.subcategories
  } catch (error) {
    console.log(error)
  }
}
export const deleteProduct = async ({ productId }: any) => {
  try {
    const response = await axios.delete(`/api/product/${productId}`)
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to delete product')
  }
}
