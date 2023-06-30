import { GridColDef } from '@mui/x-data-grid'

export const ModalOrderTable: GridColDef[] = [
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 550,
    editable: false,
    sortable: false,
    filterable: false,
  },
  {
    field: 'price',
    headerName: 'قیمت (تومان)',
    width: 150,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: params => {
      return (
        <>
          <p>{params.row.price.toLocaleString()}</p>
        </>
      )
    },
  },
  {
    field: 'count',
    headerName: 'تعداد',
    width: 150,
    editable: false,
    sortable: false,
    filterable: false,
  },
]
