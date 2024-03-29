import { createSlice } from '@reduxjs/toolkit'
import { removeCartModal } from '../../Types/types'
const initialState: removeCartModal = {
  isOpen: false,
  product: '',
}
const removeCartSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    showRemoveCartModal: (state, action) => {
      return { isOpen: true, product: action.payload }
    },
    hideRemoveCartModal: state => {
      state.isOpen = false
    },
  },
})

export const { showRemoveCartModal, hideRemoveCartModal } =
  removeCartSlice.actions
export default removeCartSlice.reducer
