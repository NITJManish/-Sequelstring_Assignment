import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    
    role:{
        type:String,
        enum:['RoleA','RoleB'],
        require:false,
    },
})

export default mongoose.model("User",userSchema);