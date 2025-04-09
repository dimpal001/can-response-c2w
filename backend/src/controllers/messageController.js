import { PrismaClient as MainPrismaClient } from '@prisma/client'
import { PrismaClient as AuthPrismaClient } from '../auth/generated/client/index.js'

const prisma = new MainPrismaClient()
const authPrisma = new AuthPrismaClient()

export const createMessage = async (request, response) => {
  const { message, categoryId, userId } = request.body

  if (!message || !categoryId || !userId) {
    return response.status(400).json({ error: 'All fields are required' })
  }

  try {
    const user = await authPrisma.user.findUnique({ where: { id: userId } })
    if (!user) return response.status(404).json({ error: 'User not found' })

    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    })
    if (!category)
      return response.status(404).json({ error: 'Category not found' })

    const newMessage = await prisma.message.create({
      data: {
        message,
        categoryId,
        userId,
        status: user.role === 'ADMIN' ? 'APPROVED' : 'PENDING',
      },
    })

    response.status(201).json({
      newMessage,
      message:
        user.role === 'ADMIN'
          ? 'New message created successfully'
          : 'New message created successfully! Wait for approval',
    })
  } catch (error) {
    console.error('Create Message Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const updateMessage = async (request, response) => {
  const { message, id, categoryId } = request.body

  try {
    const updated = await prisma.message.update({
      where: { id },
      data: { message, categoryId },
    })

    console.log(updated.categoryId)

    response
      .status(200)
      .json({ updated, message: 'The selected message has been updated' })
  } catch (error) {
    console.error('Update Message Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteMessage = async (request, response) => {
  const { id } = request.query

  try {
    await prisma.message.delete({ where: { id } })
    response.status(200).json({ message: 'Message deleted successfully' })
  } catch (error) {
    console.error('Delete Message Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const getAllMessages = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = '',
    categoryId = '',
    type = '',
  } = req.query

  try {
    const filters = {
      AND: [
        type === 'approved' && {
          status: 'APPROVED',
        },
        search
          ? {
              message: {
                contains: search,
              },
            }
          : undefined,
        categoryId
          ? {
              categoryId,
            }
          : undefined,
      ].filter(Boolean),
    }

    const totalMessages = await prisma.message.count({
      where: filters,
    })

    const messages = await prisma.message.findMany({
      where: filters,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit),
    })

    return res.status(200).json({ messages, totalMessages })
  } catch (error) {
    console.error('Get All Messages Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getMessagesByCategoryId = async (request, response) => {
  const { categoryId } = request.query

  try {
    const messages = await prisma.message.findMany({
      where: { categoryId },
      orderBy: { createdAt: 'desc' },
    })
    response.status(200).json({ messages })
  } catch (error) {
    console.error('Get Messages by Category Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const getMessagesByUserId = async (request, response) => {
  const { userId } = request.query

  try {
    const user = await authPrisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    })

    if (!user) {
      return response.status(404).json({ error: 'User not found' })
    }

    const messages = await prisma.message.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    })

    response.status(200).json({
      user,
      messages,
    })
  } catch (error) {
    console.error('Get Messages by User Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const updateMessageStatus = async (request, response) => {
  const { id, status } = request.body

  try {
    const approved = await prisma.message.update({
      where: { id },
      data: { status: status || 'PENDING' },
    })

    response.status(200).json({
      approved,
      message: `The selected message status has been updated`,
    })
  } catch (error) {
    console.error('Approve Message Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const getDashboardData = async (request, response) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { message: true },
        },
      },
    })

    const messages = await prisma.message.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        category: true,
      },
    })

    const [approvedCount, pendingCount, totalCategories] = await Promise.all([
      prisma.message.count({ where: { status: 'APPROVED' } }),
      prisma.message.count({ where: { status: 'PENDING' } }),
      prisma.category.count(),
    ])

    return response.status(200).json({
      summary: {
        totalCategories,
        approvedCount,
        pendingCount,
      },
      categories: categories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        messageCount: cat._count.message,
      })),
      messages: messages.map((msg) => ({
        id: msg.id,
        categoryName: msg.category.name,
        message: msg.message,
        status: msg.status,
        createdAt: msg.createdAt,
      })),
    })
  } catch (error) {
    console.error('Approve Message Error:', error)
    response.status(500).json({ error: 'Internal server error' })
  }
}
