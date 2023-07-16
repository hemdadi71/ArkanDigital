import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../utils/Schema/LoginSchema'
import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import { hideRegisterModal } from '@/Redux/Slices/RegisterModal'
import Cookies from 'js-cookie'
import { setRole } from '@/Redux/Slices/Role'
import { loginData } from '@/Types/types'
import * as yup from 'yup'
import { postLogin } from '../api'
import toast from 'react-hot-toast'
// ..................................................
type FormData = yup.InferType<typeof schema>
// ..................................................
function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const handleSignIn = (data: loginData) => {
    postLogin(data).then(res => {
      if (res) {
        const { tokens, user } = res
        const userData = JSON.stringify({ tokens, user })
        Cookies.set('token', userData, { expires: 7 })
        dispatch(hideRegisterModal())
        dispatch(setRole(user.role))
        user.role === 'admin' && router.push('/admin/orders')
        toast('خوش آمدید', {
          icon: '👏',
        })
      } else {
        toast('کاربری با این اطلاعات وجود ندارد', {
          style: {
            backgroundColor: 'red',
            color: 'white',
          },
        })
      }
    })
  }
  // ...........................................................
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex flex-col gap-4 p-5 items-center">
          <div className="flex flex-col gap-1">
            <Input
              name="username"
              register={{ ...register('username') }}
              type="text"
              label="نام کاربری:"
              errorTxt={errors.username?.message}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Input
              name="password"
              register={{ ...register('password') }}
              type="password"
              label="رمز عبور:"
              errorTxt={errors.password?.message}
            />
          </div>
          <button
            type="submit"
            className="bg-purple text-white w-fit py-1 px-6 rounded-md mt-3">
            ورود
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
