'use client'

import axios from 'axios'
import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { baseUrl } from '../components/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log('Its ')
    const token = Cookies.get('auth_token')
    console.log(token)
    if (token) {
      try {
        const decoded = jwtDecode(token)
        console.log(decoded)
        setUser({
          id: decoded.id,
          email: decoded.email,
          name: decoded.name,
          role: decoded.role,
        })
      } catch (err) {
        console.error('Invalid token:', err)
        Cookies.remove('auth_token')
      }
    }
  }, [])

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/auth`,
        { email, password },
        {
          withCredentials: true,
        }
      )
      Cookies.set('auth_token', response.data.token, { expires: 1 })
      const token = Cookies.get('auth_token')
      if (token) {
        const decoded = jwtDecode(token)
        setUser({
          id: decoded.id,
          email: decoded.email,
          name: decoded.name,
          role: decoded.role,
        })
      }

      return response.data
    } catch (err) {
      console.error('Login error:', err)
      throw err.response?.data || { error: 'Login failed' }
    }
  }

  const logout = () => {
    Cookies.remove('auth_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
