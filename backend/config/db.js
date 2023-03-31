import  mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URI , {
            useUnifiedTopology: true,
            useNewUrlParser:true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;