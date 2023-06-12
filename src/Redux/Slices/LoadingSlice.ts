import { createSlice } from '@reduxjs/toolkit'
import { Loading } from '../../Types/types'
const initialState: Loading = {
  isLoading: false,
}
const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    showLoading: state => {
      state.isLoading = true
    },
    hideLoading: state => {
      state.isLoading = false
    },
  },
})
export const { showLoading, hideLoading } = loadingSlice.actions
export default loadingSlice.reducer
