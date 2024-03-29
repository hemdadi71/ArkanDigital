import { showRegisterModal } from '@/Redux/Slices/RegisterModal'
import { AnyAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export const HandleAddToCart = (
  product: string,
  count: number,
  name: string,
  price: number,
  quantity: number,
  dispatch: any,
  router: any
) => {
  const token = Cookies.get('token')

  if (!token) {
    dispatch(showRegisterModal())
    return
  }

  const userId = JSON.parse(token).user.id
  const localCart = localStorage.getItem('cart')

  if (localCart) {
    const cart: {
      user: string
      products: {
        product: string
        count: number
        name: string
        price: number
        quantity: number
      }[]
    } = JSON.parse(localCart)
    const existingProduct = cart.products.find(item => item.product === product)

    if (existingProduct) {
      toast('محصول قبلاً به سبد خرید اضافه شده است', {
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
      })
    } else {
      cart.products.push({ product, count, name, price, quantity })
      localStorage.setItem('cart', JSON.stringify(cart))
      toast('محصول با موفقیت به سبد خرید اضافه گردید', {
        style: {
          backgroundColor: 'green',
          color: 'white',
        },
      })
      router.push('/checkout/cart')
    }
  } else {
    const cart = {
      user: userId,
      products: [{ product, count, name, price, quantity }],
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    toast('محصول با موفقیت به سبد خرید اضافه گردید', {
      style: {
        backgroundColor: 'green',
        color: 'white',
      },
    })
    router.push('/checkout/cart')
  }
}
