/* eslint-disable @next/next/no-img-element */
import { deleteProduct } from '@/Components/api'
import { showRemoveModal } from '@/Redux/Slices/RemoveModalSlice'
import { Button } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { useDispatch } from 'react-redux'

export const columns: GridColDef[] = [
  {
    field: 'thumbnail',
    headerName: 'تصویر',
    disableColumnMenu: true,
    width: 120,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: params => (
      <>
        <div className="rounded-md overflow-hidden">
          <img
            className="w-full h-full rounded-md hover:scale-[1.2] transition-all ease-in-out duration-200"
            src={params.value}
            alt="Thumbnail"
          />
        </div>
      </>
    ),
  },
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 200,
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
    renderCell: value => {
      return (
        <Button
          color="info"
          variant="contained"
          onClick={() => {
            console.log(value.row)
          }}>
          ویرایش
        </Button>
      )
    },
  },
  {
    field: 'remove',
    headerName: 'حذف',
    disableColumnMenu: true,
    sortable: false,
    width: 100,
    editable: false,
    renderCell: value => {
      const dispatch = useDispatch()
      return (
        <Button
          color="error"
          variant="contained"
          onClick={() => dispatch(showRemoveModal(value.row._id))}>
          حذف
        </Button>
      )
    },
  },
]
