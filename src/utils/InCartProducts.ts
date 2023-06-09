export const InCartProducts = (cart: any, products: any) => {
  return cart
    .map((cartItemId: any) => {
      const product = products.find(
        (product: any) => product._id === cartItemId
      )
      if (product) {
        return product
      }
      return null
    })
    .filter((product: any) => product !== null)
}
