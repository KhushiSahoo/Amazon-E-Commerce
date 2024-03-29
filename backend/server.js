import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import {notFound , errorHandler} from './middleware/errorMiddleware.js';
import cors from 'cors';
import morgan from 'morgan'


dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
app.use(express.json())
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.get('/', (req , res)=>{
    res.send("APi is running...");
})

app.use('/api/products' , productRoutes);
app.use('/api/users' , userRoutes);
app.use('/api/orders' , orderRoutes);

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`listening at port ${PORT}`));