import React from 'react'
import { useQuery } from 'react-query'
import { getCategories } from '../api'
import Loading from '../Loading'
import { categoryData } from '@/Types/types'

function Categories() {
  const { data, isLoading } = useQuery('getCategories', getCategories)
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex gap-6">
          {data?.map((item: categoryData) => {
            return (
              <ul key={item._id} className="flex flex-col gap-2">
                <li className="font-semibold text-[16px] text-[#E10083]">
                  {item.category}
                </li>
                <ul className="flex flex-col gap-3">
                  {Array.isArray(item.subCategory) &&
                    item.subCategory.map((i: string) => {
                      return (
                        <li
                          key={i}
                          className="text-txtgray hover:text-purple cursor-pointer">
                          {i}
                        </li>
                      )
                    })}
                </ul>
              </ul>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Categories
