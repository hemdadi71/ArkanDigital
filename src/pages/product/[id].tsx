/* eslint-disable @next/next/no-img-element */
import { getSingleProduct } from '@/Components/api'
import { useRouter } from 'next/router'
import React, { Dispatch, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FastDelivery, OriginalSvg, ReturnMony } from '@/SVG'
import Loading from '@/Components/Loading'
import { HandleAddToCart } from '@/utils/AddToCart'
import { useDispatch } from 'react-redux'
import { ImageMagnifier } from '@/lib/Mgnify'
import { AnyAction } from '@reduxjs/toolkit'
type ProductProps = {
  id: string
}
// .....................................................................
function Product() {
  const [img, setImg] = useState<string[]>([])
  const [count, setCount] = useState(1)
  const router = useRouter()
  const { id } = router.query as ProductProps
  const { data, isLoading } = useQuery(['getSingleProduct', id], () =>
    getSingleProduct(id)
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && data.images) {
      setImg([data.images[0]])
    }
  }, [data])

  if (!data) {
    return (
      <div className="py-5 h-[100vh]">
        <Loading className="-translate-x-1/2 left-1/2" />
      </div>
    )
  }

  const {
    images,
    quantity,
    price,
    description,
    name,
    subcategory,
    brand,
    category,
    _id,
  } = data
  return (
    <>
      <div className={`mt-3 ${isLoading ? 'h-[100vh]' : ''}`}>
        {isLoading ? (
          <Loading className="-translate-x-1/2 left-1/2" />
        ) : (
          <div className="flex flex-col gap-5 h-full">
            <div className="flex lg:flex-row flex-col w-full px-10 py-5">
              <div className="lg:w-1/2 flex mb-8 lg:mb-0 items-center">
                <div className="w-1/5 flex flex-col gap-3">
                  {data &&
                    images.map((item: string) => {
                      return (
                        <div onClick={() => setImg([item])} key={item}>
                          <img
                            className="lg:w-[60%] w-[80%] rounded-md cursor-pointer"
                            src={item}
                            alt="img"
                          />
                        </div>
                      )
                    })}
                </div>
                <div className="w-4/5">
                  {img.map(item => {
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        exit={{ opacity: 0 }}
                        className="overflow-hidden w-[80%]"
                        key={item}>
                        <ImageMagnifier width="100%" src={item} />
                      </motion.div>
                    )
                  })}
                </div>
              </div>
              <div className="flex-1 2xl:mt-16">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">{name}</p>
                  <div className="flex items-center gap-1">
                    <p>برند:</p>
                    <p className="text-gray-500">{brand}</p>
                  </div>
                  <div className="bg-gray-200 h-[1px] w-full my-2"></div>
                  <div className="flex items-center gap-1">
                    <p>دسته بندی:</p>
                    <p className="text-gray-500">
                      {category} / {subcategory}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 my-4">
                    <p>گارانتی:</p>
                    <button className="text-white bg-purple rounded-md px-3 text-[14px] py-1">
                      تماس بگیرید
                    </button>
                  </div>
                  <div className="bg-[#F6F7F8] lg:w-full border rounded-md p-3 flex flex-col gap-5">
                    <p className="text-lg">{name}</p>
                    {data.quantity !== 0 && (
                      <div className="flex items-center gap-1">
                        <p>موجودی محصول:</p>
                        <p>{quantity} عدد</p>
                      </div>
                    )}
                    {quantity !== 0 ? (
                      <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between">
                        <div className="flex items-center gap-1">
                          <p>قیمت واحد محصول:</p>
                          <p className="text-[#ac31f3] text-[20px]">
                            {price.toLocaleString()} تومان
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>تعداد:</p>
                          <div className="flex items-center gap-2">
                            <span
                              onClick={() =>
                                setCount(prevPage =>
                                  Math.min(prevPage + 1, quantity)
                                )
                              }>
                              <AiOutlineRight className="cursor-pointer" />
                            </span>
                            <span className="border rounded-md bg-[#d9acf3] w-7 h-7 flex items-center justify-center">
                              {count}
                            </span>
                            <span
                              onClick={() => {
                                setCount(prevPage => Math.max(prevPage - 1, 1))
                              }}>
                              <AiOutlineLeft className="cursor-pointer" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-400">تماس بگیرید</p>
                    )}
                    <div>
                      <button
                        onClick={() =>
                          HandleAddToCart(
                            _id,
                            count,
                            name,
                            price,
                            dispatch,
                            router
                          )
                        }
                        disabled={quantity === 0 ? true : false}
                        className={`text-center text-white w-full rounded-md py-2 ${
                          quantity === 0 ? 'bg-gray-600' : 'bg-purple'
                        }`}>
                        {quantity === 0
                          ? 'محصول موجود نیست'
                          : 'افزودن محصول به سبد خرید'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-y-3 items-center justify-between px-10">
              <div className="flex gap-2">
                <div className="w-[23%]">
                  <OriginalSvg />
                </div>
                <div className="w-[300px]">
                  <p>ضمانت اصل بودن کالا</p>
                  <p className="text-gray-400 text-[13px]">
                    مطالعه شرایط و ضوابط
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[23%]">
                  <ReturnMony />
                </div>
                <div className="w-[300px]">
                  <p>ضمانت بازگشت کالا</p>
                  <p className="text-gray-400 text-[13px]">
                    مطالعه شرایط و ضوابط
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <div className="w-[23%]">
                  <FastDelivery />
                </div>
                <div className="w-[300px]">
                  <p>ارسال سریع کالا</p>
                  <p className="text-gray-400 text-[13px]">
                    مطالعه شرایط و ضوابط
                  </p>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="bg-gray-200 h-[1px] w-full"></div>
            </div>
            <div className="flex flex-col px-10 py-5 gap-3">
              <p className="font-semibold">توضیحات محصول: </p>
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-gray-500"></div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Product
