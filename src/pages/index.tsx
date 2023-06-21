/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Categories from '@/Components/Categories'
import Products from '@/Components/Products/products'
import SearchInput from '@/Components/SearchInput/SearchInput'
import Slider from '@/Components/Slider/Slider'
import { smallDatas } from '../../SmallDatas'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex gap-6 mb-8 justify-center px-2 w-full">
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
      <div className="px-5 w-full">
        <div className="overflow-x-auto overflow-y-hidden mb-5 bg-white scrollBar-purple w-full">
          <div className="flex w-[1100px] md:w-full justify-between px-3 text-[14px]">
            {smallDatas.map(item => {
              return (
                <Link
                  href={`/products/${item.category}/${item.subcategory}`}
                  key={item.subcategory}
                  className="md:w-[80px] flex flex-col items-center text-center">
                  <img
                    className="hover:rotate-[3deg]"
                    src={item.src}
                    alt="img"
                  />
                  <p className="w-full">{item.subcategory}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="px-5 mb-5">
        <img
          className="rounded-md w-full"
          src="/product/Cover/1.jpeg"
          alt="img"
        />
      </div>
      <div className="w-full md:hidden block px-10">
        <SearchInput />
      </div>
      <div className="py-3">
        <Products />
      </div>
      <div className="w-full flex items-center justify-center px-5 py-7">
        <img
          className="w-full rounded-md"
          src="/product/Cover/2.jpeg"
          alt="img"
        />
      </div>
    </>
  )
}
