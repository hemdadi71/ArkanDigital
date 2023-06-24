import { GridColDef } from '@mui/x-data-grid'

export const PriceColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 500,
    editable: false,
    sortable: false,
    filterable: false,
    cellClassName:'font-semibold'
  },
  {
    field: 'price',
    headerName: 'قیمت',
    width: 150,
    editable: true,
    sortable: true,
    filterable: true,
  },
  {
    field: 'quantity',
    headerName: 'موجودی',
    width: 150,
    editable: true,
  },
]
