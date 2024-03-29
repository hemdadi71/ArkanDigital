import { hideProductModal } from '@/Redux/Slices/AddProductSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import ProductForm from '@/Components/AddProduct/AddProduct'
import CategoryForm from '../AddCategory'
import { IoCloseSharp } from 'react-icons/io5'
import { notEditing } from '@/Redux/Slices/IsEditingProductSlice'
import { isEditnigState } from '@/Types/types'
function AddProductModal() {
  const dispatch = useDispatch()
  const selectedEdit = useSelector((state: isEditnigState) => state.editingData)
  const { isEditing } = selectedEdit
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
        className="bg-white z-20 flex flex-col mx-5 md:h-[400px] 2xl:h-[730px] md:mx-0 fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-auto rounded-md">
        <div className="pb-2 flex w-full border-b p-2">
          <IoCloseSharp
            onClick={() => {
              dispatch(hideProductModal())
              dispatch(notEditing({}))
            }}
            className="hover:text-red-500 cursor-pointer"
            size={25}
          />
          <div className="flex justify-center w-full text-lg font-semibold text-purple">
            <p>{isEditing ? 'ویرایش محصول' : 'افزودن محصول جدید'}</p>
          </div>
        </div>
        <div className="lg:h-auto h-[500px] overflow-auto p-3">
          <ProductForm />
          <CategoryForm />
        </div>
      </motion.div>
      <div
        onClick={() => {
          dispatch(hideProductModal())
          dispatch(notEditing({}))
        }}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-10 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default AddProductModal
