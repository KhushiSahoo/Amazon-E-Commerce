import express from 'express';
import AsyncHandler from "express-async-handler";
const router = express.Router();
import Product from '../models/productModel.js';

// fetch all products
// GET/api/products
//public route


router.get('/', AsyncHandler(async (req , res)=>{
    const products = await Product.find({})
    res.json(products);
}))

//fetch single product  
// GET/api/products/:id
//public
router.get('/:id',AsyncHandler(async(req , res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: "Product Not Found"});
    }
    
}))

export default router;