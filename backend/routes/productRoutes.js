import express from 'express';
import {
  getProducts,
  getProductById,
  createProductReview,
  getTopProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect,admin } from '../middleware/authMiddleware.js';


const router = express.Router();


// fetch all products
// GET/api/products
//public route


//router.get('/', getProducts)
router.get('/top' , getTopProducts);

//fetch single product  
// GET/api/products/:id
//public
//router.get('/:id' , getProductById) ;
//router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);
router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
  
router.post('/:id/reviews' , protect , createProductReview)


export default router;