import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { cookies } from 'next/dist/client/components/headers'
import { redirect } from 'next/navigation'
import { schema } from '../Schema/LoginSchema'
import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import { hideRegisterModal } from '@/Redux/Reducers/RegisterModal'
import Cookies from 'js-cookie'
import { setRole } from '@/Redux/Reducers/Role'
import { loginData } from '@/Types/types'
import * as yup from 'yup'
type FormData = yup.InferType<typeof schema>;
function Login() {
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const handleSignIn = (data: loginData) => {
    axios
      .post('/api/auth/signin', data)
      .then(res => {
        const { tokens, user } = res.data
        const userData = JSON.stringify({ tokens, user })
        Cookies.set('token', userData, { expires: 7 })
        if (res.data) {
          dispatch(hideRegisterModal())
          dispatch(setRole(user.role))
        }
      })
      .catch(err => console.log(err.message))
  }
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="flex flex-col gap-2 p-5">
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
          <button type="submit" className="bg-blue-200 mt-3">
            ورود
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
