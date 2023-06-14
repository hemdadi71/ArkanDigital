import { createSlice } from '@reduxjs/toolkit'

const priceSlice = createSlice({
  name: 'loadingSlice',
  initialState: {},
  reducers: {
    addData: (state, action) => {
      return { ...action.payload }
    },
  },
})
export const { addData } = priceSlice.actions
export default priceSlice.reducer
