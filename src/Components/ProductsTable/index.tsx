/* eslint-disable @next/next/no-img-element */
// import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridPagination } from '@mui/x-data-grid'
import { useQuery } from 'react-query'
import { ProductProps, ProductsColumns } from '@/Types/types'
import { getProducts } from '../api'
import { useEffect, useState } from 'react'
// ..............................................................
export const RTLDataGridPagination = () => {
  return <GridPagination className="rtl-pagination ml-auto mr-6" />
}
// ..............................................................
export default function ProductsPricesTable({
  columns,
  productsLength,
}: ProductsColumns) {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })
  const { page, pageSize } = paginationModel
  const totalPages = Math.ceil(productsLength / pageSize)
  const [rowCountState, setRowCountState] = useState(productsLength)
  useEffect(() => {
    setRowCountState(prevRowCountState =>
      productsLength !== undefined ? productsLength : prevRowCountState
    )
  }, [productsLength, setRowCountState, pageSize])
  const { data: rows, isLoading } = useQuery(
    ['getProducts', page, pageSize],
    () => getProducts(pageSize, page + 1)
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
          rowHeight={65}
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
