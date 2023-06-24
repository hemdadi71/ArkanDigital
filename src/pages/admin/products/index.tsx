import React, { useState } from 'react'
import ProductsPricesTable from '@/Components/ProductsTable'
import { useDispatch, useSelector } from 'react-redux'
import AddProductModal from '@/Components/AddProductModal'
import { showProductModal } from '@/Redux/Slices/AddProductSlice'
import { AnimatePresence } from 'framer-motion'
import { columns } from '@/Components/ProductsTable/TableColumns'
import { ProductsModalState, removeModalState } from '@/Types/types'
import CategoryForm from '@/Components/AddCategory'
import { getProducts } from '@/Components/api'
import { useQuery } from 'react-query'
import RemoveModal from '@/Components/RemoveModal'

function Products() {
  const dispatch = useDispatch()
  const isProductModal = useSelector(
    (state: ProductsModalState) => state.productModal.isOpen
  )
  const isRemoveModal = useSelector(
    (state: removeModalState) => state.removeModal.isOpen
  )
  const { data } = useQuery('getProducts', () => getProducts())
  const productsLength = data?.length
  return (
    <>
      <div className="flex flex-col md:p-10 p-2 gap-5 md:w-full">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">مدیریت کالاها</p>
          <button
            onClick={() => dispatch(showProductModal())}
            className="rounded-md px-4 py-1 bg-purple text-white">
            اضافه کردن محصول
          </button>
        </div>
        <div className="w-full">
          <ProductsPricesTable
            className="hidden"
            productsLength={productsLength}
            columns={columns}
          />
          <div className="flex justify-end py-5"></div>
        </div>
      </div>
      <AnimatePresence>{isProductModal && <AddProductModal />}</AnimatePresence>
      <AnimatePresence>{isRemoveModal && <RemoveModal />}</AnimatePresence>
    </>
  )
}

export default Products
