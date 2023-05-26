/* eslint-disable @next/next/no-img-element */
import React from 'react'

function ProductCart({ src, name, price }) {
  return (
    <>
      <div className="border rounded-md flex flex-col gap-2 p-3 w-[400px]">
        <div className='h-[60%]'>
          <img className="w-full h-full" src={src} alt="img" />
        </div>
        <p>category</p>
        <p>{name}</p>
        <p>{price} تومان</p>
      </div>
    </>
  )
}

export default ProductCart
