import mongoose from "mongoose";
const uri = "mongodb+srv://michael:Michaelani@cluster0.ee1y1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/chatanoni";

async function connectToDatabase(){
   try{
     mongoose.createConnection(uri)
    console.log("Connected To Db")
   }catch(err){
     console.log(err)
   }
}

export default connectToDatabase