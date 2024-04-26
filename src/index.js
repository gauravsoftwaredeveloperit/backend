//require('dotenv').config({path: './env'})




// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv"

 import connectDB from "./db/index.js ";


dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running port : ${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log("MONGO db connection failed !!!!",err);
})

















/*

import express from "express"
const app=express()
(async ()=>{
    try {
       await  mongoose.connect('&{process.env.MONGODB_URI}/&{DB_NAME}') 
       app.on("error",()=>{
        console.log("ERROR",error);
        throw error
       }) 

       app.listen(process.env.PORT,()=>{
        console.log('App is listening on port &{process.env.PORT}');
       })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }

})()
*/