'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export default function ProtectedRoute({ children }) {
  const { user, setUser } = useAuth()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setIsClient(true)
    const token = Cookies.get('auth_token')

    if (!token) {
      router.replace('/login')
      return
    }

    if (!user) {
      try {
        const decoded = jwtDecode(token)
        setUser({
          id: decoded.userId,
          email: decoded.email,
          name: decoded.firstName + ' ' + decoded.lastName,
          role: decoded.role,
        })
      } catch (err) {
        console.log(err)
        Cookies.remove('auth_token')
        router.replace('/login')
        return
      }
    }

    setLoading(false)
  }, [user, setUser, router])

  if (!isClient || loading) {
    return (
      <div className='w-screen flex items-center justify-center h-screen overflow-hidden'>
        <LoaderCircle className='animate-spin w-9 h-9 text-green-500' />
      </div>
    )
  }

  return children
}
