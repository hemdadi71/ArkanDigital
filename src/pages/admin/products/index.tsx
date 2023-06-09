import React from 'react'
import ProductsPricesTable from '@/Components/ProductsTable'
import { useDispatch, useSelector } from 'react-redux'
import AddProductModal from '@/Components/AddProductModal'
import { showProductModal } from '@/Redux/Slices/AddProductSlice'
import { AnimatePresence } from 'framer-motion'
import { columns } from '@/Components/ProductsTable/TableColumns'
import { ProductsModalState } from '@/Types/types'
import CategoryForm from '@/Components/AddCategory'

function Products() {
  const dispatch = useDispatch()
  const isProductModal = useSelector(
    (state: ProductsModalState) => state.productModal.isOpen
  )
  return (
    <>
      <div className="flex flex-col md:p-10 p-2 gap-5 md:w-[70%]">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">مدیریت کالاها</p>
          <button
            onClick={() => dispatch(showProductModal())}
            className="rounded-md px-4 py-1 bg-purple text-white">
            اضافه کردن محصول
          </button>
        </div>
        <div className="w-full">
          <ProductsPricesTable columns={columns} />
          <div className="flex justify-end py-5"></div>
        </div>
      </div>

      <AnimatePresence>{isProductModal && <AddProductModal />}</AnimatePresence>
    </>
  )
}

export default Products
