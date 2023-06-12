import { createSlice } from '@reduxjs/toolkit'
import { isEditing } from '../../Types/types'
const initialState: isEditing = {
  isEditing: false,
  rowData: {},
}
const isEditingProduct = createSlice({
  name: 'isEditing',
  initialState,
  reducers: {
    Editing: (state, action) => {
      return { isEditing: true, rowData: action.payload }
    },
    notEditing: (state, action) => {
      return { isEditing: false, rowData: action.payload }
    },
  },
})

export const { Editing, notEditing } = isEditingProduct.actions
export default isEditingProduct.reducer
