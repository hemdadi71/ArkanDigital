import { createSlice } from '@reduxjs/toolkit'
import { orderModal } from '../../Types/types'
const initialState: orderModal = {
  isOpen: false,
  row: '',
}
const OrderModalSlice = createSlice({
  name: 'orderModal',
  initialState,
  reducers: {
    showOrderModal: (state, action) => {
      return { isOpen: true, row: action.payload }
    },
    hideOrderModal: state => {
      state.isOpen = false
    },
  },
})

export const { showOrderModal, hideOrderModal } = OrderModalSlice.actions
export default OrderModalSlice.reducer
