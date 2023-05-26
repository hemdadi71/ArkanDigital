import ProductCart from '@/Components/ProductCart/ProductCart'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios('/api/products').then(res => {
      const { products } = res.data
      setProducts(products)
      console.log(products)
    })
  }, [])
  return (
    <>
      <div className="flex gap-5 overflow-auto w-[1400px] px-10">
        {products.map(item => {
          return (
            <ProductCart
              key={item._id}
              src={`/product/images/${item.thumbnail}`}
              price={item.price}
              name={item.name}
            />
          )
        })}
      </div>
    </>
  )
}

export default Products
