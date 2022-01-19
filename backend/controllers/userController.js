import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

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
           token:generateToken(user._id)
       })
    }else{
        res.status(401)
        throw new Error ('Invalid email or password')
    }

})
// register the user 
// POST/api/users
//public route

const registerUser = AsyncHandler(async(req , res) => {
    const {name , email , password} = req.body;
    res.send({email , password});
    const userExists= await User.findOne({email:email});
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name, 
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
           name:user.name,
           email:user.email,
           isAdmin:user.isAdmin,
           token:generateToken(user._id)
        })
    }else{
       res.status(400)
       throw new Error('Invalid User Data')
    }
})
// Get user profile
// GET/api/users/profile
//private route

const getUserProfile = AsyncHandler(async(req , res) => {
    const user= await User.findById(req.user._id);
    if(user){
        res.json({
            _id: user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })

    }else{
        res.status(404);
        throw new Error("user not found")
    }

})

export {authUser , getUserProfile , registerUser};