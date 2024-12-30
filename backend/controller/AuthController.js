import user from "../model/user.js"
import jwt from "jsonwebtoken";


export const register=async (req,res)=>{
    
    try{
        const user=await user.create(req.body);
    const users=user.save();
    res.status(201).json({message:"user register"});
    }catch(error){
        res.status(500).json({error:error});
    }
}

export const login=async (req,res)=>{
    const {email,password}=req.body;
    const user=await user.findOne({email});
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
    const {title,content}=re.body;
  const document=await Document.create({
    title,
    content,
  });
  res.status(201).json({message:"uploaded"});
  }catch(error){
  res.status(500).json({message:"error"});

  }

}

export const approveBy=async (req,res)=>{
try{
    const document=await Document.findById(req.params.id);
    if(!document){
      res.status(401).json({message:"Document not found"});
  }
  
  document.status='Approved';
  await document.save();
  res.status(201).json({message:"docuement approved"});
}catch(err){
    res.status(500).json({message:"Document not approved"});
}


}