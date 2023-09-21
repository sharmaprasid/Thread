import mongoose from "mongoose";
let isConnected=false;
export const DB=async()=>{
 mongoose.set('strictQuery',true);
 if(!process.env.MONGODB_URL) return console.log("Mongodb url not found")
 if(isConnected) return console.log("Already Connected to database")
 try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected=true
    console.log("Connected to database")
 } catch (error) {
    console.log(error)
 }
}