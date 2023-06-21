import { showRemoveCartModal } from '@/Redux/Slices/RemoveCartSlice'
import Cart from '@/pages/checkout/cart'
import { GridColDef } from '@mui/x-data-grid'
import { toast } from 'react-hot-toast'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
// ..................................................................
export function CartTableColumns() {
  const dispatch = useDispatch()
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'نام کالا',
      width: 550,
      editable: true,
      cellClassName: 'text-[15px]',
    },
    {
      field: 'price',
      headerName: 'قیمت کالا (تومان)',
      width: 120,
      editable: true,
      cellClassName: 'text-[15px]',
      renderCell: params => {
        return (
          <>
            <p onClick={() => console.log(params.row)}>
              {params.row.price.toLocaleString()}
            </p>
          </>
        )
      },
    },
    {
      field: 'count',
      headerName: 'تعداد',
      width: 50,
      editable: true,
      cellClassName: 'text-[15px]',
    },
    {
      field: 'remove',
      headerName: 'حذف',
      width: 50,
      renderCell: params => {
        return (
          <>
            <button
              onClick={() => {
                dispatch(showRemoveCartModal(params.row.id))
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
