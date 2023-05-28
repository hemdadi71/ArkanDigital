import React from 'react'
import Logo from '../Logo/Logo'
import SearchInput from '../SearchInput/SearchInput'
import { TbLogin } from 'react-icons/tb'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import AdminHeader from '../AdminHeader/AdminHeader'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Header() {
  const router = useRouter()
  return (
    <>
      {router.pathname !== '/admin' && (
        <div className="pb-4 pt-5 px-2">
          <div className="flex items-center justify-between px-4">
            <Logo />
            {router.pathname !== '/' && (
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-purple-600">
                <AiFillHome size={24} />
                <p className=" font-semibold">صفحه اصلی</p>
              </Link>
            )}
            <SearchInput />
            <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
              <TbLogin size={30} />
              <p className="font-semibold ">ورود | ثبت نام</p>
            </div>
            <Link href="/admin" className="hover:text-purple-600 font-semibold">
              مدیریت
            </Link>
            <Link
              href="/checkout/cart"
              className="relative flex cursor-pointer items-center hover:text-purple-600">
              <p className="w-[20px] h-[20px] p-3 flex items-center justify-center text-white rounded-full bg-purple-600 absolute top-[-12px] right-[-12px]">
                5
              </p>
              <RiShoppingCart2Line size={30} />
              <p className="font-semibold mr-1">سبد خرید</p>
            </Link>

            <Link
              href="/contactus"
              className="font-semibold cursor-pointer hover:text-purple-600 flex items-center gap-2">
              <p>ارتباط با ما</p>
              <FaPhoneAlt size={21} />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
