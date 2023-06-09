/* eslint-disable react-hooks/exhaustive-deps */
import { showRegisterModal } from '@/Redux/Slices/RegisterModal'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RoleState } from '../../Types/types'
import { useRouter } from 'next/router'
// ........................................................
function LoginFirst() {
  const roleState = useSelector((state: RoleState) => state.role)
  const { role }: any = roleState
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    role === 'user' && router.push('/profile')
  }, [role])

  return (
    <>
      <div className="text-center bg-gray-100 w-fit mx-auto p-6 rounded-md mt-20 flex flex-col gap-5">
        <p className="text-xl font-bold">
          برای ورود به این صفحه ابتدا باید وارد حساب کاربری خود شوید
        </p>
        <button
          onClick={() => dispatch(showRegisterModal())}
          className="bg-purple rounded-md py-1 px-4 text-white w-fit mx-auto">
          برای وارد شدن کلیک کنید
        </button>
      </div>
    </>
  )
}

export default LoginFirst
