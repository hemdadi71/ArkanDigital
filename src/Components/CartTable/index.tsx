/* eslint-disable @next/next/no-img-element */
// import * as React from 'react'
import { DataGrid, GridPagination } from '@mui/x-data-grid'
import { ProductProps } from '@/Types/types'
import { useEffect, useState } from 'react'
// ..............................................................
export const RTLDataGridPagination = () => {
  return <GridPagination className="rtl-pagination ml-auto mr-6" />
}
// ..............................................................
export default function CartTable({ columns, rows }: any) {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })

  const { page, pageSize } = paginationModel
  const totalPages = Math.ceil(rows.length / paginationModel.pageSize)
  const [rowCountState, setRowCountState] = useState(rows.length)
  useEffect(() => {
    setRowCountState((prevRowCountState: any) =>
      rows.length !== undefined ? rows.length : prevRowCountState
    )
  }, [rows.length, setRowCountState, pageSize])
  const getRowId = (row: ProductProps) => row.product
  // ..............................................................................
  return (
    <>
      <div className="h-[350px] w-full bg-white">
        <DataGrid
          sx={{
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
              outline: 'none !important',
            },
          }}
          rowHeight={65}
          getRowId={getRowId}
          rows={rows || []}
          rowCount={rowCountState}
          columns={columns}
          onPaginationModelChange={setPaginationModel}
          paginationModel={paginationModel}
          components={{
            Pagination: RTLDataGridPagination,
          }}
          pageSizeOptions={[1, 2, 5, 10]}
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
      </div>
    </>
  )
}
