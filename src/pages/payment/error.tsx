import Link from 'next/link'
import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function error() {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-3 text-center bg-gray-100 rounded-md py-5 px-14">
          <div className="flex justify-center text-red-500">
            <AiOutlineCloseCircle size={50} />
          </div>
          <p>پرداخت ناموفق </p>
          <p>سفارش شما ثبت نگردید</p>
          <div className="flex items-center justify-center">
            <Link
              className="rounded-md bg-purple text-white px-3 py-1"
              href={'/'}>
              بازگشت به سایت
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default error
