import { configureStore } from '@reduxjs/toolkit'
import RegisterModal from './Reducers/RegisterModal'
import Role from './Reducers/Role'

// ....................................................
export const store = configureStore({
  reducer: {
    registerModal: RegisterModal,
    role: Role,
  },
})
