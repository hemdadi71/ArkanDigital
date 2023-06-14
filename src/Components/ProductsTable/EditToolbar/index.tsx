import { editProduct } from '@/Components/api'
import { GridRowId, GridCellModes, GridCellModesModel } from '@mui/x-data-grid'
import { toast } from 'react-hot-toast'
interface SelectedCellParams {
  id: GridRowId
  field: string
}

interface EditToolbarProps {
  selectedCellParams?: SelectedCellParams
  cellModesModel: GridCellModesModel
  setCellModesModel: (value: GridCellModesModel) => void
  cellMode: 'view' | 'edit'
  className: string
}

export function EditToolbar({
  selectedCellParams,
  cellMode,
  cellModesModel,
  setCellModesModel,
  className,
}: EditToolbarProps) {
  const handleSaveOrEdit = () => {
    const localData: any = localStorage.getItem('editData')
    const data = JSON.parse(localData)
    if (!Array.isArray(data)) {
      console.error('Invalid data format')
      return
    }
    data.forEach((item: any) => {
      const id = Object.keys(item)[0]
      const Data = item[id]

      const editedData: { price?: number; quantity?: number } = {}

      if (Data && Data.price) {
        editedData.price = Data.price.value
      }

      if (Data && Data.quantity) {
        editedData.quantity = Data.quantity.value
      }

      editProduct({ id, Data: editedData }).catch((error: any) => {
        console.error(error)
      })
    })
    toast('اطلاعات با موفقیت ویرایش شد', {
      style: {
        background: 'yellow',
        color: 'black',
      },
    })
    if (!selectedCellParams) {
      return
    }
    const updatedCellModesModel = { ...cellModesModel }
    for (let id in updatedCellModesModel) {
      updatedCellModesModel[id] = {
        ...updatedCellModesModel[id],
        price: { mode: GridCellModes.View },
        quantity: { mode: GridCellModes.View },
      }
    }
    setCellModesModel(updatedCellModesModel)
  }

  // ...................................................................
  const handleCancel = () => {
    if (!selectedCellParams) {
      return
    }
    const updatedCellModesModel = { ...cellModesModel }
    for (let id in updatedCellModesModel) {
      updatedCellModesModel[id] = {
        ...updatedCellModesModel[id],
        price: { mode: GridCellModes.View, ignoreModifications: true },
        quantity: { mode: GridCellModes.View, ignoreModifications: true },
      }
    }

    setCellModesModel(updatedCellModesModel)
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    // Keep the focus in the cell
    event.preventDefault()
  }

  return (
    <>
      <div className={`${className} absolute z-50 left-2 top-3 gap-4`}>
        <button
          className="rounded-md px-3 py-1 bg-purple text-white w-fit"
          onClick={handleSaveOrEdit}
          onMouseDown={handleMouseDown}
          disabled={!selectedCellParams}>
          {cellMode === 'edit' ? 'ذخیره' : 'ویرایش'}
        </button>
        <button
          className="rounded-md px-3 py-1 bg-blue-600 text-white w-fit"
          onClick={handleCancel}
          onMouseDown={handleMouseDown}
          disabled={cellMode === 'view'}>
          انصراف
        </button>
      </div>
    </>
  )
}
