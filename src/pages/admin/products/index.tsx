import React from 'react'
import ProductsTabel from '@/Components/ProductsTable'
import { useDispatch, useSelector } from 'react-redux'
import AddProductModal from '@/Components/AddProductModal'
import { showProductModal } from '@/Redux/Reducers/AddProductSlice'
import { AnimatePresence } from 'framer-motion'

function Products() {
  const dispatch = useDispatch()
  const isProductModal = useSelector(state => state.productModal.isOpen)
  return (
    <>
      <div className="flex flex-col p-10 gap-5">
        <p className="text-xl font-semibold">مدیریت کالاها</p>
        <div className="w-[70%]">
          <ProductsTabel />
          <div className="flex justify-end py-5">
            <button
              onClick={() => dispatch(showProductModal())}
              className="rounded-md px-4 py-1 bg-purple text-white">
              اضافه کردن محصول
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>{isProductModal && <AddProductModal />}</AnimatePresence>
    </>
  )
}

export default Products
