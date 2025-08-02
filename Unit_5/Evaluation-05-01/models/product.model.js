
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    catergory:String,
    price:Number,
    instock:Boolean,
    
})

const ProductModel = mongoose.model("Product",productSchema);

module.exports = ProductModel;