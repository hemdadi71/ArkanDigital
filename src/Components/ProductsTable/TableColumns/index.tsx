/* eslint-disable @next/next/no-img-element */
import { deleteProduct } from '@/Components/api'
import { showProductModal } from '@/Redux/Slices/AddProductSlice'
import { Editing } from '@/Redux/Slices/IsEditingProductSlice'
import { showRemoveModal } from '@/Redux/Slices/RemoveModalSlice'
import { ProductProps, ProductTableRow, ProductsColumns } from '@/Types/types'
import { Button } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { BsFillTrashFill } from 'react-icons/bs'
import { RiEditBoxFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
// ............................................................
const EditButton = ({ row }: ProductTableRow) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(showProductModal())
    dispatch(Editing(row))
    console.log(row)
  }
  return (
    <button className='text-blue-500' onClick={handleClick}>
      <RiEditBoxFill size={25} />
    </button>
  )
}
// ...............................................................
const RemoveButton = ({ row }: ProductTableRow) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(showRemoveModal(row._id))
  }
  return (
    <button className="text-red-500" onClick={handleClick}>
      <BsFillTrashFill size={20} />
    </button>
  )
}
// .................................................................
export const columns: GridColDef[] = [
  {
    field: 'images',
    headerName: 'تصویر',
    disableColumnMenu: true,
    width: 120,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: params => {
      return (
        <>
          <div className="rounded-md overflow-hidden w-[70%]">
            <img
              className="w-full h-full rounded-md hover:scale-[1.1] transition-all ease-in-out duration-200"
              src={params.value[0]}
              alt="Thumbnail"
            />
          </div>
        </>
      )
    },
  },
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 450,
    editable: true,
    cellClassName: 'font-semibold text-[15px]',
  },
  {
    field: 'category',
    headerName: 'دسته بندی',
    width: 200,
    editable: false,
    renderCell: params => (
      <>
        <div className="rounded-md overflow-hidden">
          {params.row.category}/{params.row.subcategory}
        </div>
      </>
    ),
  },
  {
    field: 'edit',
    headerName: 'ویرایش',
    disableColumnMenu: true,
    sortable: false,
    width: 100,
    editable: false,
    renderCell: params => <EditButton row={params.row} />,
  },
  {
    field: 'remove',
    headerName: 'حذف',
    disableColumnMenu: true,
    sortable: false,
    width: 100,
    editable: false,
    renderCell: params => <RemoveButton row={params.row} />,
  },
]
