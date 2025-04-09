'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import DashboardLayout from '../components/DashboardLayout'
import { Eye, Check, X, Trash2, Edit } from 'lucide-react'
import { baseUrl } from '../components/api'
import { enqueueSnackbar } from 'notistack'
import { useAuth } from '../context/AuthContext'

const ManageMessagesPage = () => {
  const { user } = useAuth()

  const [messages, setMessages] = useState([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [page, setPage] = useState(1)
  const [totalMessages, setTotalMessages] = useState(0)
  const [limit] = useState(10)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentMessageId, setCurrentMessageId] = useState(null)
  const [messageText, setMessageText] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')

  const [deleteConfirmId, setDeleteConfirmId] = useState(null)

  useEffect(() => {
    document.title = 'Manage Messages | Clothes2Wear Can Response Portal'
    fetchMessages()
  }, [page, categoryFilter])

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMessages()
    }, 500)

    return () => clearTimeout(delayDebounce)
  }, [search])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/message`, {
        params: {
          page,
          search,
          categoryId: categoryFilter,
          type: user && user.role === 'ADMIN' ? 'all' : 'approved',
        },
      })
      setMessages(response.data.messages)
      setTotalMessages(response.data.totalMessages)
    } catch (error) {
      enqueueSnackbar('Failed to fetch messages', { variant: 'error' })
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/category`)
      setCategories(response.data.categories)
    } catch (error) {
      enqueueSnackbar('Failed to fetch categories', { variant: 'error' })
    }
  }

  const handleAction = async (id, action) => {
    try {
      const response = await axios.patch(`${baseUrl}/api/message`, {
        id,
        status: action,
      })
      enqueueSnackbar(response.data.message || 'Done', { variant: 'success' })
      fetchMessages()
    } catch (error) {
      enqueueSnackbar(error.response?.data?.error || 'Failed', {
        variant: 'error',
      })
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/api/message?id=${deleteConfirmId}`)
      enqueueSnackbar('Message deleted', { variant: 'success' })
      setDeleteConfirmId(null)
      fetchMessages()
    } catch (error) {
      enqueueSnackbar(error.response?.data?.error || 'Failed to delete', {
        variant: 'error',
      })
    }
  }

  const openAddDialog = () => {
    setEditMode(false)
    setMessageText('')
    setSelectedCategoryId('')
    setCurrentMessageId(null)
    setDialogOpen(true)
  }

  const openEditDialog = (id, content, categoryId) => {
    setEditMode(true)
    setCurrentMessageId(id)
    setMessageText(content)
    setSelectedCategoryId(categoryId)
    setDialogOpen(true)
  }

  const handleSubmitMessage = async () => {
    try {
      if (editMode) {
        await axios.put(`${baseUrl}/api/message`, {
          id: currentMessageId,
          message: messageText,
          categoryId: selectedCategoryId,
        })
        enqueueSnackbar('Message updated', { variant: 'success' })
      } else {
        const response = await axios.post(`${baseUrl}/api/message`, {
          message: messageText,
          categoryId: selectedCategoryId,
          userId: user?.id || '451',
        })
        enqueueSnackbar(response.data.message || 'Message added', {
          variant: 'success',
          autoHideDuration: 5000,
        })
      }
      setDialogOpen(false)
      fetchMessages()
    } catch (error) {
      enqueueSnackbar(error.response?.data?.error || 'Failed to save message', {
        variant: 'error',
      })
    }
  }

  return (
    <DashboardLayout>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-semibold'>Manage Messages</h1>
        <Button onClick={openAddDialog}>Add Message</Button>
      </div>

      <div className='flex gap-4 mb-4'>
        <Input
          className={'w-[300px]'}
          placeholder='Search messages...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={categoryFilter}
          onValueChange={(val) => setCategoryFilter(val)}
        >
          <SelectTrigger>
            <SelectValue placeholder='Filter by Category' />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {messages.map((msg) => (
          <Card key={msg.id} className='flex flex-col gap-2'>
            <CardHeader>
              <Dialog>
                <DialogTrigger asChild>
                  <CardTitle className='text-sm font-medium'>
                    {msg.message.slice(0, 300)}
                    {msg.message.length > 300 && '...'}
                  </CardTitle>
                </DialogTrigger>
                <DialogContent
                  style={{ scrollbarWidth: 'none' }}
                  className='sm:max-w-[950px] sm:max-h-[500px] overflow-scroll'
                >
                  {msg.message.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent className='text-xs text-muted-foreground space-y-2'>
              <div className='flex justify-between items-end'>
                <div>
                  <div>
                    Category: <strong>{msg.category?.name}</strong>
                  </div>
                  <div>
                    Date:{' '}
                    <strong>{format(new Date(msg.createdAt), 'PPP p')}</strong>
                  </div>
                  <div>
                    Status:{' '}
                    <span
                      className={`font-semibold ${
                        msg.status === 'APPROVED'
                          ? 'text-green-600'
                          : msg.status === 'PENDING'
                          ? 'text-yellow-500'
                          : msg.status === 'REJECTED'
                          ? 'text-red-600'
                          : ''
                      }`}
                    >
                      {msg.status}
                    </span>
                  </div>
                </div>
                <div className='flex gap-2 pt-2 flex-wrap'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant='outline'>
                        <Eye className='w-4 h-4' />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      style={{ scrollbarWidth: 'none' }}
                      className='sm:max-w-[950px] sm:max-h-[500px] overflow-scroll'
                    >
                      {msg.message.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </DialogContent>
                  </Dialog>
                  {/* Edit */}
                  <Button
                    variant='outline'
                    className={`${user && user.role !== 'ADMIN' && 'hidden'}`}
                    size='icon'
                    onClick={() =>
                      openEditDialog(msg.id, msg.message, msg.categoryId)
                    }
                  >
                    <Edit className='w-4 h-4' />
                  </Button>

                  {/* Approve */}
                  <Button
                    variant='outline'
                    className={`${
                      user && user.role !== 'ADMIN' && 'hidden'
                    } border-green-600`}
                    size='icon'
                    onClick={() => handleAction(msg.id, 'APPROVED')}
                  >
                    <Check className='w-4 h-4 text-green-600' />
                  </Button>

                  {/* Reject */}
                  <Button
                    className={`${
                      user && user.role !== 'ADMIN' && 'hidden'
                    } border-red-600`}
                    variant='outline'
                    size='icon'
                    onClick={() => handleAction(msg.id, 'REJECTED')}
                  >
                    <X className='w-4 h-4 text-red-600' />
                  </Button>

                  {/* Delete Confirmation Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className={`${
                          user && user.role !== 'ADMIN' && 'hidden'
                        }`}
                        variant='destructive'
                        size='icon'
                        onClick={() => setDeleteConfirmId(msg.id)}
                      >
                        <Trash2 className='w-4 h-4' />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Message</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this message?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className='flex justify-end gap-2'>
                        <DialogClose>
                          <Button variant='outline'>Cancel</Button>
                        </DialogClose>
                        <Button variant='destructive' onClick={handleDelete}>
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          style={{ scrollbarWidth: 'none' }}
          className='sm:max-w-[950px] sm:max-h-[500px] overflow-scroll'
        >
          <DialogTitle>
            {editMode ? 'Edit Message' : 'Add New Message'}
          </DialogTitle>
          <Textarea
            style={{ scrollbarWidth: 'none' }}
            className='sm:max-h-[300px]'
            rows={5}
            placeholder='Type message...'
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <Select
            value={selectedCategoryId}
            onValueChange={(val) => setSelectedCategoryId(val)}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select Category' />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button variant='outline' onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitMessage}>
              {editMode ? 'Save' : 'Add'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className='flex justify-center items-center mt-6 gap-4'>
        <Button
          variant='outline'
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <span className='text-sm'>Page {page}</span>
        <Button
          variant='outline'
          onClick={() => setPage((p) => p + 1)}
          disabled={page * limit >= totalMessages}
        >
          Next
        </Button>
      </div>
    </DashboardLayout>
  )
}

export default ManageMessagesPage
