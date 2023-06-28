import Link from 'next/link'
import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
function success() {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col gap-3 text-center bg-gray-100 rounded-md py-5 px-10">
          <div className="flex justify-center text-green-500">
            <IoMdCheckmarkCircleOutline size={50} />
          </div>
          <p>پرداخت موفقیت آمیز بود</p>
          <p>سفارش شما ثبت گردید</p>
          <p>با تشکر از خرید شما</p>
          <div className="flex items-center gap-5">
            <Link
              className="rounded-md bg-purple text-white px-3 py-1"
              href={'/'}>
              بازگشت به سایت
            </Link>
            <Link className="rounded-md bg-blue-500 text-white px-3 py-1" href={'/profile/orders'}>مشاهده سفارش ها</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default success
