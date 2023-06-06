import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegisterModalState } from '../../Types/types'
const initialState: RegisterModalState = {
  isOpen: false,
}
const addProductModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    showProductModal: state => {
      state.isOpen = true
    },
    hideProductModal: state => {
      state.isOpen = false
    },
  },
})

export const { showProductModal, hideProductModal } =
addProductModalSlice.actions
export default addProductModalSlice.reducer
