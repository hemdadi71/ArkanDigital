/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { getProducts } from '../api'
import Link from 'next/link'
import { debounce } from 'lodash'
import { SearchProduct } from '@/Types/types'
// .............................................................
function SearchInput() {
  const [isFocus, setIsFocus] = useState(false)
  const [value, setValue] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const { data, isLoading } = useQuery<SearchProduct[]>('getProducts', () =>
    getProducts()
  )
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const debouncedHandleChange = debounce(handleChange, 1200)
  const Value = value ? value : 'not found'
  let results = data
    ? data.filter(item =>
        item.name.toLocaleLowerCase().includes(Value.toLocaleLowerCase())
      )
    : []
  return (
    <>
      <div className="w-full relative flex items-center">
        <form ref={formRef} className="w-full">
          <input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={debouncedHandleChange}
            className="bg-gray-100 py-2 px-3 rounded-md pr-10 w-full outline-none"
            type="text"
            placeholder="جسجو..."
          />
        </form>
        <div
          className={`absolute right-2 ${
            isFocus ? 'text-[#ac31f3]' : 'text-black'
          }`}>
          <BsSearch size={22} />
        </div>
        {!isLoading && (
          <ul
            className={`absolute bg-white ${
              value ? 'border border-t-0' : ''
            } rounded-b-md top-[45px] overflow-y-auto w-full ${
              results.length ? 'max-h-[300px]' : 'h-auto'
            }`}>
            {results.length ? (
              results.map(item => {
                return (
                  <>
                    <Link href={`/product/${item._id}`}>
                      <li
                        onClick={() => {
                          setValue('')
                          formRef.current?.reset()
                        }}
                        className="flex items-center py-2 px-3 gap-3 cursor-pointer hover:bg-[#e9d3f7] transition-all ease-in-out duration-300">
                        <img
                          className="w-[15%] rounded-md"
                          src={item.thumbnail}
                          alt="img"
                        />
                        <p className="truncate">{item.name}</p>
                      </li>
                    </Link>
                  </>
                )
              })
            ) : value ? (
              <li className="py-2 px-3 text-center">
                <p className="text-red-500">محصولی یافت نشد</p>
              </li>
            ) : null}
          </ul>
        )}
      </div>
    </>
  )
}

export default SearchInput
