import ProductCart from '@/Components/ProductCart/ProductCart'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCartProps, ProductProps, ProductState } from '../../Types/types'
import { getProducts } from '../api'
import { useDispatch } from 'react-redux'
import { allProducts } from '@/Redux/Slices/ProductsSlice'
import { useQuery } from 'react-query'

function Products() {
  const dispatch = useDispatch()
  const { data, isLoading } = useQuery(
    'getProducts',
    () => getProducts(),
    {
      onSuccess: data => {
        dispatch(allProducts(data))
      },
    }
  )
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5  p-5">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((item: ProductProps) => {
            return <ProductCart id={item._id} item={item} key={item._id} />
          })}
      </div>
    </>
  )
}

export default Products
