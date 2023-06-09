import React from 'react'
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setRole } from '@/Redux/Slices/Role'
import Cookies from 'js-cookie'

function ProfileHeader() {
  const dispatch = useDispatch()
  const handleSignOut = () => {
    Cookies.remove('token')
    dispatch(setRole(''))
  }
  return (
    <>
      <header className="py-5 border-b bg-[#FAFAFA] px-10 flex items-center justify-center">
        <div className="flex items-center w-[90%] justify-between">
          <Link href="/" className="flex items-cetner gap-2">
            <AiOutlineHome className="text-[#5D108B]" size={24} />
            <p>صفحه نخست</p>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="checkout/cart" className="border rounded-md p-2">
              <RiShoppingCart2Line className="text-[#5D108B]" size={24} />
            </Link>
            <div className="w-[2px] h-[40px] bg-gray-400"></div>
            <Link
              href="/"
              onClick={handleSignOut}
              className="border rounded-md p-2 bg-[#ECE0F3]">
              <FiLogOut className="text-[#5D108B]" size={24} />
            </Link>
            <p>خروج از حساب کاربری</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default ProfileHeader
