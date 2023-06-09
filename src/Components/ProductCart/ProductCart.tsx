/* eslint-disable @next/next/no-img-element */
import { ProductCartProps } from '@/Types/types'
import Link from 'next/link'
import React from 'react'

function ProductCart({
  src,
  name,
  price,
  id,
  category,
  subcategory,
}: ProductCartProps) {
  return (
    <>
      <Link
        href={`/product/${id}`}
        className="border rounded-md flex flex-col gap-2 p-3 w-[400px]">
        <div className="h-[60%]">
          <img className="w-full h-full" src={src} alt="img" />
        </div>
        <p>
          {category}/{subcategory}
        </p>
        <p>{name}</p>
        <p>{price} تومان</p>
      </Link>
    </>
  )
}

export default ProductCart
