import ProductCart from '@/Components/ProductCart/ProductCart'
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { getCategories, getProducts } from '../api'
import { ProductProps, categoryData } from '../../Types/types'
import Link from 'next/link'
import Loading from '../Loading'
import {  motion } from 'framer-motion'
// .........................................................................
function Products() {
  const [screen, setScreen] = useState(1366)
  const { data: products, isLoading: productsLoading } = useQuery(
    ['getProducts', screen],
    () => getProducts()
  )
  const { data: categories } = useQuery('getCategories', getCategories)
  const getProductsWithLimit = (category: string) => {
    return products
      .filter((product: ProductProps) => product.category === category)
      .slice(0, screen > 1366 ? 5 : 4)
  }
  const windowSize = useRef([0, 0])
  useEffect(() => {
    windowSize.current = [window.innerWidth, window.innerHeight]
    setScreen(windowSize.current[0])
  }, [])
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        {categories &&
          categories.map((category: categoryData) => (
            <div key={category._id} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="md:text-2xl text-md font-semibold text-purple">
                  {category.category}
                </p>
                <Link href={`/products/${category.category}`}>نمایش همه</Link>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-5">
                {productsLoading ? (
                  <div className="relative">
                    <Loading className="-tanslate-y-1/2 top-1/2 -translate-x-1/2 left-1/2" />
                  </div>
                ) : (
                  getProductsWithLimit(category.category).map(
                    (product: ProductProps) => (
                      <ProductCart
                        id={product._id}
                        key={product._id}
                        item={product}
                      />
                    )
                  )
                )}
              </motion.div>
              <div className="w-full h-[2px] bg-gray-100 rounded-md"></div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Products
