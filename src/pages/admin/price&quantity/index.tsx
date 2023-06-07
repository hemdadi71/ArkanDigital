import PriceTable from '@/Components/PriceTable'
import ProductsPricesTable from '@/Components/ProductsTable'
import { PriceColumns } from '@/Components/ProductsTable/PriceColumns'
import { RoleState } from '@/Types/types'
import React from 'react'
import { useSelector } from 'react-redux'

function details() {
  return (
    <>
      <div className="flex flex-col p-10 gap-5 items-center">
        {/* <ProductForm /> */}
        <p className="text-xl font-semibold">مدیریت موجودی و قیمت ها</p>
        <div className="w-[50%]">
          <ProductsPricesTable columns={PriceColumns} />
        </div>
      </div>
    </>
  )
}

export default details
