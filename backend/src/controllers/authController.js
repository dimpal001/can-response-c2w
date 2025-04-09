import { PrismaClient as AuthPrismaClient } from '../auth/generated/client/index.js'
import bcrypt from 'bcryptjs'
const { compare } = bcrypt
import jwt from 'jsonwebtoken'

const authPrisma = new AuthPrismaClient()

export const login = async (request, response) => {
  const { email, password } = request.body

  if (!email || !password) {
    return response
      .status(400)
      .json({ error: 'Email and password are required' })
  }

  try {
    const user = await authPrisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return response.status(401).json({ error: 'Invalid credentials' })
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch) {
      return response.status(401).json({ error: 'Invalid credentials' })
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.firstName + ' ' + user.lastName,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    response.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    })

    response.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    })
  } catch (error) {
    console.error('Login error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}
