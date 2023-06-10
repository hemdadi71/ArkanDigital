import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { hideRemoveModal } from '@/Redux/Slices/RemoveModalSlice'
import { removeModalState } from '@/Types/types'
import { useMutation, useQueryClient } from 'react-query'
import { deleteProduct } from '../api'
import { toast } from 'react-hot-toast'
function RemoveModal() {
  const dispatch = useDispatch()
  const selectedId = useSelector(
    (state: removeModalState) => state.removeModal.id
  )
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: data => {
      queryClient.invalidateQueries('getProducts')
      dispatch(hideRemoveModal())
      toast('محصول با موفقیت حذف گردید')
    },
  })
  const handleRemove = () => {
    mutate({ productId: selectedId })
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
        className="bg-white z-20 flex flex-col items-center mx-5 md:mx-0 fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-auto rounded-md">
        <div className="flex flex-col items-center gap-5 text-center p-4">
          <p className="font-semibold">آیا مطمئن هستید که محصول حذف گردد؟</p>
          <div className="flex gap-6">
            <button
              onClick={handleRemove}
              className="rounded-md px-3 py-1 bg-red-500 text-white">
              بله
            </button>
            <button
              onClick={() => dispatch(hideRemoveModal())}
              className="rounded-md px-3 py-1 bg-gray-200 text-black">
              خیر
            </button>
          </div>
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideRemoveModal())}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-10 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default RemoveModal
