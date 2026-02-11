import express from 'express'
import { ENV } from './lib/env.js'
const app = express()
app.get('/health',(req,res)=>{
    res.status(200).json({message:"success from api health"})
})
app.get('/book',(req,res)=>{
    res.status(200).json({message:"success from api book"})
})
app.listen(ENV.PORT,()=>{
    console.log('server is running on the port:',ENV.PORT);
    
})