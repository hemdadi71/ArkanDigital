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
import { BsChevronDown } from 'react-icons/bs'
import { useQuery } from 'react-query'
// .....................................................................
function CategoriesPage() {
  const router = useRouter()
  const category: any = router.query.category
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [sort, setSort] = useState('-price')
  const [isCategoryOpen, setCategoryOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const allProducts = AllProducts()
  const { data: products, isLoading } = useQuery(
    ['getProducts', router.query.category, page, limit, sort],
    () => getProducts(limit, page, category, '', sort)
  )
  const totalPages = Math.ceil(allProducts?.length / limit)
  const { data: categories } = useQuery('getCategories', getCategories)
  const handleIncreasePage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages))
  }
  const handleDecreasePage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1))
  }
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
    } else {
      setSelectedCategory(category)
    }
  }
  return (
    <>
      <div className="flex gap-3 py-4 overflow-x-hidden">
        <div className="w-1/4 py-1 bg-white border rounded-l-md md:block hidden h-fit">
          <div className="border-b px-6">
            <p className="pb-3 text-xl text-purple font-semibold">محصولات</p>
          </div>
          <div className="px-6 py-3 flex flex-col gap-3">
            {categories?.map((item: categoryData) => {
              const isSubCategoryOpen = selectedCategory === item.category
              return (
                <ul
                  key={item._id}
                  className="flex flex-col gap-2 border-b pb-2">
                  <li
                    className="font-semibold text-[16px] text-[#E10083] cursor-pointer flex items-center justify-between"
                    onClick={() => handleCategoryClick(item.category)}>
                    <p>{item.category}</p>
                    <div>
                      <BsChevronDown className={`transition-all ease-in-out duration-700 ${isSubCategoryOpen ? 'rotate-180 text[#E10083]' : 'text-black'}`} />
                    </div>
                  </li>
                  {
                    <ul
                      className={`flex flex-col gap-3 overflow-hidden transition-all ease-in-out duration-700 pr-10 ${
                        isSubCategoryOpen ? 'max-h-[500px]' : 'max-h-0'
                      }`}>
                      <li className="text-txtgray hover:text-purple cursor-pointer">
                        <Link href={`/products/${item.category}`}>همه</Link>
                      </li>
                      {Array.isArray(item.subCategory) &&
                        item.subCategory.map((subcategory: string) => {
                          return (
                            <>
                              <li
                                key={subcategory}
                                className="text-txtgray hover:text-purple cursor-pointer">
                                <Link
                                  href={`/products/${item.category}/${subcategory}`}>
                                  {subcategory}
                                </Link>
                              </li>
                            </>
                          )
                        })}
                    </ul>
                  }
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
              <SortSelect sort={sort} setSort={setSort} />
            </div>
          </div>
          <div className={`${isLoading ? 'h-[100vh]' : ''}`}>
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
          <div className="flex justify-end">
            <div className="flex justify-between w-[63%] pl-6">
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
                    {limit === 0 ? 'همه' : limit}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesPage
