/* eslint-disable @next/next/no-img-element */
import Login from '@/Components/Login/login'
import Link from 'next/link'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

function AdminRegister() {
  return (
    <>
      <div className="w-full h-full admin bg-[#D2E4ED] flex items-center justify-center relative">
        <div className="rounded-md flex bg-[#ECF1F4] z-20">
          <div className="md:w-[50%] p-3 md:p-0 w-full bg-white md:rounded-r-md rounded-md flex items-center flex-col justify-center">
            <h1 className="text-[18px] font-semibold">ورود به پنل مدیریت</h1>
            <Login />
            <Link
              href="/"
              className="bg-[#EC0488] text-white px-4 py-1 rounded-md flex items-center gap-2">
              <FiLogOut size={20} />
              <p>بازگشت به سایت</p>
            </Link>
          </div>
          <div className="md:flex hidden flex-col justify-center text-center">
            <img width={350} src="/product/Logo/1.png" alt="img" />
            <p className="py-3 font-bold text-xl">ARKAN KALA</p>
          </div>
        </div>
        <div className="bg-black fixed w-full h-full overflow-hidden top-0 z-10 bg-opacity-30 backdrop-blur-sm"></div>
      </div>
    </>
  )
}

export default AdminRegister
