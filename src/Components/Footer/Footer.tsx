import { useRouter } from 'next/router'
import React from 'react'

function Footer() {
  const router = useRouter()
  return (
    <>
      {router.pathname !== '/admin' && (
        <footer>
          <div>footer</div>
        </footer>
      )}
    </>
  )
}

export default Footer