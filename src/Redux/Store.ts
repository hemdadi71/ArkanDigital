import { configureStore } from '@reduxjs/toolkit'
import RegisterModal from './Slices/RegisterModal'
import Role from './Slices/Role'
import ProductsSlice from './Slices/ProductsSlice'
import AddProductSlice from './Slices/AddProductSlice'

// ....................................................
export const store = configureStore({
  reducer: {
    registerModal: RegisterModal,
    role: Role,
    products: ProductsSlice,
    productModal: AddProductSlice,
  },
})
