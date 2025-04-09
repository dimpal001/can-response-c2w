'use client'

import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Pencil,
  Trash2,
  Plus,
  CalendarDays,
  MessageSquareText,
} from 'lucide-react'
import { format } from 'date-fns'
import axios from 'axios'
import { baseUrl } from '../components/api'
import { enqueueSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])

  const [newCategory, setNewCategory] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [deleteId, setDeleteId] = useState(null)

  const router = useRouter()
  const { user } = useAuth()

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/category`)
      setCategories(response.data.categories)
    } catch (error) {
      router.push('/dashboard')
    }
  }

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return
    try {
      const response = await axios.post(`${baseUrl}/api/category`, {
        name: newCategory.trim(),
      })

      enqueueSnackbar(response?.data?.message || 'Done', { variant: 'success' })

      setCategories([response.data.newCategory, ...categories])
      setNewCategory('')
    } catch (error) {
      enqueueSnackbar(error.response?.data?.error || 'Failed', {
        variant: 'error',
      })
    }
  }

  const handleEdit = (id, name) => {
    setEditingId(id)
    setEditValue(name)
  }

  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(`${baseUrl}/api/category`, {
        id: editingId,
        name: editValue,
      })
      enqueueSnackbar(response.data.message || 'Done', { variant: 'success' })
      setCategories(
        categories.map((cat) =>
          cat.id === editingId ? { ...cat, name: editValue } : cat
        )
      )
      setEditingId(null)
      setEditValue('')
    } catch (error) {
      enqueueSnackbar(error.response.data.error || 'Failed', {
        variant: 'error',
      })
    }
  }

  const handleDeleteConfirmed = async () => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/category?id=${deleteId}`
      )

      enqueueSnackbar(response?.data?.message || 'Done', { variant: 'success' })

      setCategories(categories.filter((cat) => cat.id !== deleteId))
      setDeleteId(null)
    } catch (error) {
      enqueueSnackbar(error?.response?.data?.error || 'Unable to handle task', {
        variant: 'error',
      })
    }
  }

  useEffect(() => {
    document.title = 'Manage Categories | Clothes2Wear Can Response Portal'
    fetchData()
  }, [])

  return (
    <DashboardLayout>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold mb-2'>Category Management</h1>
        <p className='text-muted-foreground text-sm'>
          View, add, edit, and delete categories.
        </p>
      </div>

      {user && user.role === 'ADMIN' && (
        <div className='flex gap-2 mb-6 max-w-md'>
          <Input
            placeholder='Enter category name'
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <Button onClick={handleAddCategory}>
            <Plus className='w-4 h-4 mr-2' /> Add
          </Button>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories.map((cat) => (
          <Card key={cat.id} className={'flex flex-col gap-1'}>
            <CardHeader>
              {editingId === cat.id ? (
                <Input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className='text-sm'
                />
              ) : (
                <CardTitle className='text-lg font-semibold'>
                  {cat?.name}
                </CardTitle>
              )}
            </CardHeader>
            <CardContent className='flex flex-col gap-2 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <MessageSquareText className='w-4 h-4' />
                <span>{cat?._count?.message} messages</span>
              </div>
              <div className='flex items-center gap-2'>
                <CalendarDays className='w-4 h-4' />
                <span>{format(cat.createdAt, 'PPP p')}</span>
              </div>
            </CardContent>
            {user && user.role === 'ADMIN' && (
              <div className='flex items-center justify-end gap-2 px-4 pt-2 mt-auto'>
                {editingId === cat.id ? (
                  <Button size='sm' onClick={handleSaveEdit}>
                    Save
                  </Button>
                ) : (
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() => handleEdit(cat.id, cat.name)}
                  >
                    <Pencil className='w-4 h-4' />
                  </Button>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant='destructive'
                      size='icon'
                      onClick={() => setDeleteId(cat.id)}
                    >
                      <Trash2 className='w-4 h-4' />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete Category</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this category? This
                        action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='flex justify-end gap-2'>
                      <DialogClose>
                        <Button
                          variant='outline'
                          onClick={() => setDeleteId(null)}
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        variant='destructive'
                        onClick={handleDeleteConfirmed}
                      >
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}

export default CategoriesPage
