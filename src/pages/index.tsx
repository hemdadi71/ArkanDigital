/* eslint-disable @next/next/no-img-element */
import Categories from '@/Components/Categories'
import Products from '@/Components/Products/products'
import SearchInput from '@/Components/SearchInput/SearchInput'
import Slider from '@/Components/Slider/Slider'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex gap-6 mb-8 justify-center px-2">
        <div className="w-[16%] flex gap-3">
          <img
            className="rounded-xl w-full h-full md:block hidden"
            src="/product/singlePics/1.jpg"
            alt="img"
          />
        </div>
        <div className="md:w-[63%] rounded-xl overflow-hidden">
          <Slider />
        </div>
        <div className="w-[16%] flex gap-3">
          <img
            className="rounded-xl w-full h-full md:block hidden"
            src="/product/singlePics/2.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="w-full md:hidden block px-10">
        <SearchInput />
      </div>
      <Products />
    </>
  )
}
