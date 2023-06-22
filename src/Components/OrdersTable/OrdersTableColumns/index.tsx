import { UserData } from '@/Types/types'
import { Button } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
// ....................................................
export function Columns(userData: UserData[]) {
  const columns: GridColDef[] = [
    {
      field: 'user.username',
      headerName: 'نام کاربر',
      width: 150,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: params => {
        const user =
          userData?.find(item => item._id === params.row.user) ||
          ({} as UserData)
        return (
          <>
            <p className="font-semibold">
              {user.firstname} {user.lastname}
            </p>
          </>
        )
      },
    },
    {
      field: 'totalPrice',
      headerName: 'مجموع مبلغ (تومان)',
      width: 130,
      editable: true,
      sortable: true,
      filterable: true,
      renderCell: params => {
        return (
          <>
            <p onClick={() => console.log(params)}>
              {params.row.totalPrice.toLocaleString()}
            </p>
          </>
        )
      },
    },
    {
      field: 'createdAt',
      headerName: 'زمان ثبت سفارش',
      width: 200,
      editable: true,
      renderCell: params => {
        const dateNow = params.row.createdAt.split('T')[0].replace(/-/g, '/')
        return (
          <>
            <div className="flex items-center gap-1">
              <p>{dateNow}</p>
            </div>
          </>
        )
      },
    },
    {
      field: 'checkOrder',
      headerName: 'بررسی',
      width: 120,
      editable: true,
      renderCell: params => {
        return (
          <>
            <Button onClick={() => console.log(params.row)}>بررسی سفارش</Button>
          </>
        )
      },
    },
  ]
  return columns
}
