/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Swiper, SwiperSlide } from 'swiper/react'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/splide/dist/css/splide.min.css'
import 'swiper/css'
function Slider() {
  return (
    <>
      <Splide
        className="cursor-pointer"
        options={{
          type: 'loop',
          pagination: true,
          perPage: 1,
          perMove: 1,
          arrows: true,
          autoplay: true,
          direction: 'rtl',
          pauseOnFocus: true,
          autoHeight: true,
        }}>
        <SplideSlide>
          <img
            className="h-full w-full rounded-xl"
            src="/product/Slider/1.jpg"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-full w-full rounded-xl"
            src="/product/Slider/2.jpg"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-full w-full rounded-xl"
            src="/product/Slider/7.jpg"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-full w-full rounded-xl"
            src="/product/Slider/4.jpg"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-full w-full rounded-xl"
            src="/product/Slider/5.jpg"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </>
  )
}

export default Slider
