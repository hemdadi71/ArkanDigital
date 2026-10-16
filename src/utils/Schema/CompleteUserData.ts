import * as yup from 'yup'
export const userDataSchema = yup.object({
  firstname: yup.string().required(' نام خود را وارد کنید'),
  lastname: yup.string().required(' نام خانوادگی خود را وارد کنید'),
  phonenumber: yup
    .string()
    .trim()
    .required('شماره موبایل خود را وارد کنید')
    .matches(/^09[0-9]{9}$/, 'فرمت شماره موبایل نادرست است'),
  address: yup.string().required(' آدرس خود را وارد کنید'),
  // .typeError('تاریخ را به فرمت صحیح وارد کنید'),
  // deliveryDate: yup.date().required('تاریخ را وارد کنید'),
})
