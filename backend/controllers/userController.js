import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Product from '../models/userModel.js';


// Auth the user and grt token
// POST/api/users/login
//public route

const authUser = AsyncHandler(async(req , res) => {
    const {email , password} = req.body;
    res.send({email , password});
    const user= await User.findOne({email:email});
    if(user && ( await user.matchPassword(password))){
       res.json({
           _id: user._id,
           name:user.name,
           email:user.email,
           isAdmin:user.isAdmin,
           token:null
       })
    }else{
        res.status(401)
        throw new Error ('Invalid email or password')
    }

})

export {authUser};