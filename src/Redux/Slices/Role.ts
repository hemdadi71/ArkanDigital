import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type RoleState = {
  role: string
}
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
