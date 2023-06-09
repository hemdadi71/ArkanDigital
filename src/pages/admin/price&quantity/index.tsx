import ProductsPricesTable from '@/Components/ProductsTable'
import { PriceColumns } from '@/Components/PriceTable/PriceColumns'
import React from 'react'

function details() {
  return (
    <>
      <div className="flex flex-col md:p-10 p-2 gap-5 md:w-[70%]">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">مدیریت موجودی و قیمت ها</p>
          <button className="rounded-md px-3 py-1 bg-purple text-white">
            ذخیره
          </button>
        </div>
        <div className="flex justify-end">
          <div className='w-full'>
            <ProductsPricesTable columns={PriceColumns} />
          </div>
        </div>
      </div>
    </>
  )
}

export default details
