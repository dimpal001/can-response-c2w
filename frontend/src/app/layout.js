'use client'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SnackbarProvider } from 'notistack'
import { AuthProvider } from './context/AuthContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SnackbarProvider>
          <AuthProvider>{children}</AuthProvider>
        </SnackbarProvider>
      </body>
    </html>
  )
}
