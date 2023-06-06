import { configureStore } from '@reduxjs/toolkit'
import RegisterModal from './Reducers/RegisterModal'
import Role from './Reducers/Role'
import ProductsSlice from './Reducers/ProductsSlice'
import AddProductSlice from './Reducers/AddProductSlice'

// ....................................................
export const store = configureStore({
  reducer: {
    registerModal: RegisterModal,
    role: Role,
    products: ProductsSlice,
    productModal: AddProductSlice,
  },
})
