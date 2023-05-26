import { useRouter } from 'next/router'
import React from 'react'

function profile() {
  const router = useRouter()
  return (
    <>
      <div>profile</div>
      <button onClick={() => router.push('/login')}>go to login</button>
    </>
  )
}

export default profile
