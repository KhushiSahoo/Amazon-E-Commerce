import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Auth the user and grt token
// POST/api/users/login
//public route

const authUser = AsyncHandler(async(req , res) => {
    const {email , password} = req.body;
    //res.send({email , password});
    const user= await User.findOne({email:email});
    console.log(user);
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
        throw new Error('Invalid email or password')
    }

})
// register the user 
// POST/api/users
//public route

const registerUser = AsyncHandler(async(req , res) => {
    const {name , email , password} = req.body;
    //res.send({email , password});
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
            isAdmin:user.isAdmin,
        })

    }else{
        res.status(404);
        throw new Error("user not found")
    }

})

// update user profile
// PUT/api/users/profile
//private route

const updateUserProfile = AsyncHandler(async(req , res) => {
    console.log("put route for update user");
    const user= await User.findById(req.user._id);
    console.log('user found put route')
    console.log(user);
    console.log(req.body);
    if(user){
      user.name = req.body.name || user.name
      user.email = req.body.email  || user.email
      if(req.body.password){
         user.password = req.body.password
      }
      console.log("updated user data");
      console.log(user);
      const updatedUser = await user.save();
      console.log("user saved...");
      res.json({
        _id: updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin:updatedUser.isAdmin,
        token:generateToken(updatedUser._id)
    })

    }else{
        res.status(404);
        throw new Error("user not found")
    }

})
// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = AsyncHandler(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    req.header("access-control-request-headers")
  );  
  const users = await User.find({})
  res.json(users)
})
// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin 

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {authUser , getUserProfile , registerUser , updateUserProfile , getUsers , deleteUser,getUserById,updateUser};