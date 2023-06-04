/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Box from '@mui/material/Box'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridPagination,
} from '@mui/x-data-grid'
import { useQuery } from 'react-query'
import { ProductProps, ProductState } from '@/Types/types'
import { useSelector } from 'react-redux'
import { getProducts } from '../api'
import { Button } from '@mui/material'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 300,
    editable: false,
    sortable: false,
    filterable: false,
  },
  {
    field: 'price',
    headerName: 'قیمت',
    width: 120,
    editable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: 'quantity',
    headerName: 'موجودی',
    width: 70,
    editable: true,
  },
]
const RTLDataGridPagination = () => {
  return <GridPagination className="rtl-pagination ml-auto mr-6" />
}
export default function PriceTable() {
  const {
    data: rows,
    isLoading,
    isError,
  } = useQuery('getProducts', getProducts, {
    enabled: true,
  })
  const getRowId = (row: ProductProps) => row._id
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
          <DataGrid
            getRowId={getRowId}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            components={{
              Pagination: RTLDataGridPagination,
            }}
            localeText={{
              MuiTablePagination: {
                labelDisplayedRows: ({ from, to, count }) =>
                  
                  `صفحه ${from} از ${count} : تعداد کل صفحات ${count}`,
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </>
  )
}
