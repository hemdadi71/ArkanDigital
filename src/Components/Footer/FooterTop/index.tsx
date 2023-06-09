/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsInstagram, BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandTelegram } from 'react-icons/tb'
import { TfiTwitter } from 'react-icons/tfi'
function FooterTop() {
  return (
    <>
      <div className="bg-purple py-2 text-white rounded-md px-5 flex items-center justify-between">
        <img className="w-20 md:block hidden" src="/product/Logo/1.png" alt="img" />
        <div className="flex items-center gap-5">
          <div className='md:block hidden'>
            <BsTelephone size={40} />
          </div>
          <div className="flex flex-col gap-1 text-[18px]">
            <p>شماره تماس:</p>
            <p>02100000</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className='md:block hidden'>
            <HiOutlineMail size={55} />
          </div>
          <div className="flex flex-col gap-1 text-[18px]">
            <p>ایمیل:</p>
            <p>info[at]example.com</p>
          </div>
        </div>
        <div className="md:flex hidden items-center gap-8 text-[36px]">
          <TfiTwitter />
          <BsInstagram />
          <TbBrandTelegram />
        </div>
      </div>
    </>
  )
}

export default FooterTop
