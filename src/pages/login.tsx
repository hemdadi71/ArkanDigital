
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { cookies } from 'next/dist/client/components/headers'
import { redirect } from 'next/navigation';
function Products() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const data = {
      username,
      password,
    }
    axios
      .post('/api/auth/signin', data)
      .then(res => {
        console.log(res.data.user.role)
        localStorage.setItem('user', res.data.user.role)
        res.data.user.role === 'admin'
          ? router.push('/admin')
          : router.push('/profile')
      })
      .catch(err => console.log(err.message))
  }
  return (
    <>
      <div>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-2 bg-gray-200 p-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Username</label>
            <input
              id="username"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button type="submit" className="bg-blue-200 mt-3">
            Sign In
          </button>
        </form>
      </div>
    </>
  )
}

export default Products
