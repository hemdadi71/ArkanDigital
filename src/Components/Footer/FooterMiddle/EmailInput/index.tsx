// import { newsEmailSchema } from '@/utils/Schema/EmailInput'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
// .....................................................................
type FormData = yup.InferType<typeof newsEmailSchema>
const newsEmailSchema = yup
  .object({
    newsEmail: yup
      .string()
      .required('لطفا ایمیل خود را وارد کنید')
      .matches(
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/,
        'فرمت ایمیل نادرست است'
      ),
  })
  .required()
//   .......................................................................
function EmailInput() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(newsEmailSchema),
  })
  const formSubmit = (data: FormData) => {
    console.log(data)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="relative flex items-center">
        <input
          {...register('newsEmail')}
          type="text"
          placeholder="ایمیل خود را وارد نمایید"
          className="border-2 outline-none border-gray-200 rounded-md py-3 w-full pr-3"
        />
        <button className="bg-purple text-white px-3 py-1 rounded-md absolute left-2">
          ارسال ایمیل
        </button>
      </form>
      <p className="text-red-500 pr-2 pt-1">{errors.newsEmail?.message}</p>
    </>
  )
}

export default EmailInput
