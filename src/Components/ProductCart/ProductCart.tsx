/* eslint-disable @next/next/no-img-element */
import { ProductCart, ProductCartProps } from '@/Types/types'
import Link from 'next/link'
import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { motion } from 'framer-motion'
function ProductCart({ item }: ProductCart) {
  const { thumbnail, name, price, _id, subcategory } = item
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="border rounded-md flex flex-col gap-4 px-3 bg-white overflow-hidden">
        <Link
          href={`/product/${_id}`}
          className="h-[60%] w-full overflow-hidden bg-white">
          <img
            className="w-full h-full hover:scale-[1.1] hover:rotate-[1deg] transition-all ease-in-out duration-200"
            src={thumbnail}
            alt="img"
          />
        </Link>
        <p className="text-gray-500 text-[15px]">{subcategory}</p>
        <Link href={`/product/${_id}`} className="text-[18px] h-[12%]">
          {name}
        </Link>
        <div className="flex items-center justify-between text-[#ac31f3]">
          <p>{price.toLocaleString()} تومان</p>
          <Link href={`/product/${_id}`} className="border rounded-md p-2">
            <RiShoppingCart2Line className="text-[#ac31f3]" size={24} />
          </Link>
        </div>
      </motion.div>
    </>
  )
}

export default ProductCart
