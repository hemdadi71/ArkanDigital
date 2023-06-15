import React from 'react'
import { PhoneMenuProps, categoryData } from '@/Types/types'
import Link from 'next/link'

function Categories({ data, setIsShowMenu }: categoryData) {
  return (
    <>
      <div className="flex xl:gap-6 2xl:gap-20">
        {data?.map((item: categoryData) => {
          return (
            <ul key={item._id} className="flex flex-col gap-2">
              <li className="font-semibold text-[16px] text-[#E10083]">
                <Link href={`/products/${item.category}`}>{item.category}</Link>
              </li>
              <ul className="flex flex-col gap-3">
                {Array.isArray(item.subCategory) &&
                  item.subCategory.map((subcategory: string) => {
                    return (
                      <li
                        onClick={() => setIsShowMenu(false)}
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
    </>
  )
}

export default Categories
