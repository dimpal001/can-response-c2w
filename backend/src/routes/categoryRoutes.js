import express from 'express'
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js'

const router = express.Router()

router.get('/', getCategories)
router.post('/', createCategory)
router.patch('/', updateCategory)
router.delete('/', deleteCategory)

export default router
