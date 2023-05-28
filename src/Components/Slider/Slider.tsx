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
      {/* <Swiper
        className="w-full"
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide>
          <img className="w-full" src="/product/Slider/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><p className='bg-blue-500'>fsdfsdff</p></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
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
            src="/product/Slider/3.jpg"
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
