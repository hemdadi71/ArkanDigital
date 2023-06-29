import { Cart, CartProps } from '@/Types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

interface CartState {
  user: string
  products: CartProps[]
}

const cartState: CartState = {
  user: '',
  products: [],
}

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: cartState,
  reducers: {
    setCart: (state, action: PayloadAction<CartProps[]>) => {
      state.products = action.payload
    },
    increaseCount: (
      state,
      action: PayloadAction<{ product: string; quantity: number }>
    ) => {
      const { product, quantity }: any = action.payload
      const productToUpdate = state.products.find(
        item => item.product === product
      )
      if (productToUpdate) {
        const updatedCount = productToUpdate.count + 1
        if (updatedCount <= quantity) {
          productToUpdate.count = updatedCount
        }
      }

      localStorage.setItem(
        'cart',
        JSON.stringify({ ...state, products: state.products })
      )
    },
    decreaseCount: (state, action: PayloadAction<{ product: string }>) => {
      const { product }: any = action.payload
      const productToUpdate = state.products.find(
        item => item.product === product
      )
      if (productToUpdate) {
        const updatedCount = productToUpdate.count - 1
        if (updatedCount >= 1) {
          productToUpdate.count = updatedCount
        }
      }
      localStorage.setItem(
        'cart',
        JSON.stringify({ ...state, products: state.products })
      )
    },
  },
})

export const { setCart, increaseCount, decreaseCount } = CartSlice.actions
export default CartSlice.reducer
