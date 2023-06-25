import Loading from '@/Components/Loading'
import OrderTableModal from '@/Components/OrderTableModal'
import { ModalOrderTable } from '@/Components/OrderTableModal/ColumnTableModal'
import { getAllOrders } from '@/Components/api'
import Cookies from 'js-cookie'
import React from 'react'
import { useQuery } from 'react-query'

function Orders() {
  const token = Cookies.get('token')
  const userData = token ? JSON.parse(token) : null
  const { user } = userData
  const id = user.id ? user.id : user._id
  const { data, isLoading } = useQuery('getAllOrders', getAllOrders)
  if (isLoading) {
    return (
      <div className='py-3 flex justify-center'>
        <Loading />
      </div>
    )
  }
  const userOrder = data.filter((item: any) => item.user === id)
  console.log(userOrder)
  return (
    <>
      <div className="p-10 overflow-auto flex flex-col gap-5 bg-[#F2F3F5]">
        {userOrder.length ? (
          userOrder.map((item: any) => {
            return (
              <>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3 border rounded-2xl p-5 bg-white">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <p>وضعیت سفارش:</p>
                        <p
                          className={`${
                            item.deliveryStatus
                              ? 'text-green-600'
                              : 'text-red-500'
                          }`}>
                          {item.deliveryStatus
                            ? 'تکمیل و ارسال شده'
                            : 'در انتظار ارسال'}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <p>تاریخ ثبت سفارش:</p>
                          <p>
                            {item.createdAt.split('T')[0].replace(/-/g, '/')}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <p>تاریخ ارسال :</p>
                          <p
                            className={`${
                              item.deliveryStatus
                                ? 'text-green-600'
                                : 'text-red-500'
                            }`}>
                            {item.deliveryDate.split('T')[0].replace(/-/g, '/')}
                          </p>
                        </div>
                      </div>
                    </div>
                    <OrderTableModal
                      columns={ModalOrderTable}
                      rows={item.products}
                    />
                    <div className="flex items-center gap-3 text-lg">
                      <p>مجموع مبلغ سفارش:</p>
                      <p className="text-[#ac31f3]">
                        {item.totalPrice.toLocaleString()} تومان
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-gray-300"></div>
                </div>
              </>
            )
          })
        ) : (
          <div className="flex items-center justify-center text-xl font-semibold">
            شما هیچ سفارش ثبت شده ای ندارید
          </div>
        )}
      </div>
    </>
  )
}

export default Orders
