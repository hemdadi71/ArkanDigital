/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <>
      <div className="flex items-center gap-1 font-semibold md:text-xl">
        <Link href="/">
          <img className="w-16" src="/product/Logo/1.png" alt="img" />
        </Link>
        <p>فروشگاه آرکان</p>
      </div>
    </>
  )
}

export default Logo
