import Loading from '@/Components/Loading'
import { setCart } from '@/Redux/Slices/CartSlice'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
// ..................................................................
function Payment() {
  const [order, setOrder] = useState<any>(null)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    const localOrderData = localStorage.getItem('order')
    if (localOrderData) {
      const order = JSON.parse(localOrderData)
      setOrder(order)
    }
  }, [])
  const handleSuccessPayment = () => {
    axios.post('/api/order', order).then(res => {
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
  }
  const handleCancelPayment = () => {
    router.push('/')
    localStorage.removeItem('order')
    toast('پرداخت ناموفق', {
      style: {
        backgroundColor: 'red',
        color: 'white',
      },
    })
  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-[100vh]">
        <div className="p-5 rounded-md bg-purple text-white flex flex-col gap-8">
          <div className='flex items-center justify-center text-xl font-semibold border-b pb-4'>
            <p>پرداخت مبلغ سفارش</p>
          </div>
          {order !== null ? (
            <div className="flex items-center gap-4 text-lg">
              <p>مبلغ قابل پرداخت:</p>
              <p className="font-semibold">
                {order?.totalPrice.toLocaleString()} تومان
              </p>
            </div>
          ) : (
            <Loading />
          )}
          <div className="flex items-center justify-center">
            <div className="flex justify-between w-full px-7">
              <button
                onClick={handleSuccessPayment}
                className="rounded-md px-5 py-1 bg-blue-600">
                پرداخت
              </button>
              <button
                onClick={handleCancelPayment}
                className="rounded-md px-5 py-1 bg-red-600">
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
