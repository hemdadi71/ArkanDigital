import Input from '@/Components/Input/Input'
import { userDataSchema } from '@/utils/Schema/CompleteUserData'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
function Profile() {
  const router = useRouter()
  const token = Cookies.get('token')
  const data = token ? JSON.parse(token) : null
  let { user, tokens } = data
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userDataSchema),
  })
  const submitForm = (data: any) => {
    try {
      const response = axios.put(
        `/api/users/${user.id ? user.id : user._id}`,
        data
      )
      response.then(res => {
        user = res.data.data
        const updatedUserData = JSON.stringify({ tokens, user })
        console.log(JSON.parse(updatedUserData))
        Cookies.set('token', updatedUserData)
        router.push('/profile')
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className=" bg-[#F2F3F5] p-8 h-[100vh]">
        <div className="bg-white border rounded-xl p-10">
          <div>
            {!user.firstname && (
              <div className="bg-yellow-100 w-fit px-5 py-1 rounded-md">
                لطفا اطلاعات خود را کامل کنید
              </div>
            )}
          </div>
          <div>
            <p className="text-xl font-semibold p-5">اطلاعات شخصی</p>
          </div>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col gap-1 w-[40%]">
                <Input
                  defaultValue={user.firstname}
                  name="firstname"
                  register={{ ...register('firstname') }}
                  type="text"
                  label="نام:"
                  errorTxt={errors.firstname?.message}
                />
              </div>
              <div className="flex flex-col gap-1 w-[40%]">
                <Input
                  defaultValue={user.lastname}
                  name="lastname"
                  register={{ ...register('lastname') }}
                  type="text"
                  label=" نام خانوادگی:"
                  errorTxt={errors.lastname?.message}
                />
              </div>
              <div className="flex flex-col gap-1 w-[40%]">
                <Input
                  defaultValue={user.phonenumber}
                  name="phonenumber"
                  register={{ ...register('phonenumber') }}
                  type="text"
                  label="شماره موبایل:"
                  errorTxt={errors.phonenumber?.message}
                />
              </div>
              <div className="flex flex-col gap-1 w-[40%]">
                <Input
                  defaultValue={user.address}
                  name="address"
                  register={{ ...register('address') }}
                  type="text"
                  label="آدرس:"
                  errorTxt={errors.address?.message}
                />
              </div>
            </div>
            <div className="flex justify-end w-full px-16">
              <button
                type="submit"
                className="bg-[#7614AF] px-8 text-white rounded-md py-1 w-fit">
                ثبت اطلاعات
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile
