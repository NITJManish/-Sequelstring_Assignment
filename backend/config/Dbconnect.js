import mongoose from "mongoose";

export const DBconnect=()=>{
    
 
    try{
        mongoose.connect(process.env.DB_URL).then((con)=>{
            console.log(`database connect to ${con?.connection?.host}`);
        })
    }catch(err){
        console.log(err);
    }
}