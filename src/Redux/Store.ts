import { configureStore } from '@reduxjs/toolkit'
import RegisterModal from './Slices/RegisterModal'
import Role from './Slices/Role'
import ProductsSlice from './Slices/ProductsSlice'
import AddProductSlice from './Slices/AddProductSlice'
import RemoveModalSlice from './Slices/RemoveModalSlice'
import IsEditingProductSlice from './Slices/IsEditingProductSlice'
import LoadingSlice from './Slices/LoadingSlice'
import PriceSlice from './Slices/PriceSlice'

// ....................................................
export const store = configureStore({
  reducer: {
    registerModal: RegisterModal,
    role: Role,
    products: ProductsSlice,
    productModal: AddProductSlice,
    removeModal: RemoveModalSlice,
    editingData: IsEditingProductSlice,
    loading: LoadingSlice,
    priceState: PriceSlice,
  },
})
