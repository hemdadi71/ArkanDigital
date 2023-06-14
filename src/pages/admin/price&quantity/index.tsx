import ProductsPricesTable from '@/Components/ProductsTable'
import { PriceColumns } from '@/Components/PriceTable/PriceColumns'
import React, { FocusEvent, useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '@/Components/api'
import { EditToolbar } from '@/Components/ProductsTable/EditToolbar'
import { GridCellModes, GridEventListener } from '@mui/x-data-grid'

function Details() {
  const { data } = useQuery('getProducts', () => getProducts())
  const productsLength = data?.length
  return (
    <>
      <div className="flex flex-col md:p-10 p-2 gap-5 md:w-[70%]">
        <div className="flex justify-between items-center relative">
          <p className="text-xl font-semibold">مدیریت موجودی و قیمت ها</p>
          {/* <button
            onClick={handleSaveOrEdit}
            className="rounded-md px-3 py-1 bg-purple text-white">
            ذخیره
          </button> */}
          {/* <div className="hidden items-center gap-4">
            <EditToolbar
              handleMouseDown={handleMouseDown}
              handleCancel={handleCancel}
              handleSaveOrEdit={handleSaveOrEdit}
              cellMode={cellMode}
              cellModesModel={cellModesModel}
              setCellModesModel={setCellModesModel}
            />
          </div> */}
        </div>
        <div className="flex justify-end">
          <div className="w-full">
            <ProductsPricesTable
              // setCellModesModel={setCellModesModel}
              // cellModesModel={cellModesModel}
              // setSelectedCellParams={setSelectedCellParams}
              // selectedCellParams={selectedCellParams}
              // handleCellFocus={handleCellFocus}
              // cellMode={cellMode}
              // handleCellKeyDown={handleCellKeyDown}
              // handleCellEditStop={handleCellEditStop}
              className="flex"
              productsLength={productsLength}
              columns={PriceColumns}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
