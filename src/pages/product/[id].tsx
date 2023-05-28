import { useRouter } from 'next/router'
import React from 'react'

function Product() {
  const router = useRouter()
  console.log(router.query.id)
  return (
    <>
      <div className='text-center text-xl'>Product id : {router.query.id}</div>
    </>
  )
}

export default Product
