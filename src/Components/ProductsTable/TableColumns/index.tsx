/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material"
import { GridColDef } from "@mui/x-data-grid"

export const columns: GridColDef[] = [
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
          <img
            className="w-full h-full rounded-md"
            src={params.value}
            alt="Thumbnail"
          />
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
