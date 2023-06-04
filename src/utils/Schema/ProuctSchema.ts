import * as yup from 'yup'
export const productSchema = yup.object({
  category: yup.string().required(),
  subcategory: yup.string().required(),
  name: yup.string().required(),
  slugname: yup.string().required(),
  brand: yup.string().required(),
  description: yup.string().required(),
  thumbnail: yup.mixed().required(),
  images: yup.mixed().required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
})
