import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Admin() {
  const router = useRouter()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [])
  return (
    <>
      <div>admin</div>
      <button
        onClick={() => {
          router.push('/login')
          localStorage.removeItem('user')
        }}>
        go to login
      </button>
    </>
  )
}

export default Admin
