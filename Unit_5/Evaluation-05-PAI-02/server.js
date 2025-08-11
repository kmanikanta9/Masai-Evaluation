

const express = require('express')
const connectToDB = require('./configs/video.configs')
const gameRouter = require('./routes/game.routes')
const publishRouter = require('./routes/publish.routes')
const relationShipRouter = require('./routes/relationship.routes')
const { logerMiddleware } = require('./middlewares/loggerMiddleware')
const app = express()
app.use(express.json())
connectToDB()
app.use(logerMiddleware)
app.get('/test',(req,res)=>{
    res.status(200).json("This is the test Route.")
})

app.use('/api/publishers',publishRouter)
app.use('/api/games',gameRouter)
app.use('/api/publishers',relationShipRouter)
app.use((req,res)=>{
    res.status(404).json({msg:"404 Not Found."})
})

app.listen(3000,()=>{
    console.log("Server started the port 3000.")
})