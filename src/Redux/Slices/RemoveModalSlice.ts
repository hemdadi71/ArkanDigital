import { createSlice } from '@reduxjs/toolkit'
import { removeModal } from '../../Types/types'
const initialState: removeModal = {
  isOpen: false,
  id: '',
}
const removeModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    showRemoveModal: (state, action) => {
      return { isOpen: true, id: action.payload }
    },
    hideRemoveModal: state => {
      state.isOpen = false
    },
  },
})

export const { showRemoveModal, hideRemoveModal } = removeModalSlice.actions
export default removeModalSlice.reducer
