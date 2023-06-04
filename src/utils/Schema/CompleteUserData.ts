import * as yup from 'yup'
export const userDataSchema = yup.object({
  firstname: yup.string().required('لطفا نام خود را وارد کنید'),
  lastname: yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
  phonenumber: yup
    .string()
    .required('لطفا شماره موبایل خود را وارد کنید')
    .matches(
      /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
      'phone number is not valid'
    ),
  address: yup
    .string()
    .required('لطفا آدرس خود را وارد کنید')
})
