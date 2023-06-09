import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { categoryData } from '@/Types/types'
const CategorySchema = yup.object({
  category: yup.string().required('لطفا گروه را وارد کنید'),
  subCategory: yup.string().required('لطفا زیرگروه را وارد کید'),
})
type FormData = yup.InferType<typeof CategorySchema>

const CategoryForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(CategorySchema),
  })

  const formSubmit = async (Data: any) => {
    try {
      const { data } = await axios.post('/api/subCategory', Data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className="flex flex-col gap-2 bg-gray-100 p-6 rounded-md w-fit"
      onSubmit={handleSubmit(formSubmit)}>
      <div>
        <p className="font-semibold">افزودن گروه جدید</p>
      </div>
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex flex-col gap-1">
          <Input
            name="category"
            register={{ ...register('category') }}
            type="text"
            label="گروه:"
            errorTxt={errors.category?.message}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Input
            name="subCategory"
            register={{ ...register('subCategory') }}
            type="text"
            label="زیرگروه:"
            errorTxt={errors.subCategory?.message}
          />
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-purple text-white w-fit py-1 px-6 rounded-md mt-6">
            افزودن
          </button>
        </div>
      </div>
    </form>
  )
}

export default CategoryForm
