import AsyncHandler from "express-async-handler";
import Order from '../models/OrderModel.js';


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



export {
    addOrderItems , getOrderById
}