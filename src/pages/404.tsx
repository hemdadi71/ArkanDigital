import Link from 'next/link'
import { HiHome } from 'react-icons/hi'

/* eslint-disable @next/next/no-img-element */
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 p-5">
        <div className="text-2xl font-semibold">
          <p>صفحه مورد نظر یافت نشد!!!</p>
        </div>
        <div>
          <button className="flex items-center gap-3 rounded-md bg-purple text-white px-7 py-1">
            <Link href={'/'}>بازگشت به صفحه نخست</Link>
            <HiHome size={30} />
          </button>
        </div>
        <div className="w-1/2">
          <img src="/404/Lovepik_com-400217866-404-page-error.png" alt="" />
        </div>
      </div>
    </>
  )
}
