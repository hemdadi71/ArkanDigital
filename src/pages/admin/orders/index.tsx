import React from 'react'
import { useSelector } from 'react-redux'
import { RoleState } from '../../../Types/types'
import OrdersTable from '@/Components/OrdersTable'
import { columns } from '@/Components/ProductsTable/TableColumns'
import OrdersStatusPlan from '@/Components/OrdersTable/RadioGroup'

function orders() {
  return (
    <>
      <div className="flex flex-col p-10 gap-5">
        {/* <div className='flex items-center justify-between'>
          <p className="text-xl font-semibold">مدیریت سفارش ها</p>
          <OrdersStatusPlan />
        </div>
        <div className="w-[70%]">
          <OrdersTable columns={columns} />
        </div> */}
      </div>
    </>
  )
}

export default orders
