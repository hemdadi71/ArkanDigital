import * as yup from 'yup'
export const productSchema = yup.object({
  category: yup.string().required('لطفا گروه را وارد کنید'),
  subcategory: yup.string().required('لطفا زیرگروه را وارد کنید'),
  name: yup.string().required('لطفا نام را وارد کنید'),
  slugname: yup.string().required('لطفا نام کوتاه را وارد کنید'),
  brand: yup.string().required('لطفا برند را وارد کنید'),
  description: yup.string().required('لطفا توضیحات را وارد کنید'),
  
  thumbnail: yup
    .mixed()
    .required('تصویر کوچک محصول الزامی است')
    .test('is-empty-object', 'تصویر کوچک محصول الزامی است', value => {
      return value && Object.keys(value).length > 0
    }),
  images: yup
    .mixed()
    .required('تصاویر محصول الزامی است')
    .test('is-empty-object', 'تصاویر محصول الزامی است', value => {
      return value && Object.keys(value).length > 0
    }),
  price: yup
    .string()
    .required('لطفا قیمت را وارد کنید')
    .matches(/^[0-9]+$/, 'لطفا عدد وارد کنید'),
  quantity: yup
    .string()
    .required('لطفا موجودی را وارد کنید')
    .matches(/^[0-9]+$/, 'لطفا عدد وارد کنید'),
})
