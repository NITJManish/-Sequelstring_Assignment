import User from "../model/user.js";
import jwt from "jsonwebtoken";
import Document from "../model/document.js"


export const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User registered successfully", user }); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message }); 
    }
};

export const login=async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        res.status(401).json({message:"user not found"});
    }
    const token=jwt.sign({id:user._id,role:user.role},process.env.SECRETKEY,{expiresIn:'1h'});
    res.status(200).json({
        success:true,
        token:token,
    });
}

export const Upload=async (req,res)=>{
  try{
    const {title,content}=req.body;
  const document=await Document.create({
    title,
    content,
  });
  res.status(201).json({message:"uploaded",document});
  }catch(error){
    console.log(error)
  res.status(500).json({message:"error"});

  }

}

export const approveBy=async (req,res)=>{
try{
    const document=await Document.findById(req.params.id);
    if(!document){
      res.status(401).json({message:"Document not found"});
  }
  
  document.status='approved';
  await document.save();
  res.status(201).json({message:"docuement approved"});
}catch(err){
    console.log(err);
    res.status(500).json({message:"Document not approved"});
}


}