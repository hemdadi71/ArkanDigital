import Loading from '../../../Components/Loading'
import ProductCart from '@/Components/ProductCart/ProductCart'
import SortSelect from '@/Components/SortSelect'
import { getCategories, getProducts } from '@/Components/api'
import { ProductProps, categoryData } from '@/Types/types'
import { AllSubcategoryProducts } from '@/utils/AllProducts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useQuery } from 'react-query'
// ................................................................................
function SubCategoryGroup() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [sort, setSort] = useState('-price')
  const router = useRouter()
  const subcategory: any = router.query.subcategory
  const allProducts = AllSubcategoryProducts()
  const totalPages = Math.ceil(allProducts?.length / limit)
  const { data: products, isLoading } = useQuery(
    ['getProducts', router.query.subcategory, page, limit, sort],
    () => getProducts(limit, page, '', subcategory, sort)
  )
  const { data: categories } = useQuery('getCategories', getCategories)
  const handleIncreasePage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages))
  }
  const handleDecreasePage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1))
  }
  return (
    <>
      <div className="flex gap-3 py-4">
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
            <p className="px-3 text-xl text-purple font-semibold mb-1">
              {router.query.category}
            </p>
            <div className="flex items-center gap-2">
              <p>صفحه:</p>
              <div className="flex items-center gap-2">
                <span className="cursor-pointer" onClick={handleIncreasePage}>
                  <AiOutlineRight />
                </span>
                <span className="border rounded-md bg-[#d9acf3] w-7 h-7 flex items-center justify-center">
                  {page}
                </span>
                <span className="cursor-pointer" onClick={handleDecreasePage}>
                  <AiOutlineLeft />
                </span>
              </div>
            </div>
            <div className="w-[30%]">
              <SortSelect
                sort={sort}
                setSort={setSort}
              />
            </div>
            <div className="flex items-center gap-2">
              <p>تعداد محصولات در هر صفحه:</p>
              <div className="flex items-center gap-2">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    limit < 10 ? setLimit(prev => prev + 1) : setLimit(10)
                  }}>
                  <AiOutlineRight />
                </span>
                <span className="border rounded-md w-7 h-7 flex items-center justify-center bg-[#d9acf3]">
                  {limit}
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    limit > 1 ? setLimit(prev => prev - 1) : setLimit(1)
                  }}>
                  <AiOutlineLeft />
                </span>
              </div>
            </div>
          </div>
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
    </>
  )
}

export default SubCategoryGroup
