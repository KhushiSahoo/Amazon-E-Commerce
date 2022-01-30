import express from 'express';
import {addOrderItems , getOrderById , updateOrdertoPaid , createOrderRazorpay , getMyOrders } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();
router.post('/', protect  , addOrderItems);
router.get('/myorders' , protect , getMyOrders);
router.get('/get-razorpay-key', (req, res) => {
    console.log(process.env.RAZORPAY_KEY_ID);
    res.json({ key: process.env.RAZORPAY_KEY_ID });
  });
router.get('/:id' , protect , getOrderById);

router.post("/:id/create-order",  createOrderRazorpay);
router.put('/:id/pay' , protect , updateOrdertoPaid);




export default router;