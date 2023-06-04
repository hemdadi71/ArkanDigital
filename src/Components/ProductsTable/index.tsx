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
    field: 'thumbnail',
    headerName: 'تصویر',
    width: 100,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: params => (
      <>
        <div className="rounded-md overflow-hidden">
          <img className="w-full h-full rounded-md" src={params.value} alt="Thumbnail" />
        </div>
      </>
    ),
  },
  {
    field: 'name',
    headerName: 'نام کالا',
    width: 200,
    editable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: 'category',
    headerName: 'دسته بندی',
    width: 200,
    editable: false,
    renderCell: params => (
      <>
        <div className="rounded-md overflow-hidden">
          {params.row.category}/{params.row.subcategory}
        </div>
      </>
    ),
  },
  {
    field: 'edit',
    headerName: 'ویرایش',
    width: 100,
    editable: false,
    renderCell: value => {
      return (
        <Button
          color="info"
          variant="contained"
          onClick={() => {
            console.log(value.row)
          }}>
          ویرایش
        </Button>
      )
    },
  },
  {
    field: 'remove',
    headerName: 'حذف',
    width: 100,
    editable: false,
    renderCell: value => {
      return (
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            console.log(value.row)
          }}>
          حذف
        </Button>
      )
    },
  },
]
const RTLDataGridPagination = () => {
  return <GridPagination className="rtl-pagination ml-auto mr-6" />
}
export default function ProductsTable() {
  const {
    data: rows,
    isLoading,
    isError,
  } = useQuery('getProducts', getProducts, {
    enabled: true,
  })
  const getRowId = (row: ProductProps) => row._id
  console.log(rows)
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Box sx={{  width: '100%', backgroundColor: 'white' }}>
          <DataGrid
            getRowId={getRowId}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 1,
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
