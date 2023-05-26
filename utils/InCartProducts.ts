export const InCartProducts = (cart, products) => {
  return cart
    .map(cartItemId => {
      const product = products.find(product => product._id === cartItemId)
      if (product) {
        return product
      }
      // If the product is not found in the products array, you can handle it as per your requirement.
      // Here, I'm returning null.
      return null
    })
    .filter(product => product !== null)
}
