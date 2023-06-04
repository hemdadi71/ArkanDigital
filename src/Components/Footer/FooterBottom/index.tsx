/* eslint-disable @next/next/no-img-element */
import React from 'react'

function FooterBottom() {
  return (
    <>
      <div className="bg-gray-100 rounded-md p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-5 w-[65%]">
          <h1 className="text-[18px] font-semibold md:text-right text-center">
            فروشگاه اینترنتی آرکان،خرید آسان کالای دیجیتال با مناسب ترین قیمت
          </h1>
          <p className="text-txtgray md:text-right text-center">
            فروشگاه آرکان با حرکتی رو به جلو و تلاش مداوم و بی وقفه مبادرت به
            واردات انواع قطعات کامپیوتری نمود و طی این سالها با استفاده از تیمی
            متخصص، کار آمد و تحصیل کرده، در حوزه تجارت و فروش, اقدام به توزیع
            کالاهای اساسی رایانه ای مانند انواع نوت بوک، تبلت و قطعات اصلی
            رایانه ای و همچنین ارائه خدمات پس از فروش (گارانتی ) به مشتریان
            فعالیت مستمر خود را ادامه داده است.
          </p>
        </div>
        <div className="flex w-[35%] justify-center items-center gap-5">
          <img
            width={100}
            src="https://baninopc.com/_next/image?url=%2Fimages%2Fsamandehi.png&w=1920&q=75"
            alt="img"
          />
          <img
            width={70}
            src="https://baninopc.com/images/etehadie.svg"
            alt="img"
          />
        </div>
      </div>
    </>
  )
}

export default FooterBottom
