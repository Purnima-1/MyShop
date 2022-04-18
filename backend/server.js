import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//import { protect } from './middleware/authMiddleware.js';
const app = express()
dotenv.config();
connectDB();

app.get('/', (req,res) => {
    res.json({'msg': "Hello"})
    })
app.use(express.json())
app.use('/api/products', productRoutes)    
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req,res) => 
res.send(process.env.PAYPAL_CLIENT_ID)
  )
app.use(notFound)
app.use(errorHandler)
//app.use(protect)
  


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

