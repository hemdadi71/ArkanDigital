import { hideProductModal } from '@/Redux/Slices/AddProductSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import ProductForm from '@/Components/AddProduct/AddProduct'
import CategoryForm from '../AddCategory'
function AddProductModal() {
  const dispatch = useDispatch()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="bg-white z-20 p-3 flex flex-col justify-center fixed translate-x-1/2 translate-y-1/2 top-2 left-[5%] w-[90%] h-[600px] pt-10 overflow-auto rounded-md">
        <ProductForm />
        <CategoryForm />
      </motion.div>
      <div
        onClick={() => dispatch(hideProductModal())}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-10 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default AddProductModal
