/* eslint-disable @next/next/no-img-element */
// import * as React from 'react'
import Box from '@mui/material/Box'
import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  GridCellModesModel,
  GridColDef,
  GridPagination,
  MuiEvent,
} from '@mui/x-data-grid'
import { useQuery } from 'react-query'
import { ProductProps, ProductsColumns } from '@/Types/types'
import { editProduct, getProducts } from '../api'
import {
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { EditToolbar } from './EditToolbar'
import { GridEventListener } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '@/Redux/Slices/PriceSlice'
// ..............................................................
export const RTLDataGridPagination = () => {
  return <GridPagination className="rtl-pagination ml-auto mr-6" />
}
// ..............................................................
export default function ProductsPricesTable({
  columns,
  productsLength,
  className,
}: any) {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })
  const { page, pageSize } = paginationModel
  const totalPages = Math.ceil(productsLength / pageSize)
  const [rowCountState, setRowCountState] = useState(productsLength)
  useEffect(() => {
    setRowCountState((prevRowCountState: any) =>
      productsLength !== undefined ? productsLength : prevRowCountState
    )
  }, [productsLength, setRowCountState, pageSize])
  const { data: rows, isLoading } = useQuery(
    ['getProducts', page, pageSize],
    () => getProducts(pageSize, page + 1)
  )
  const getRowId = (row: ProductProps) => row._id
  // ..............................................................................
  const [selectedCellParams, setSelectedCellParams] = useState<any | null>(null)
  const [cellModesModel, setCellModesModel] = useState<GridCellModesModel>({})

  const handleCellFocus = useCallback((event: FocusEvent<HTMLDivElement>) => {
    const row = event.currentTarget.parentElement
    const id = row!.dataset.id!
    const field = event.currentTarget.dataset.field!
    setSelectedCellParams({ id, field })
  }, [])

  const cellMode = useMemo(() => {
    if (!selectedCellParams) {
      return 'view'
    }
    const { id, field } = selectedCellParams
    return cellModesModel[id]?.[field]?.mode || 'view'
  }, [cellModesModel, selectedCellParams])
  const handleCellEditStop = useCallback<GridEventListener<'cellEditStop'>>(
    (params, event) => {
      if (params.reason === GridCellEditStopReasons.cellFocusOut) {
        event.defaultMuiPrevented = true
      }
    },
    []
  )
  const handleStateChange = (params: {
    editRows: { [s: string]: unknown } | ArrayLike<unknown>
  }) => {
    let arr = []
    for (const [key, value] of Object.entries(params.editRows)) {
      arr.push({ [key]: value })
      localStorage.setItem('editData', JSON.stringify(arr))
    }
  }
  return (
    <>
      <div className="h-[350px] w-full bg-white">
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
          cellModesModel={cellModesModel}
          onCellEditStop={handleCellEditStop}
          onCellModesModelChange={model => setCellModesModel(model)}
          slots={{
            toolbar: EditToolbar,
          }}
          onStateChange={handleStateChange}
          slotProps={{
            toolbar: {
              cellMode,
              selectedCellParams,
              setSelectedCellParams,
              cellModesModel,
              setCellModesModel,
              className,
            },
            cell: {
              onFocus: handleCellFocus,
            },
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
      </div>
    </>
  )
}
