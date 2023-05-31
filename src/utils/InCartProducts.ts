export const InCartProducts = (cart, products) => {
  return cart
    .map(cartItemId => {
      const product = products.find(product => product._id === cartItemId)
      if (product) {
        return product
      }
      return null
    })
    .filter(product => product !== null)
}
