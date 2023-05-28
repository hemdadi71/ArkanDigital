import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
function SearchInput() {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <>
      <div className="w-[40%] relative flex items-center">
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className="bg-gray-100 py-2 px-3 rounded-md pr-10 w-full outline-none"
          type="text"
          placeholder="جسجو..."
        />
        <div
          className={`absolute right-2 ${
            isFocus ? 'text-purple-600' : 'text-black'
          }`}>
          <BsSearch size={22} />
        </div>
        
      </div>
    </>
  )
}

export default SearchInput
