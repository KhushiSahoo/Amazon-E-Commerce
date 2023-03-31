import mongoose from 'mongoose'
import dotenv from 'dotenv';
import users from  './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
//import connectDB from './config/db.js'
const DB_URI=""
dotenv.config();
console.log(DB_URI);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const importData = async () => {
    try{
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

     const createdUsers= await User.insertMany(users);
     const adminUser = createdUsers[0]._id;
     const sampleProducts = products.map(product =>{
        return {...product , user: adminUser}
    })
     console.log(adminUser);
     console.log(sampleProducts);
     await Product.insertMany(sampleProducts);
     console.log(products);
     await Product.insertMany(products);
     console.log("Data Imported");
     process.exit();

    }catch(error){
       console.error(`${error}`);
       process.exit(1);
    }
}
const destroyData = async () => {
    try{
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
     console.log("Data destroyed");
     process.exit();

    }catch(error){
       console.error(`${error}`);
       process.exit(1);
    }
}
importData();

/*if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData();
}
/*
//connecting with mongo
const dbUrl = process.env.DB_URL
//'mongodb://localhost:27017/amazon'
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl , { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connection open");
  }*/



/*User.insertMany(users)
 .then(res =>{
     console.log(res)
 })
 .catch(e =>{
     console.log(e)
 })

/* Product.insertMany(products)
 .then(res =>{
     console.log(res)
 })
 .catch(e =>{
     console.log(e)
 })*/