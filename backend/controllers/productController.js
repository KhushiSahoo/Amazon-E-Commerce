import AsyncHandler from "express-async-handler";
import Product from '../models/productModel.js';


// fetch all products
// GET/api/products
//public route

const getProducts= AsyncHandler(async(req , res) => {
    const products = await Product.find({})
    res.json(products);
})

//fetch single product  
// GET/api/products/:id
//public

const getProductById= AsyncHandler(async(req , res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: "Product Not Found"});
    }
})

export {
    getProducts , 
    getProductById
}