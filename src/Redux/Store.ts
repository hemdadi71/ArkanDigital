import { configureStore } from '@reduxjs/toolkit'
import RegisterModal from './Reducers/RegisterModal'
import Role from './Reducers/Role'
import ProductsSlice from './Reducers/ProductsSlice'

// ....................................................
export const store = configureStore({
  reducer: {
    registerModal: RegisterModal,
    role: Role,
    products: ProductsSlice,
  },
})
