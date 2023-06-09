/* eslint-disable @next/next/no-img-element */
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { useQuery } from 'react-query'
import { getOrders } from '../api'
import { useEffect, useState } from 'react'
import { Columns } from './OrdersTableColumns'
import { RTLDataGridPagination } from '../ProductsTable'
import { OrderTableProps, ProductProps } from '@/Types/types'
// .....................................................................
export default function OrdersTable({
  allOrdersLength,
  userData,
  status,
}: OrderTableProps) {
  const columns = Columns(userData)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })
  const { page, pageSize } = paginationModel
  const totalPages = Math.ceil(allOrdersLength / pageSize)
  const [rowCountState, setRowCountState] = useState(allOrdersLength)
  useEffect(() => {
    setRowCountState(prevRowCountState =>
      allOrdersLength !== undefined ? allOrdersLength : prevRowCountState
    )
  }, [allOrdersLength, setRowCountState, pageSize])
  const { data: rows, isLoading } = useQuery(
    ['getOrders', page, pageSize, status],
    () => getOrders(pageSize, page + 1, status)
  )
  const getRowId = (row: ProductProps) => row._id
  return (
    <>
      <Box
        sx={{
          height: 350,
          width: '100%',
          backgroundColor: 'white',
        }}>
        <DataGrid
          getRowId={getRowId}
          rowCount={rowCountState}
          rows={rows || []}
          columns={columns}
          onPaginationModelChange={setPaginationModel}
          paginationModel={paginationModel}
          loading={isLoading}
          components={{
            Pagination: RTLDataGridPagination,
          }}
          pageSizeOptions={[1, 2, 5, 10]}
          paginationMode="server"
          localeText={{
            MuiTablePagination: {
              labelDisplayedRows: () =>
                `صفحه ${
                  paginationModel.page + 1
                } از ${totalPages}: تعداد کل صفحات ${totalPages}`,
              labelRowsPerPage: 'تعداد ردیف در هر صفحه:',
            },
          }}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  )
}
