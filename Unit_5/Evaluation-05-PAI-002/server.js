

const express = require('express');
const connectToDB = require('./configs/mongodb');
const authRouter = require('./routes/auth.routes');
const { CustomMiddleware } = require('./middlewares/logger');
const postRouter = require('./routes/post.routes');
const intractionRouter = require('./routes/interaction.routes');
const analyticsRouter = require('./routes/analytics.routes');
const app = express()

app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 3000;

connectToDB()
app.use(CustomMiddleware)
app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)
app.use('/api/posts',intractionRouter)
app.use('/api/analytics',analyticsRouter)

app.get("/test",(req,res)=>{
    try{
        res.status(200).send({Msg:"server is running,this is test router"})
    }
    catch(err){
        res.status(400).send({Msg:"Somthing went wrong"})
    }
})

app.use((req,res)=>{
    try {
        res.status(404).json({message:"404 Route Not Found."})
    } catch (error) {
        res.status(500).json({message:"Something went wrong."})
    }
})
app.listen(PORT,()=>{
    console.log("server started at the",PORT)
})





