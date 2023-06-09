import ProductCart from '@/Components/ProductCart/ProductCart'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCartProps, ProductProps, ProductState } from '../../Types/types'
import { getProducts } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '@/Redux/Slices/ProductsSlice'
import { useQuery } from 'react-query'

function Products() {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useQuery(
    'getProducts',
    () => getProducts(),
    {
      onSuccess: data => {
        dispatch(allProducts(data))
        localStorage.setItem('procutsLength', data.length)
      },
    }
  )
  return (
    <>
      <div className="flex gap-5 flex-wrap p-5">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((item: ProductProps) => {
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
