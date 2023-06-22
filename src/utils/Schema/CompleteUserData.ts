import * as yup from 'yup'
export const userDataSchema = yup.object({
  firstname: yup.string().required(' نام خود را وارد کنید'),
  lastname: yup.string().required(' نام خانوادگی خود را وارد کنید'),
  phonenumber: yup
    .string()
    .required(' شماره موبایل خود را وارد کنید')
    .matches(
      /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
      'فرمت شماره نادرست است'
    ),
  address: yup.string().required(' آدرس خود را وارد کنید'),
  deliveryDate: yup.string().required('تاریخ را وارد کنید'),
  // .typeError('تاریخ را به فرمت صحیح وارد کنید'),
  // deliveryDate: yup.date().required('تاریخ را وارد کنید'),
})
