let bodyParser = require("body-parser");
const dotenv=require("dotenv");
const express=require('express');
const app=express();




//db dotenv path
dotenv.config({path:'./config.env'});
require('./db/coon');
// const User=require('./model/userSchema')

app.use(express.json());
app.use(require('./router/auth')); //link router file



//port
const PORT=process.env.PORT;


//middleware
const middleware=(req,res,next)=>{
    console.log(`hello my middleware`);
    next();
}

// app.get('/',(req,res)=>{
//     res.send(`hello world you are fine`);
// })

app.get('/about',middleware,(req,res)=>{
    res.send(`hello world you are about`);
})
app.get('/contact',(req,res)=>{
    // res.cookie("test","goyal");
    res.send(`hello world you are contact`);
})
app.get('/signin',(req,res)=>{
    res.send(`hello world you are signin`);
})
app.get('/sigup',(req,res)=>{
    res.send(`hello world you are signup`);
})





 app.listen(PORT,()=>{
     console.log(`server is running at ${PORT} .........`)
 })