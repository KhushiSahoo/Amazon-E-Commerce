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
    return await bcrypt.compare(enteredPassord , this.password)
}

userSchema.pre('save' , async function(next){
    console.log("pre save middleware got hit");
    if(!this.isModified('password')){
        console.log("no modification in password");
        next();
    }
    console.log("password modified detected");
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
    console.log("password encrypted");
})

const User = mongoose.model('User' , userSchema);
export default User;