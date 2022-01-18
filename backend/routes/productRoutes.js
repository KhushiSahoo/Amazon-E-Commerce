import express from 'express';
import {getProducts , getProductById} from '../controllers/productController.js'



const router = express.Router();


// fetch all products
// GET/api/products
//public route


router.get('/', getProducts)

//fetch single product  
// GET/api/products/:id
//public
router.get('/:id' , getProductById) 

export default router;