import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { hideOrderModal } from '@/Redux/Slices/OrderModalSlice'
import UserData from './UserData'
import { ModalOrderTable } from '../OrderTableModal/ColumnTableModal'
import OrderTableModal from '../OrderTableModal'
import { useMutation, useQueryClient } from 'react-query'
import { putOrdetStatus } from '../api'
import { toast } from 'react-hot-toast'
import { hideLoading } from '@/Redux/Slices/LoadingSlice'
import Spinner from '../Spinner'
import moment from 'moment-jalaali'
import { addDays, subDays } from 'date-fns'
import { orderModalState } from '@/Types/types'
import { AiFillCloseCircle } from 'react-icons/ai'
// ...............................................................
function OrderModal() {
  const dispatch = useDispatch()
  const orderData = useSelector(
    (state: orderModalState) => state.orderModal.row
  )
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: putOrdetStatus,
    onSuccess: () => {
      queryClient.invalidateQueries('getOrders')
      dispatch(hideOrderModal())
      toast('سفارش به سفارش های تحویل شده انتقال یافت', {
        style: {
          background: 'green',
          color: 'white',
        },
      })
      dispatch(hideLoading())
    },
  })
  const handleChangeStatus = () => {
    const newDeliveryDate = moment(addDays(new Date(), 1)).format(
      'jYYYY/jMM/jDD'
    )
    const newData = {
      ...orderData,
      deliveryStatus: true,
      deliveryDate: newDeliveryDate,
    }
    console.log(newData)
    mutate({ id: orderData._id, data: newData })
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white  z-50 rounded-md">
        <div className="flex items-center justify-between py-2 border-b px-5">
          <p className="text-lg text-purple">نمایش سفارش</p>
          <AiFillCloseCircle
            className="text-red-500 cursor-pointer"
            onClick={() => dispatch(hideOrderModal())}
            size={23}
          />
        </div>
        <div className="p-5">
          <UserData orderData={orderData} />
          <div className="mt-3">
            <OrderTableModal
              columns={ModalOrderTable}
              rows={orderData.products}
            />
          </div>
          {!orderData.deliveryStatus && (
            <div className="flex justify-center">
              <button
                onClick={handleChangeStatus}
                className="rounded-md bg-purple px-3 py-1 text-white mt-2 flex items-center gap-1">
                <p>تحویل شد</p>
                {isLoading && <Spinner className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideOrderModal())}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-30 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default OrderModal
