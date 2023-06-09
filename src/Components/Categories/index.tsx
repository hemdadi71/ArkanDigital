import React from 'react'
import { PhoneMenuProps, categoryData } from '@/Types/types'

function Categories({ data, setIsShowMenu }: categoryData) {
  return (
    <>
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
                        onClick={() => setIsShowMenu(false)}
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
    </>
  )
}

export default Categories
