import { GridColDef } from '@mui/x-data-grid'

export const PriceColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 500,
    editable: false,
    sortable: false,
    filterable: false,
    cellClassName: 'font-semibold',
  },
  {
    field: 'price',
    headerName: 'قیمت (تومان)',
    width: 120,
    editable: true,
    sortable: true,
    filterable: true,
    renderCell: params => {
      return (
        <>
          <p>{params.row.price.toLocaleString()}</p>
        </>
      )
    },
  },
  {
    field: 'quantity',
    headerName: 'موجودی',
    width: 150,
    editable: true,
  },
]
