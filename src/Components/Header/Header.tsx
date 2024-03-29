/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
// import Logo from '../Logo/Logo'
// import SearchInput from '../SearchInput/SearchInput'
import { TbLogin } from 'react-icons/tb'
import { RiAdminLine, RiShoppingCart2Line } from 'react-icons/ri'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { showRegisterModal } from '@/Redux/Slices/RegisterModal'
// import { Cart, CartProps, CartState, RoleState } from '../../Types/types'
import Cookies from 'js-cookie'
import { setRole } from '@/Redux/Slices/Role'
import moment from 'moment-jalaali'
// import Categories from '../Categories'
// import { getCategories } from '../api'
import { useQuery } from 'react-query'
// import PhoneMenu from '../PhoneMenu'
import { setCart } from '@/Redux/Slices/CartSlice'
import { AnimatePresence, motion } from 'framer-motion'
import PhoneMenu from '@/Components/PhoneMenu'
import { getCategories } from '@/Components/api'
import { Cart, RoleState } from '@/Types/types'
import Logo from '@/Components/Logo/Logo'
import Categories from '@/Components/Categories'
import SearchInput from '@/Components/SearchInput/SearchInput'
// ..........................................................
function Header() {
  const [isShowDropdown, SetIsShowDropdown] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isShowPhoneMenu, setIsShowPhoneMenu] = useState(false)
  const roleState = useSelector((state: RoleState) => state.role)
  const dispatch = useDispatch()
  const { role }: any = roleState
  const router = useRouter()
  const handleSignOut = () => {
    Cookies.remove('token')
    dispatch(setRole(''))
  }
  const { data } = useQuery('getCategories', getCategories)
  useEffect(() => {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      const cart = JSON.parse(localCart)
      dispatch(setCart(cart.products))
    }
  }, [])
  const cart = useSelector((state: Cart) => state.CartState.products) || []
  return (
    <>
      <header className="pb-4 pt-5 px-2 relative z-40 bg-[#fcfcfc] border-b mb-3">
        <div className="flex items-center justify-between px-4">
          <Logo />
          {router.pathname !== '/' && (
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-purple-600">
              <AiOutlineHome className="text-[#5D108B]" size={27} />
              <p className="font-semibold md:block hidden">صفحه نخست</p>
            </Link>
          )}
          <div
            onMouseOver={() => setIsShowMenu(true)}
            onMouseLeave={() => setIsShowMenu(false)}
            className="py-6 overflow-hidden md:flex hidden items-center gap-2 cursor-pointer hover:text-purple">
            <GiHamburgerMenu size={27} />
            <p className="font-semibold md:block hidden">محصولات</p>
            <AnimatePresence>
              {isShowMenu && (
                <div className="absolute bg-[#fcfcfc] z-[60000] w-[98%] right-2 top-[90px] p-4 rounded-b-md">
                  <Categories setIsShowMenu={setIsShowMenu} data={data} />
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className="md:hidden">
            <GiHamburgerMenu
              onClick={() => setIsShowPhoneMenu(!isShowPhoneMenu)}
              size={27}
            />
            {isShowPhoneMenu && (
              <PhoneMenu setIsShowPhoneMenu={setIsShowPhoneMenu} data={data} />
            )}
          </div>
          <div className="lg:w-[40%] 2xl:w-[50%] md:block hidden">
            <SearchInput />
          </div>
          {role === '' && (
            <div className="flex items-center gap-5">
              <div
                onClick={() => dispatch(showRegisterModal())}
                className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
                <TbLogin size={30} />
                <p className="font-semibold md:block hidden">ورود | ثبت نام</p>
              </div>
              <Link
                href="/register"
                className="font-semibold flex items-center gap-1">
                <RiAdminLine size={30} />
                <p className="md:block hidden">مدیریت</p>
              </Link>
            </div>
          )}
          {role === 'admin' ? (
            <div
              onMouseEnter={() => SetIsShowDropdown(true)}
              onMouseLeave={() => SetIsShowDropdown(false)}
              className="font-semibold relative cursor-pointer flex justify-center py-3">
              <div className="flex items-center gap-1 hover:text-purple-600">
                <RiAdminLine size={30} />
                <p className="md:block hidden">مدیریت</p>
              </div>
              {isShowDropdown && (
                <ul className="absolute bottom-[-108px] w-40 z-30 bg-white flex flex-col gap-2 rounded-md border">
                  <li className="hover:bg-[#ECE0F3] p-3">
                    <Link href="/admin/orders">حساب کاربری</Link>
                  </li>
                  <li
                    onClick={handleSignOut}
                    className="hover:bg-[#ECE0F3] p-3">
                    خروج
                  </li>
                </ul>
              )}
            </div>
          ) : role === 'user' ? (
            router.pathname !== '/profile' && (
              <div
                onMouseEnter={() => SetIsShowDropdown(true)}
                onMouseLeave={() => SetIsShowDropdown(false)}
                className="font-semibold relative cursor-pointer">
                <div className="flex items-center gap-1 hover:text-purple-600 py-2">
                  <AiOutlineUser size={30} />
                  <p>پروفایل کاربری</p>
                </div>
                {isShowDropdown && (
                  <ul className="absolute bottom-[-108px] w-full z-30 bg-white flex flex-col gap-2 rounded-md border">
                    <li className="hover:bg-[#ECE0F3] p-3">
                      <Link href="/profile">حساب کاربری</Link>
                    </li>
                    <li
                      onClick={handleSignOut}
                      className="hover:bg-[#ECE0F3] p-3">
                      خروج
                    </li>
                  </ul>
                )}
              </div>
            )
          ) : null}
          <Link
            href="/checkout/cart"
            className="relative flex cursor-pointer items-center hover:text-purple-600">
            <p className="w-[20px] h-[20px] p-3 flex items-center justify-center text-white rounded-full bg-purple absolute top-[-12px] right-[-12px]">
              {cart?.length}
            </p>
            <RiShoppingCart2Line size={27} />
            <p className="font-semibold mr-1 md:block hidden">سبد خرید</p>
          </Link>
        </div>
      </header>
      {isShowMenu && (
        <div className="bg-black fixed w-full h-[100vh] right-0 z-30 top-0 bg-opacity-60 backdrop-blur-sm"></div>
      )}
    </>
  )
}

export default Header
