/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <>
      <footer className="px-10 pb-10  flex flex-col gap-5">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </footer>
    </>
  )
}

export default Footer
