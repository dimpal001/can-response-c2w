'use client'

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquareText, FolderKanban, Clock } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'
import { baseUrl } from '../components/api'
import { format } from 'date-fns'

export default function DashboardPage() {
  const [categories, setCategories] = useState([])
  const [messages, setMessages] = useState([])
  const [summary, setSummary] = useState({
    totalCategories: 0,
    approvedCount: 0,
    pendingCount: 0,
  })

  useEffect(() => {
    document.title = 'Dashboard | Clothes2Wear Can Response Portal'

    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/message/get-dashboard-data`)
        const data = await res.json()

        setCategories(data.categories)
        setMessages(data.messages)
        setSummary(data.summary)
      } catch (err) {
        console.error('Failed to load dashboard data', err)
      }
    }

    fetchDashboardData()
  }, [])

  const statusColor = {
    APPROVED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <DashboardLayout>
      <h1 className='text-2xl font-bold mb-6'>Dashboard Overview</h1>

      {/* Category Summary */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
        <Card className={'bg-blue-600 text-white'}>
          <CardHeader className='flex items-center gap-3'>
            <FolderKanban className='w-6 h-6 text-primary' />
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted'>Total Categories</p>
            <p className='text-lg font-semibold'>{summary.totalCategories}</p>
          </CardContent>
        </Card>
        <Card className={'bg-yellow-600 text-white'}>
          <CardHeader className='flex items-center gap-3'>
            <FolderKanban className='w-6 h-6 text-primary' />
            <CardTitle>Pending Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted'>Total Messages</p>
            <p className='text-lg font-semibold'>{summary.pendingCount}</p>
          </CardContent>
        </Card>
        <Card className={'bg-green-600 text-white'}>
          <CardHeader className='flex items-center gap-3'>
            <FolderKanban className='w-6 h-6 text-primary' />
            <CardTitle>Approved Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted'>Total Messages</p>
            <p className='text-lg font-semibold'>{summary.approvedCount}</p>
          </CardContent>
        </Card>
      </div>

      <h2 className='text-xl font-semibold mb-4'>Recent Messages</h2>
      <div className='space-y-4'>
        {messages.map((msg) => (
          <Card key={msg.id}>
            <CardContent className='py-4 px-6'>
              <div className='flex items-start justify-between'>
                <div>
                  <div className='flex justify-between pb-2'>
                    <div className='flex items-center gap-2'>
                      <MessageSquareText className='w-4 h-4 text-muted-foreground' />
                      <span className='font-medium'>{msg.categoryName}</span>
                    </div>
                    <div className='text-right flex flex-row-reverse gap-5'>
                      <Badge className={statusColor[msg.status]}>
                        {msg.status}
                      </Badge>
                      <div className='text-xs text-muted-foreground flex items-center gap-1 justify-end'>
                        <Clock className='w-3 h-3' />
                        {format(new Date(msg.createdAt), 'PPP p')}
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>{msg.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
