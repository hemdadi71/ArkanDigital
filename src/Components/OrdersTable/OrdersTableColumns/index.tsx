import { Button } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'

export function Columns(userData) {
  const columns: GridColDef[] = [
    // Modify the columns according to your order data structure
    {
      field: 'user.username',
      headerName: 'نام کاربر',
      width: 150,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: params => {
        const user = userData?.find(item => item._id === params.row.user)
        return (
          <>
            <p>
              {user.firstname} {user.lastname}
            </p>
          </>
        )
      },
    },
    {
      field: 'totalPrice',
      headerName: 'مجموع مبلغ',
      width: 120,
      editable: true,
      sortable: true,
      filterable: true,
    },
    {
      field: 'createdAt',
      headerName: 'زمان ثبت سفارش',
      width: 140,
      editable: true,
    },
    {
      field: 'checkOrder',
      headerName: 'بررسی',
      width: 120,
      editable: true,
      renderCell: () => {
        return (
          <>
            <Button>بررسی سفارش</Button>
          </>
        )
      },
    },
  ]
  return columns
}
