'use client'

import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MailIcon, LockIcon } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const result = await login(email, password)

    if (result?.user) {
      enqueueSnackbar('Login successful!', { variant: 'success' })
      router.push('/dashboard')
    } else {
      enqueueSnackbar(result?.error || 'Login failed. Please try again.', {
        variant: 'error',
      })
    }

    setLoading(false)
  }

  useEffect(() => {
    document.title = 'Login | Clothes2Wear Can Response Portal'
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center text-xl'>Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className='space-y-4'>
            <div>
              <label className='text-sm font-medium block mb-1'>Email</label>
              <div className='relative'>
                <MailIcon className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='email'
                  placeholder='Email'
                  className='pl-8'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className='text-sm font-medium block mb-1'>Password</label>
              <div className='relative'>
                <LockIcon className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='password'
                  placeholder='Password'
                  className='pl-8'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <p className='text-center text-sm text-muted-foreground mt-4'>
            Don&apos;t have an account?{' '}
            <a href='/register' className='text-blue-600 hover:underline'>
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
