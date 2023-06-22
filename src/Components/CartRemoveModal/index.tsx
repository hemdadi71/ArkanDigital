import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { CartProps, LoadingState, removeCartModalState } from '@/Types/types'
import { toast } from 'react-hot-toast'
import Spinner from '../Spinner'
import { hideRemoveCartModal } from '@/Redux/Slices/RemoveCartSlice'
import { setCart } from '@/Redux/Slices/CartSlice'
// ..............................................................................
function RemoveCartModal() {
  const dispatch = useDispatch()
  const loading = useSelector((state: LoadingState) => state.loading.isLoading)
  const selectedId = useSelector(
    (state: removeCartModalState) => state.removeCartModal.product
  )
  console.log(selectedId)
  const handleRemoveRow = () => {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      const cart = JSON.parse(localCart)
      const filteredCart = cart.products.filter(
        (item: CartProps) => item.product !== selectedId
      )
      cart.products = filteredCart
      localStorage.setItem('cart', JSON.stringify(cart))
      dispatch(setCart(filteredCart))
      toast('کالا با موفقیت از سبد خرید حذف گردید', {
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
      })
    }
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
        className="bg-white z-50 flex flex-col items-center mx-5 md:mx-0 fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-auto rounded-md">
        <div className="flex flex-col items-center gap-5 text-center p-4">
          <p className="font-semibold">آیا مطمئن هستید که کالا حذف گردد؟</p>
          <div className="flex gap-6">
            <button
              onClick={() => {
                handleRemoveRow()
                dispatch(hideRemoveCartModal())
              }}
              className="rounded-md px-3 py-1 bg-red-500 text-white flex items-center gap-2">
              <p>بله</p>
              {loading && <Spinner className="w-4 h-4" />}
            </button>
            <button
              onClick={() => dispatch(hideRemoveCartModal())}
              className="rounded-md px-3 py-1 bg-gray-200 text-black">
              خیر
            </button>
          </div>
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideRemoveCartModal())}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-40 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default RemoveCartModal
