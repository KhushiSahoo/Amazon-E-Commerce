import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },

})

userSchema.methods.matchPassword = async function (enteredPassord){
    return await bycrpt.compare(enteredPassord , this.password)
}

userSchema.pre('save' , async function(next){
    if(!this.Modified('password')){
        next();
    }
    const salt =await bycrypt.genSalt(10);
    this.password = await bycrpt.hash(this.password , salt)
})

const User = mongoose.model('User' , userSchema);
export default User;