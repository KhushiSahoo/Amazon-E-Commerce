import express from 'express';
import {getProducts , getProductById , createProductReview} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();


// fetch all products
// GET/api/products
//public route


router.get('/', getProducts)

//fetch single product  
// GET/api/products/:id
//public
router.get('/:id' , getProductById) ;
router.post('/:id/reviews' , protect , createProductReview)


export default router;