import axios from 'axios'

export const getProducts = async () => {
  try {
    const { data } = await axios.get('/api/product')
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
export const postProduct = async (data: any) => {
  try {
    const response = await axios.post('/api/product', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const uploadCloudinary = async (file: any) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'thumbnail')
  const { data } = await axios.post(
    'https://api.cloudinary.com/v1_1/durpzunxl/image/upload',
    formData
  )
  return { publicId: data?.public_id, url: data?.secure_url }
}
