import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(
  cors({
    origin: 'https://can-response.clothes2wear.com',
    // origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(cookieParser())

app.use(helmet())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/message', messageRoutes)

app.get('/', (req, res) => {
  res.send('API is up and running!')
})

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
