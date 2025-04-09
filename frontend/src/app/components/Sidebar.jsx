'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Folder, MessageSquare, LogOut } from 'lucide-react'
import clsx from 'clsx'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/categories', icon: Folder, label: 'Categories' },
  { href: '/messages', icon: MessageSquare, label: 'Messages' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <aside className='w-64 bg-white border-r shadow-sm min-h-screen'>
      <div className='p-4 text-xl font-bold'>Admin Panel</div>
      <nav className='px-4 space-y-2 '>
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
                isActive
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <Icon className={clsx('w-5 h-5', isActive && 'text-white')} />
              {label}
            </Link>
          )
        })}

        <button
          onClick={() => logout()}
          className='flex w-full items-center gap-3 px-3 py-2 text-red-500 rounded-md hover:bg-red-50'
        >
          <LogOut className='w-5 h-5' />
          Logout
        </button>
      </nav>
    </aside>
  )
}
