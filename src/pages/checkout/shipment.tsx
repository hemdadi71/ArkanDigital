'use client'
import Loading from '@/Components/Loading'
import OrderForm from '@/Components/OrderForm'
import { Cart, CartProps } from '@/Types/types'
import { userDataSchema } from '@/utils/Schema/CompleteUserData'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment-jalaali'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getUnixTime, startOfDay, isSameDay, addDays, subDays } from 'date-fns'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { setCart } from '@/Redux/Slices/CartSlice'
function Shipment() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  // ........................................................
  const rows = useSelector((state: Cart) => state.CartState.products) || []
  const router = useRouter()
  const dispatch = useDispatch()
  const totalPrice = rows.reduce(
    (acc: number, row: CartProps) => acc + row.price * row.count,
    0
  )
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userDataSchema),
  })
  const token = Cookies.get('token')
  const data = token ? JSON.parse(token) : null
  if (!isClient) {
    return null
  }
  if (!data) {
    return <Loading />
  }
  let { user, tokens } = data
  const submitForm = (data: any) => {
    const id = user.id ? user.id : user._id
    const OrderData = {
      user: id,
      products: rows,
      totalPrice,
      createdAt: moment(addDays(new Date(), 1)).format('jYYYY/jMM/jDD'),
      deliveryDate: moment(new Date(data.deliveryDate)).format('jYYYY/jMM/jDD'),
    }
    try {
      const response = axios.put(`/api/users/${id}`, data)
      response.then(res => {
        user = res.data.data
        const updatedUserData = JSON.stringify({ tokens, user })
        Cookies.set('token', updatedUserData)
      })
      axios.post('/api/order', OrderData).then(res => {
        console.log(res.data)
        localStorage.removeItem('cart')
        toast('سفارش با موفقیت ثبت گردید', {
          style: {
            backgroundColor: 'green',
            color: 'white',
          },
        })
        dispatch(setCart([]))
        router.push('/')
      })
      console.log(OrderData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="py-5">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex lg:flex-row flex-col gap-y-3 justify-between px-5">
          <div className="lg:w-[60%] w-full lg:px-0">
            <OrderForm
              control={control}
              user={user}
              register={register}
              errors={errors}
            />
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
                <button className="text-center text-xl bg-purple text-white rounded-md py-1 mt-2">
                  نهایی کردن سفارش
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Shipment
