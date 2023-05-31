import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RoleState } from '../../Types/types'
import Cookies from 'js-cookie'
// const data = JSON.parse(Cookies.get('token'))

const roleSlice = createSlice({
  name: 'role',
  initialState: { role: '' } as RoleState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload
    },
  },
})

export const { setRole } = roleSlice.actions
export default roleSlice.reducer
