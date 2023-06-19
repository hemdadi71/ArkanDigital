import ProductCart from '@/Components/ProductCart/ProductCart'
import React from 'react'
import { useQuery } from 'react-query'
import { getCategories, getProducts } from '../api'
import { ProductProps, categoryData } from '../../Types/types'
import Link from 'next/link'
import Loading from '../Loading'
// .........................................................................
function Products() {
  const { data: products, isLoading: productsLoading } = useQuery(
    'getProducts',
    () => getProducts()
  )
  const { data: categories } = useQuery('getCategories', getCategories)
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        {categories &&
          categories.map((category: categoryData) => (
            <div key={category._id} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-purple">
                  {category.category}
                </p>
                <Link href={`/products/${category.category}`}>نمایش همه</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-5">
                {productsLoading ? (
                  <div className="relative">
                    <Loading className="-tanslate-y-1/2 top-1/2 -translate-x-1/2 left-1/2" />
                  </div>
                ) : (
                  products
                    .filter(
                      (product: ProductProps) =>
                        product.category === category.category
                    )
                    .map((product: ProductProps) => (
                      <ProductCart
                        id={product._id}
                        key={product._id}
                        item={product}
                      />
                    ))
                )}
              </div>
              <div className="w-full h-[2px] bg-gray-100 rounded-md"></div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Products
