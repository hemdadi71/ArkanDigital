import { decreaseCount, increaseCount } from '@/Redux/Slices/CartSlice'
import { showRemoveCartModal } from '@/Redux/Slices/RemoveCartSlice'
import Cart from '@/pages/checkout/cart'
import { GridColDef } from '@mui/x-data-grid'
import Cookies from 'js-cookie'
import { toast } from 'react-hot-toast'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
// ..................................................................
export function CartTableColumns() {
  const dispatch = useDispatch()
  const handleIncreaseCount = (row: any) => {
    dispatch(increaseCount({ product: row.product, quantity: row.quantity }))
    const localCart = localStorage.getItem('cart')
    const cart = localCart ? JSON.parse(localCart) : ''
    const { products } = cart
    const token = Cookies.get('token')
    const userId = token ? JSON.parse(token).user.id : ''
    localStorage.setItem(
      'cart',
      JSON.stringify({ user: userId, products })
    )
  }

  const handleDecreaseCount = (row: any) => {
    dispatch(decreaseCount({ product: row.product }))
    const localCart = localStorage.getItem('cart')
    const cart = localCart ? JSON.parse(localCart) : ''
    const { products } = cart
    const token = Cookies.get('token')
    const userId = token ? JSON.parse(token).user.id : ''
    localStorage.setItem(
      'cart',
      JSON.stringify({ user: userId, products })
    )
  }
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'نام کالا',
      width: 400,
      editable: false,
      cellClassName: 'text-[15px]',
    },
    {
      field: 'price',
      headerName: 'قیمت کالا (تومان)',
      width: 120,
      editable: false,
      cellClassName: 'text-[15px]',
      align: 'center',
      renderCell: params => {
        return (
          <>
            <p>{params.row.price.toLocaleString()}</p>
          </>
        )
      },
    },
    {
      field: 'increment',
      headerName: 'افزایش تعداد',
      width: 100,
      editable: false,
      align: 'center',
      renderCell: params => {
        return (
          <>
            <div
              className="cursor-pointer text-blue-500"
              onClick={() => handleIncreaseCount(params.row)}>
              <AiFillPlusCircle size={25} />
            </div>
          </>
        )
      },
    },
    {
      field: 'count',
      headerName: 'تعداد',
      width: 50,
      editable: false,
      cellClassName: 'text-[15px]',
      align: 'center',
      renderCell: params => {
        return (
          <>
            <div className="w-7 h-7 p-1 flex items-center justify-center bg-[#ac31f3] rounded-md text-white">
              <p className='mt-1'>{params.row.count}</p>
            </div>
          </>
        )
      },
    },
    {
      field: 'decrement',
      headerName: 'کاهش تعداد',
      width: 100,
      editable: false,
      align: 'center',
      renderCell: params => {
        return (
          <>
            <div
              className="cursor-pointer text-yellow-500"
              onClick={() => handleDecreaseCount(params.row)}>
              <AiFillMinusCircle size={25} />
            </div>
          </>
        )
      },
    },
    {
      field: 'remove',
      headerName: 'حذف',
      align: 'center',
      width: 30,
      renderCell: params => {
        return (
          <>
            <button
              onClick={() => {
                dispatch(showRemoveCartModal(params.row.product))
              }}
              className="text-red-500">
              <BsFillTrashFill size={20} />
            </button>
          </>
        )
      },
    },
  ]
  return columns
}
