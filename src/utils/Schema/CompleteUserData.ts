import * as yup from 'yup'
export const userDataSchema = yup.object({
  firstname: yup.string().required(' نام خود را وارد کنید'),
  lastname: yup.string().required(' نام خانوادگی خود را وارد کنید'),
  phonenumber: yup
    .string()
    .trim()
    .required('شماره موبایل خود را وارد کنید')
    .test(
      'english-digits',
      'لطفاً زبان کیبورد را انگلیسی کنید',
      value => !/[۰-۹٠-٩]/.test(value || ''),
    )
    .test(
      'phone-format',
      'شماره موبایل باید ۱۱ رقم و با 09 شروع شود',
      value => {
        if (!value || /[۰-۹٠-٩]/.test(value)) return true

        return /^09[0-9]{9}$/.test(value)
      },
    ),
  address: yup.string().required(' آدرس خود را وارد کنید'),
  // .typeError('تاریخ را به فرمت صحیح وارد کنید'),
  // deliveryDate: yup.date().required('تاریخ را وارد کنید'),
})
