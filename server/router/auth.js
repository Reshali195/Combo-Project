const jwt=require("jsonwebtoken");
const express=require('express');
const router=express.Router();
const bcrypt=require("bcryptjs");

require('../db/coon');
const User=require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send(`Router world you are fine`);
})

// router.post('/register', (req,res)=>{

//  const {name,email,phone,work,password,cpassword}=req.body;
 
//  if(!name || !email || !phone || !work || !password || !cpassword){
//      return res.status(422).json({error:'gbhbhbh'})
//  }

//  User.findOne({email:email})
//  .then((userExist)=>{
//      if(userExist){
//         return res.status(422).json({error:'Email already exist'});
//      }

//      const user= new User({name,email,phone,work,password,cpassword});

//      user.save().then(()=>{
//          res.status(201).json({message:"user registered sucessfully"});
//      }).catch((err)=>{
//          console.log(err);
//          res.status(500).json({error:"filled to registered"})
//      })

//  }).catch(err=>{console.log(err)}); 
  

// })
router.get('/mini',(req,res)=>{
    res.sendFile(__dirname+"hello.html");
})


router.post('/register',async (req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:'please fill every field'});
    }

    try{

       const userExist=await User.findOne({email:email})
       
        if(userExist){
           return res.status(422).json({error:'Email already exist'});
        }else if(password != cpassword){
            return res.status(422).json({error:'Password are not matching'});
        }else{
            const user= new User({name,email,phone,work,password,cpassword});
            //yaha pe
            await user.save();

            res.status(201).json({message:"user registered sucessfully"});
        }

        

    }catch(err){
        console.log(err);
    }
      
})
   
//login route

router.post('/signin',async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(422).json({error:'please fill every field'})
        }

        const userLogin=await User.findOne({email:email});
        
        if(userLogin){

            const isMatch=await bcrypt.compare(password,userLogin.password);
            
            const token=await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });




            if(!isMatch){
                res.status(400).json({message:"Invalid Credientials"})
            }else{
                res.json({message:"user signin sucessfully"})
            }
     
        }else{
            res.status(400).json({message:"Invalid Credientials"});
        }

       
       
    }catch(err){
        console.log(err);
    }
})


module.exports=router;