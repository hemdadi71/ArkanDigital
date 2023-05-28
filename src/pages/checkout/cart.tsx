import Link from 'next/link'
import React from 'react'

function cart() {
  return (
    <>
      <div className="text-center text-xl">سبد خرید</div>
      <div className="text-center text-xl">
        <Link href="/checkout/shipment">
          نهایی کردن سبد خرید
        </Link>
      </div>
    </>
  )
}

export default cart
