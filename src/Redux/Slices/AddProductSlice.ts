import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { ProductsModal, RegisterModalState } from '../../Types/types'
const initialState: ProductsModal = {
  isOpen: false,
}
const addProductModalSlice = createSlice({
  name: 'addProductModal',
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
