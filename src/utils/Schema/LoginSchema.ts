import * as yup from 'yup'
export const schema = yup.object({
  username: yup.string().required('لطفا نام کاربری را وارد کنید'),
  // phone: yup
  //   .string()
  //   .required()
  //   .matches(
  //     /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
  //     'phone number is not valid'
  //   ),
  // email: yup
  //   .string()
  //   .required()
  //   .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/, 'email is not valid'),
  password: yup
    .string()
    .required('لطفا رمز عبور را وارد کنید')
    // .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, 'password not valid'),
  // corfirmPassword: yup
  //   .string()
  //   .required()
  //   .oneOf([yup.ref('password')], 'Password not Match'),
})

