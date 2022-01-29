import express from 'express';
import {addOrderItems , getOrderById , updateOrdertoPaid} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();
router.post('/', protect  , addOrderItems);
router.get('/:id' , protect , getOrderById);
router.put('/:id/pay' , protect , updateOrdertoPaid);


export default router;