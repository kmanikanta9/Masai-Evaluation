
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products:String,
    totalAmount:Number,
    
})

const OrderModel = mongoose.model("Orders",orderSchema);

module.exports = OrderModel;