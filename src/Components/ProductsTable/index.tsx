/* eslint-disable @next/next/no-img-element */
// import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridPagination } from '@mui/x-data-grid'
import { useQuery } from 'react-query'
import { ProductProps } from '@/Types/types'
import { getProducts } from '../api'
import { useEffect, useState } from 'react'

import Loading from '../Loading'

const RTLDataGridPagination = () => {
  return <GridPagination className="rtl-pagination ml-auto mr-6" />
}
export default function ProductsPricesTable({ columns }) {
  const procutsLength: number = +(localStorage.getItem('procutsLength') ?? 0)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })
  const totalPages = Math.ceil(procutsLength / paginationModel.pageSize)
  const [rowCountState, setRowCountState] = useState(procutsLength)
  useEffect(() => {
    setRowCountState(prevRowCountState =>
      procutsLength !== undefined ? procutsLength : prevRowCountState
    )
  }, [procutsLength, setRowCountState, paginationModel.pageSize])
  const { data: rows, isLoading } = useQuery(
    ['getProducts', paginationModel.page, paginationModel.pageSize],
    () => getProducts(paginationModel.pageSize, paginationModel.page + 1)
  )
  const getRowId = (row: ProductProps) => row._id
  return (
    <>
      <Box sx={{ height: 350, width: '100%', backgroundColor: 'white' }}>
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
            LoadingOverlay: () => (
              <Box
                sx={{ opacity: '0.1' }}
                display="flex"
                position="relative"
                zIndex="10"
                left={0}
                top={0}
                bgcolor="gray"
                alignItems="center"
                justifyContent="center"
                height={400}
                width="100%">
                <Loading />
              </Box>
            ),
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
