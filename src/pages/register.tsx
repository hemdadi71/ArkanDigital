/* eslint-disable @next/next/no-img-element */
import Login from '@/Components/Login/login'
import React from 'react'

function AdminRegister() {
  return (
    <>
      <div className="w-full h-full bg-[#D2E4ED] flex items-center justify-center">
        <div className="w-[60%] rounded-md flex bg-[#ECF1F4]">
          <div className="w-[40%] bg-white rounded-r-md">
            <Login />
          </div>
          <div>
            <img src="/product/Logo/1.png" alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminRegister
