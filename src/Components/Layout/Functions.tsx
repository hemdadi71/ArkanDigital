import AdminHeader from '@/Components/AdminHeader/AdminHeader'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import LoginFirst from '@/Components/LoginFirst/LoginFirst'
import ProfileHeader from '@/Components/ProfileHeader/ProfileHeader'
import ProfileSidebar from '@/Components/ProfileSidebar/ProfileSidebar'
import { setRole } from '@/Redux/Reducers/Role'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function LayoutHandler(children: any) {
  const router = useRouter()
  const roleState = useSelector((state: any) => state.role)
  const { role } = roleState
  const dispatch = useDispatch()
  useEffect(() => {
    const data = Cookies.get('token')
    if (data) {
      const ObjData = JSON.parse(data)
      dispatch(setRole(ObjData.user.role))
    }
  }, [])
  if (router.pathname.includes('admin') && role === 'admin')
    return (
      <main>
        <AdminHeader />
        <article>{children}</article>
      </main>
    )
  if (router.pathname.includes('profile') && role === 'user')
    return (
      <main className="flex">
        <ProfileSidebar />
        <div className="flex-1 full-width">
          <ProfileHeader />
          <article>{children}</article>
        </div>
      </main>
    )
  if (router.pathname.includes('register') && role === '')
    return (
      <main className="flex w-[100vw] h-[100vh]">
        <article className='w-full h-full'>{children}</article>
      </main>
    )
  if (
    !router.pathname.includes('/profile') &&
    !router.pathname.includes('/admin')
  )
    return (
      <main>
        <Header />
        <article>{children}</article>
        <Footer />
      </main>
    )
  if (!role) return <LoginFirst />
}
