import ProductCart from '@/Components/ProductCart/ProductCart'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCartProps, ProductProps } from '../../Types/types'
import { getProducts } from '../api'

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // axios('/api/users/646b63be62090c3be0742304').then(res => {
    //   console.log(res)
    // })
    getProducts().then(res => setProducts(res))
  }, [])
  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {products &&
          products.map((item: ProductProps) => {
            return (
              <ProductCart
                subcategory={item.subcategory}
                category={item.category}
                key={item._id}
                src={item.thumbnail}
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
