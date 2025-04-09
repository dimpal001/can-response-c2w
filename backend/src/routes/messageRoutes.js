import express from 'express'
import {
  createMessage,
  updateMessage,
  getAllMessages,
  getMessagesByCategoryId,
  getMessagesByUserId,
  deleteMessage,
  updateMessageStatus,
  getDashboardData,
} from '../controllers/messageController.js'

const router = express.Router()

router.post('/', createMessage)
router.put('/', updateMessage)
router.get('/', getAllMessages)
router.get('/get-dashboard-data', getDashboardData)
router.get('/category-messages', getMessagesByCategoryId)
router.get('/user-messages', getMessagesByUserId)
router.delete('/', deleteMessage)
router.patch('/', updateMessageStatus)

export default router
