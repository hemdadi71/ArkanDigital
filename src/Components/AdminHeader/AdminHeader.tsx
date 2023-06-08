import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { setRole } from '@/Redux/Slices/Role'
import AdminTabs from '../AdminTabs/AdminTabs'
import { AiOutlineHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
// .................................................
function AdminHeader() {
  const dispatch = useDispatch()
  const handleSignOut = () => {
    Cookies.remove('token')
    dispatch(setRole(''))
  }
  return (
    <>
      <header className="flex items-center justify-between py-8 px-8 bg-[#FAFAFA] border-b">
        <div>
          <p className="text-2xl">پنل مدیریت فروشگاه</p>
        </div>
        <div>
          <AdminTabs />
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/" className="flex gap-2 items-center">
            <div className="border rounded-md p-2">
              <AiOutlineHome className="text-[#5D108B]" size={24} />
            </div>
            <p>بازگشت به سایت</p>
          </Link>
          <div className="w-[2px] h-[35px] bg-gray-400"></div>
          <Link href="/" className="flex items-center gap-2">
            <div
              onClick={handleSignOut}
              className="border rounded-md p-2 bg-[#ECE0F3]">
              <FiLogOut className="text-[#5D108B]" size={24} />
            </div>
            <p>خروج از حساب کاربری مدیریت</p>
          </Link>
        </div>
      </header>
    </>
  )
}

export default AdminHeader
