import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegisterModalState } from '../../Types/types'
const initialState: RegisterModalState = {
  isOpen: false,
}
const registerModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    showRegisterModal: state => {
      state.isOpen = true
    },
    hideRegisterModal: state => {
      state.isOpen = false
    },
  },
})

export const { showRegisterModal, hideRegisterModal } =
  registerModalSlice.actions
export default registerModalSlice.reducer
