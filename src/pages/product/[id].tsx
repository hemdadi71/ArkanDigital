/* eslint-disable @next/next/no-img-element */
import { getSingleProduct } from '@/Components/api'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '@/Components/Loading'
import { AnimatePresence, motion } from 'framer-motion'
import { FastDelivery, OriginalSvg, ReturnMony, Svg } from '../../SVG/index'
import {
  GlassMagnifier,
  MOUSE_ACTIVATION,
  Magnifier,
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
  TOUCH_ACTIVATION,
} from 'react-image-magnifiers'
import ReactImageMagnify from 'react-image-magnify'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
type ProductProps = {
  id: string
}

function Product() {
  const [img, setImg] = useState<string[]>([])
  const [count, setCount] = useState(1)
  const router = useRouter()
  const { id } = router.query as ProductProps
  const { data, isLoading, error } = useQuery(['getSingleProduct', id], () =>
    getSingleProduct(id)
  )

  useEffect(() => {
    if (data && data.images) {
      setImg([data.images[0]])
    }
  }, [data])

  if (error) {
    return <div>Error loading product</div>
  }

  return (
    <div className={`mt-8 ${isLoading ? 'h-[100vh]' : ''}`}>
      {isLoading ? (
        <Loading className="-translate-x-1/2 left-1/2" />
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex w-full px-10 py-5">
            <div className="w-1/2 flex items-center">
              <div className="w-1/5 flex flex-col gap-3">
                {data &&
                  data.images.map((item: string) => {
                    return (
                      <div onClick={() => setImg([item])} key={item}>
                        <img
                          className="w-[60%] rounded-md cursor-pointer"
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
                      key={item}>
                      <img
                        className="w-[80%] transition-all ease-in-out duration-300"
                        src={item}
                        alt="img"
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg">{data.name}</p>
                <div className="flex items-center gap-1">
                  <p>برند:</p>
                  <p className="text-gray-500">{data.brand}</p>
                </div>
                <div className="bg-gray-200 h-[1px] w-full my-2"></div>
                <div className="flex items-center gap-1">
                  <p>دسته بندی:</p>
                  <p className="text-gray-500">
                    {data.category} / {data.subcategory}
                  </p>
                </div>
                <div className="flex items-center gap-1 my-4">
                  <p>گارانتی:</p>
                  <button className="text-white bg-purple rounded-md px-3 text-[14px] py-1">
                    تماس بگیرید
                  </button>
                </div>
                <div className="bg-[#F6F7F8] border rounded-md p-3 flex flex-col gap-5">
                  <p className="text-lg">{data.name}</p>
                  {data.quantity !== 0 && (
                    <div className="flex items-center gap-1">
                      <p>موجودی محصول:</p>
                      <p>{data.quantity} عدد</p>
                    </div>
                  )}
                  {data.quantity !== 0 ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <p>قیمت واحد محصول:</p>
                        <p className="text-[#ac31f3] text-[20px]">
                          {data.price.toLocaleString()} تومان
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p>تعداد:</p>
                        <div className="flex items-center gap-2">
                          <span
                            onClick={() =>
                              setCount(prevPage =>
                                Math.min(prevPage + 1, data.quantity)
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
                      disabled={data.quantity === 0 ? true : false}
                      className={`text-center text-white w-full rounded-md py-2 ${
                        data.quantity === 0 ? 'bg-gray-600' : 'bg-purple'
                      }`}>
                      {data.quantity === 0
                        ? 'محصول موجود نیست'
                        : 'افزودن محصول به سبد خرید'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-10">
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
          <div className="px-10 py-5 flex flex-col gap-3">
            <p className="font-semibold">توضیحات محصول: </p>
            <p className="text-gray-500">{data.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
