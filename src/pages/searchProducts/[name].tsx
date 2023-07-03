import Loading from '@/Components/Loading'
import ProductCart from '@/Components/ProductCart/ProductCart'
import SortSelect from '@/Components/SortSelect'
import { getCategories, getProducts } from '@/Components/api'
import { ProductProps, categoryData } from '@/Types/types'
import { AllProducts } from '@/utils/AllProducts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useQuery } from 'react-query'
// .....................................................................
function SearchResultsPage() {
  const router = useRouter()
  const category: any = router.query.category
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [sort, setSort] = useState('-price')
  const allProducts = AllProducts()
  const { data: categories } = useQuery('getCategories', getCategories)
  const { data, isLoading } = useQuery('getProducts', () => getProducts())
  const name: any = router.query.name
  if (!data) {
    return <Loading />
  }
  const products = data.filter((item: any) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  )
  const totalPages = Math.ceil(allProducts?.length / limit)
  const handleIncreasePage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages))
  }
  const handleDecreasePage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1))
  }
  return (
    <>
      <div className="flex gap-3 py-4 overflow-x-hidden">
        <div className="w-1/4 py-1 bg-white border rounded-l-md md:block hidden">
          <div className="border-b px-6">
            <p className="pb-3 text-xl text-purple font-semibold">محصولات</p>
          </div>
          <div className="px-6 py-3 flex flex-col gap-3">
            {categories?.map((item: categoryData) => {
              return (
                <ul
                  key={item._id}
                  className="flex flex-col gap-2 border-b pb-2">
                  <li className="font-semibold text-[16px] text-[#E10083]">
                    <Link href={`/products/${item.category}`}>
                      {item.category}
                    </Link>
                  </li>
                  <ul className="flex flex-col gap-3 pr-10">
                    {Array.isArray(item.subCategory) &&
                      item.subCategory.map((subcategory: string) => {
                        return (
                          <li
                            key={subcategory}
                            className="text-txtgray hover:text-purple cursor-pointer">
                            <Link
                              href={`/products/${item.category}/${subcategory}`}>
                              {subcategory}
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
                </ul>
              )
            })}
          </div>
        </div>
        <div className="md:w-3/4 relative">
          <div className="flex md:flex-row flex-col items-center gap-2 justify-between pl-4">
            <div className="flex items-center gap-1">
              <p className="text-xl text-purple font-semibold">نتایج جستجو:</p>
              <p className="px-3 text-xl text-purple font-semibold mb-1">
                {router.query.name}
              </p>
            </div>
          </div>
          <div  className={`${isLoading ? 'h-[100vh]' : ''}`}>
            {isLoading ? (
              <Loading className="top-20 -translate-x-1/2 left-1/2" />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3">
                {products &&
                  products.map((item: ProductProps) => {
                    return (
                      <ProductCart item={item} id={item._id} key={item._id} />
                    )
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResultsPage
