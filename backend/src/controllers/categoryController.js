import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getCategories = async (request, response) => {
  const { search } = request.query
  try {
    const categories = await prisma.category.findMany({
      where: {
        name: {
          contains: search || '',
        },
      },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: {
            message: true,
          },
        },
      },
    })
    response.status(200).json({ categories })
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const createCategory = async (request, response) => {
  const { name } = request.body
  try {
    const existing = await prisma.category.findFirst({ where: { name } })
    if (existing) {
      return response.status(400).json({ error: 'Category already exists' })
    }

    const newCategory = await prisma.category.create({
      data: { name },
      include: {
        _count: {
          select: {
            message: true,
          },
        },
      },
    })
    response.status(201).json({ newCategory, message: 'Category created' })
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const updateCategory = async (request, response) => {
  const { name, id } = request.body
  try {
    await prisma.category.update({
      where: { id },
      data: { name },
    })
    response.status(200).json({ message: 'Category Updated' })
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteCategory = async (request, response) => {
  const { id } = request.query
  try {
    await prisma.category.delete({
      where: { id },
    })
    response.status(200).json({ message: 'Category deleted' })
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: 'Internal server error' })
  }
}
