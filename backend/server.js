import express from 'express';
const app = express();
import dontenv from 'dotenv';
import products from './data/products.js'
import mongoose from 'mongoose';

dontenv.config();

//connecting with mongo
const dbUrl = process.env.DB_URL
//'mongodb://localhost:27017/amazon'
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
    console.log("connection open");
  }

app.get('/', (req , res)=>{
    res.send("APi is running...");
})
app.get('/api/products', (req , res)=>{
    res.json(products);
})
app.get('/api/products/:id', (req , res)=>{
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`listening at port ${PORT}`));