import Link from 'next/link'
import React from 'react'
import EmailInput from './EmailInput'

function FooterMiddle() {
  return (
    <>
      <div className="flex px-3 flex-wrap gap-y-3 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple rounded-full"></div>
            <h1 className="text-[18px] font-semibold">لیست قیمت لپ تاپ</h1>
          </div>
          <ul className="text-txtgray flex flex-col gap-2">
            <li>
              <Link href="/">قیمت لپ تاپ لنوو</Link>
            </li>
            <li>
              <Link href="/">قیمت لپ تاپ ایسوس</Link>
            </li>
            <li>
              <Link href="/">قیمت لپ تاپ hp</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple rounded-full"></div>
            <h1 className="text-[18px] font-semibold">لیست قیمت گوشی موبایل</h1>
          </div>
          <ul className="text-txtgray flex flex-col gap-2">
            <li>
              <Link href="/">قیمت گوشی سامسونگ</Link>
            </li>
            <li>
              <Link href="/">قیمت گوشی اپل</Link>
            </li>
            <li>
              <Link href="/">قیمت گوشی شیائومی</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple rounded-full"></div>
            <h1 className="text-[18px] font-semibold">ینک های مرتبط</h1>
          </div>
          <ul className="text-txtgray flex flex-col gap-2">
            <li>
              <Link href="/">نقشه سایت</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple rounded-full"></div>
            <h1 className="text-[18px] font-semibold">عضویت در خبرنامه</h1>
          </div>
          <ul className="text-txtgray flex flex-col gap-2">
            <li>
              با عضویت در خبر نامه از جدیدترین محصولات و تخفیفات ویژه ما آگاه
              شوید
            </li>
            <li>
              <EmailInput />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default FooterMiddle
