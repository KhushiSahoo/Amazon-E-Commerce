import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import AsyncHandler from 'express-async-handler';

const protect = AsyncHandler(async(req , res , next)=>{
    let token 
    if(req.headers.authorization && req.headers.authorization.startWith('Bearer'))
    {try{
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token , process.env.JWT_TOKEN);
      console.log(decoded);
      req.user = await User.findById(decoded.id).select('-password')
      next();
    }catch(error){
     console.error(error);
     res.status(401);
     throw new Error("Not Authorized , token failed")
    }
    }
    if(!token){
        res.status(401);
        throw new Error("Not Authorized , no token")

    }
})

export {protect}