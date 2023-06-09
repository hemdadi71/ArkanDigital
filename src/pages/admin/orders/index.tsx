import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RoleState } from '../../../Types/types'
import OrdersTable from '@/Components/OrdersTable'
import { columns } from '@/Components/ProductsTable/TableColumns'
import OrdersStatusPlan, { plans } from '@/Components/OrdersTable/RadioGroup'
import { useQuery } from 'react-query'
import { getOrders, getUsers } from '@/Components/api'

function Orders() {
  const [plan, setPlan] = useState(plans[1])
  let status = plan === 'سفارش های در انتظار ارسال' ? false : true
  const { data: usersData } = useQuery('getUsers', getUsers)
  const { data: orderData } = useQuery(['getOrders', status], () =>
    getOrders(0, 1, status)
  )
  const orderDataLength = orderData?.length
  return (
    <>
      <div className="flex flex-col md:p-10 p-2 gap-5 lg:w-[70%]">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <p className="text-xl font-semibold">مدیریت سفارش ها</p>
          <OrdersStatusPlan plan={plan} setPlan={setPlan} />
        </div>
        <div className="w-full">
          <OrdersTable
            allOrdersLength={orderDataLength}
            userData={usersData}
            status={status}
          />
        </div>
      </div>
    </>
  )
}

export default Orders
