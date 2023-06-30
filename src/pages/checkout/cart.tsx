/* eslint-disable react-hooks/exhaustive-deps */
import RemoveCartModal from '@/Components/CartRemoveModal'
import CartTable from '@/Components/CartTable'
import { CartTableColumns } from '@/Components/CartTable/CartTableColumn'
import { setCart } from '@/Redux/Slices/CartSlice'
import { Cart, CartProps, removeCartModalState } from '@/Types/types'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      const cart = JSON.parse(localCart)
      dispatch(setCart(cart.products))
    }
  }, [])
  const rows = useSelector((state: Cart) => state.CartState.products) || []
  const isRemoveModalOpen = useSelector(
    (state: removeCartModalState) => state.removeCartModal.isOpen
  )
  const columns = CartTableColumns()
  const totalPrice = rows.reduce(
    (acc: number, row: CartProps) => acc + row.price * row.count,
    0
  )
  return (
    <>
      <div className="flex flex-col gap-4 py-5">
        <div className="px-5 text-xl font-semibold md:text-right text-center">
          <p>سبد خرید</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-y-3 items-center justify-between px-5">
          <div className="lg:w-[75%] w-full lg:px-0">
            <CartTable columns={columns} rows={rows} />
          </div>
          <div className="lg:w-[40%] w-full lg:px-14 2xl:px-28">
            <div className="flex flex-col gap-3 rounded-md border bg-white p-5">
              <div className="mb-3 flex flex-col gap-3">
                <p className="text-xl font-semibold">اطلاعات پرداخت</p>
                <div className="bg-gray-200 h-[1px]"></div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-cetner justify-between">
                  <p className="text-gray-400">جمع مبلغ کالاها</p>
                  <p className="font-semibold">
                    {totalPrice.toLocaleString()} تومان
                  </p>
                </div>
                <div className="flex items-cetner justify-between">
                  <p className="text-gray-400">هزینه ارسال</p>
                  <p className="font-semibold">وابسته به آدرس</p>
                </div>
                <div className="flex items-cetner justify-between">
                  <p className="text-gray-400">قابل پرداخت</p>
                  <p className="text-[#ac31f3] font-semibold">
                    {totalPrice.toLocaleString()} تومان
                  </p>
                </div>
                <button
                  onClick={() => {
                    router.push('/checkout/shipment')
                  }}
                  className={`text-center text-xl ${
                    rows.length ? 'bg-purple' : 'bg-gray-500'
                  } text-white rounded-md py-1 mt-2`}
                  disabled={rows.length ? false : true}>
                  {rows.length ? 'نهایی کردن سبد خرید' : 'سبد خرید خالی است'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isRemoveModalOpen && <RemoveCartModal />}
      </AnimatePresence>
    </>
  )
}

export default Cart
