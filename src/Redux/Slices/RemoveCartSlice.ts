import { createSlice } from '@reduxjs/toolkit'
import { removeModal } from '../../Types/types'
const initialState: removeModal = {
  isOpen: false,
  id: '',
}
const removeCartSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    showRemoveCartModal: (state, action) => {
      return { isOpen: true, id: action.payload }
    },
    hideRemoveCartModal: state => {
      state.isOpen = false
    },
  },
})

export const { showRemoveCartModal, hideRemoveCartModal } = removeCartSlice.actions
export default removeCartSlice.reducer
