import { Cart, CartProps } from '@/Types/types'
import { createSlice } from '@reduxjs/toolkit'

const cartState: Cart = {
  CartState: {
    user: '',
    products: {
      id: '',
      count: 0,
      name: '',
      price: 0,
    },
  },
}
const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: cartState,
  reducers: {
    setCart: (state, action) => {
      return { ...state, products: action.payload }
    },
  },
})
export const { setCart } = CartSlice.actions
export default CartSlice.reducer
