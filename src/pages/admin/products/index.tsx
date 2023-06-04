import React from 'react'

import ProductForm from '@/Components/AddProduct/AddProduct'
import ProductsTabel from '@/Components/ProductsTable'

function Products() {
  return (
    <>
      <div className="flex flex-col p-10 gap-5">
        {/* <ProductForm /> */}
        <p className="text-xl font-semibold">مدیریت کالاها</p>
        <div className='w-[70%]'>
          <ProductsTabel />
        </div>
      </div>
    </>
  )
}

export default Products
