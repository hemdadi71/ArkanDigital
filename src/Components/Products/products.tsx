import ProductCart from '@/Components/ProductCart/ProductCart'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCartProps, ProductProps } from '../../../Types'

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios('http://localhost:3000/api/products').then(res => {
      const { products } = res.data
      setProducts(products)
      console.log(products)
    })
  }, [])
  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {products.map((item: ProductProps) => {
          return (
            <ProductCart
              key={item._id}
              src={`/product/images/${item.thumbnail}`}
              price={item.price}
              name={item.name}
              id={item._id}
            />
          )
        })}
      </div>
    </>
  )
}

export default Products
