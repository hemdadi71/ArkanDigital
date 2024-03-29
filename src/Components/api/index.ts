import { ProductProps, loginData } from '@/Types/types'
import axios from 'axios'
// ........................................................
export const getProducts = async (
  limit: number = 0,
  page: number = 1,
  category: string = '',
  subcategory: string = '',
  sort: string = ''
) => {
  try {
    const { data } = await axios.get(
      `/api/product?limit=${limit}&page=${page}&category=${category}&subcategory=${subcategory}&sort=${sort}`
    )
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
export const getAllOrders = async () => {
  try {
    const { data } = await axios.get(
      '/api/order'
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

export const postProduct = async (data: any) => {
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
  console.log(data)
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

export async function editProduct({ id, Data }: any) {
  try {
    const { data } = await axios.put(`/api/product/${id}`, Data)
    console.log(data)
    return data
  } catch (error) {
    throw new Error('Failed to edit product')
  }
}

export const getSingleProduct = async (id: string) => {
  try {
    const { data } = await axios(`/api/product/${id}`)
    const { data: product } = data
    return product
  } catch (error) {
    console.log(error)
  }
}
export const getUser = async (id: string) => {
  try {
    const { data } = await axios(`/api/users/${id}`)
    const { data: user } = data
    return user
  } catch (error) {
    console.log(error)
  }
}
export const putOrdetStatus = async ({ id, data }: any) => {
  try {
    const response = axios.put(`/api/order/${id}`, data)
    return response
  } catch (error) {
    console.log(error)
  }
}
