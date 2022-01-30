import AsyncHandler from "express-async-handler";
import Order from '../models/OrderModel.js';
import uniquId from 'uniqid';
import Razorpay from 'razorpay';
import crypto from 'crypto';


let orderId
// create new order
// POST/api/orders
//private route

const addOrderItems = AsyncHandler(async(req , res) => {
   const {orderItems ,
     shippingAddress ,
     paymentMethod ,
     itemsPrice ,
     taxPrice ,
     shippingPrice ,
     totalPrice}= req.body 
     if(orderItems && orderItems.length ===0){
        res.status(400);
        throw new Error('No order items')
        return
     }else{
         const order = new Order({
            orderItems ,
            user: req.user._id,
            shippingAddress ,
            paymentMethod ,
            itemsPrice ,
            taxPrice ,
            shippingPrice ,
            totalPrice   
         })
         const createdOrder = await order.save();
         res.status(201).json(createdOrder)
     }
})

// get order by id
// GET/api/ORDERS/:id
//private route

const getOrderById = AsyncHandler(async(req , res) => {
  const order = await Order.findById(req.params.id).populate('user' , 'name email')
  if(order){
     res.json(order);
  }else{
     res.status(404)
     throw new Error('Order not found')
  }
})

// update order to paid
// PUT/api/orders/:id/pay
//private route

const updateOrdertoPaid = AsyncHandler(async(req , res) => {
   const {amount ,razorpayPaymentId, razorpayOrderId, razorpaySignature  }=req.body;
   const order = await Order.findById(req.params.id);
   if(order){
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult={
         id:req.body.id,
         status : req.body.status,
         update_time: req.body.update_time,
         email_address: req.body.payer.email_address
      }
      
   if(razorpayOrderId && razorpayPaymentId){
      let body = razorpayOrderId + "|" + razorpayPaymentId;
      let expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
							.update(body.toString())
							.digest('hex');
      if(expectedSignature === razorpaySignature)   {
        order.razorpay={
        order_id: razorpayOrderId,
        payment_id: razorpayPaymentId,
        signature: razorpaySignature,
         }
      }            
   }   
   const updatedOrder = await order.save();
   res.json(updatedOrder) ;
   }else{
      res.status(404)
      throw new Error('Order not found')
   }
 })

 const createOrderRazorpay = async(request, response) => {
   try {
     const instance = (instance = new Razorpay({
       key_id: process.env.RAZORPAY_KEY_ID,
       key_secret: process.env.RAZORPAY_KEY_SECRET,
     }));
     console.log("Razorpay initialized");
    console.log(request.body);
     const options = {
       amount: 50000,
       currency: "INR",
       receipt: uniquId(),
     };
     const order =await  instance.orders.create(options);
     if (!order) return response.status(500).send("Some error occured");
    orderId = order.id,
    response.json(order);
   } catch (error) {
     response.send(error);
   }
 };
export {
    addOrderItems , getOrderById , updateOrdertoPaid , createOrderRazorpay
}