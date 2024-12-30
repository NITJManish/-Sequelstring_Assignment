import mongoose, { mongo } from "mongoose";

const documentSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    content:{
        type:String,
        require:true,
    },
    
    status:{
        type:String,
        enum:['Pending','approved'],
        default:'Pending',
    },
    userUpload:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
})

export default mongoose.model("Document",documentSchema);