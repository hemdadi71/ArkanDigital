import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Admin() {
  return (
    <>
      <div className="h-[100vh] bg-[#262C34] w-[25%] text-white flex flex-col gap-2 p-5">
        <div>
          <p className="text-2xl">پنل مدیریت فروشگاه</p>
        </div>
        <Link href="/">بازگشت به سایت</Link>
      </div>
    </>
  )
}

export default Admin
