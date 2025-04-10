'use client'

import React, { useEffect } from 'react'
import ProtectedRoute from './components/ProtectedRoutes'
import { useRouter } from 'next/navigation'
import { useAuth } from './context/AuthContext'

const page = () => {
  const router = useRouter()
  const { user } = useAuth()
  useEffect(() => {
    if (user) {
      router.replace('/dashboard')
    } else {
      router.push('/login')
    }
  }, [])

  return <></>
}

export default page
