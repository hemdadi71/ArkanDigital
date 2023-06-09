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
      headerName: 'مجموع مبلغ',
      width: 120,
      editable: true,
      sortable: true,
      filterable: true,
    },
    {
      field: 'createdAt',
      headerName: 'زمان ثبت سفارش',
      width: 200,
      editable: true,
      renderCell: params => {
        const dateNow = params.row.createdAt.split('T')[0].replace(/-/g, '/')
        const timeNow = params.row.createdAt.split('T')[1].split('.')[0]
        console.log(timeNow)
        return (
          <>
            <div className="flex items-center gap-1">
              <p>{dateNow}</p>
              {/* <p>ساعت {timeNow}</p> */}
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
