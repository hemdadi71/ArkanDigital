import React, { useState } from 'react'
import { PhoneMenuProps, categoryData } from '@/Types/types'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

function PhoneMenu({ data, setIsShowPhoneMenu }: PhoneMenuProps) {
  const [activeCategory, setActiveCategory] = useState('')

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory('')
    } else {
      setActiveCategory(category)
    }
  }

  return (
    <div className="absolute right-0 top-[95px] flex flex-col gap-2 bg-gray-100 rounded-b-lg w-[100vw] p-4">
      {data?.map((item: categoryData) => (
        <ul key={item._id} className="flex flex-col gap-2">
          <li
            onClick={() => handleCategoryClick(item.category)}
            className={`flex items-center justify-between border bg-white rounded-md px-2 py-1 font-semibold text-[16px]  ${
              activeCategory === item.category
                ? 'text-[#E10083]'
                : 'text-purple'
            }`}>
            {item.category}
            {activeCategory === item.category ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          {activeCategory === item.category && (
            <ul className="flex flex-col gap-3">
              {Array.isArray(item.subCategory) &&
                item.subCategory.map((subItem: string) => (
                  <li
                    onClick={() =>
                      setIsShowPhoneMenu && setIsShowPhoneMenu(false)
                    }
                    key={subItem}
                    className="text-txtgray hover:text-purple cursor-pointer">
                    {subItem}
                  </li>
                ))}
            </ul>
          )}
        </ul>
      ))}
    </div>
  )
}

export default PhoneMenu
