/* eslint-disable @next/next/no-img-element */
import Login from '@/Components/Login/login'
import React from 'react'

function AdminRegister() {
  return (
    <>
      <div className="w-full h-full admin bg-[#D2E4ED] flex items-center justify-center relative">
        <div className="rounded-md flex bg-[#ECF1F4] z-20">
          <div className="w-[50%] bg-white rounded-r-md flex items-center justify-center">
            <Login />
          </div>
          <div className="flex flex-col justify-center text-center">
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
