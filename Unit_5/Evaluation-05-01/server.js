

const express = require('express')
const connectToDB = require('./configs/mongodb.config')
const ProductRouter = require('./routes/product.routes')
const UserRouter = require('./routes/user.routes')
const OrderRouter = require('./routes/order.routes')


connectToDB()

const app = express()
app.use('/products',ProductRouter)

app.use('/users',UserRouter)

app.use('/orders',OrderRouter)

app.listen(4000,()=>{
    console.log("Server started")
})