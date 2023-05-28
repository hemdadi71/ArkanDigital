import { useRouter } from 'next/router'
import React from 'react'

function Profile() {
  const router = useRouter()
  return (
    <>
      <div>Profile</div>
      <button onClick={() => router.push('/login')}>go to login</button>
    </>
  )
}

export default Profile
