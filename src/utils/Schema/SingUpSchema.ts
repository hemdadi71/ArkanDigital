import * as yup from 'yup'
export const SingUpSchame = yup.object().shape({
  firstname: yup.string().required('لطفا نام کاربری را وارد کنید'),
  lastname: yup.string().required('لطفا نام کاربری را وارد کنید'),
  username: yup.string().required('لطفا نام کاربری را وارد کنید'),
  email: yup
    .string()
    .required('لطفا ایمیل خود را وارد کنید')
    .matches(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/,
      'فرمت ایمیل نادرست است'
    ),
  password: yup
    .string()
    .required('لطفا رمز عبور را وارد کنید'),
    // .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, 'فرمت رمز عبور نادرست است'),
  reenterPassword: yup
    .string()
    .required('لفا رمز عبور را تایید کنید')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})
