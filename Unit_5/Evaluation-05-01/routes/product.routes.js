
const express = require('express')
const ProductModel = require('../models/product.model')

const ProductRouter = express.Router()

ProductRouter.get('/',async(req,res)=>{
    try {
        let products = await ProductModel.find({})
        res.status(200).json({msg:"Product List",products})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong"})
    }
})


ProductRouter.post('/add-product',async(req,res)=>{
    let product = await ProductModel.create(req.body)
    res.status(201).json({msg:"Product added",product})
})


ProductRouter.patch('/update-product/:productId',async(req,res)=>{
    const {productId} = req.params;
    let product = await ProductModel.findById(productId)
    if(!product){
        res.status(404).json({msg:"Product not found"})
    }
    else{
        await ProductModel.findByIdAndUpdate(productId,req.body)
        res.status(201).json({msg:"Product Updated"})
    }
})

ProductRouter.delete('/delete-product/:productId',async(req,res)=>{
    try {
        const {productId} = req.params;
        let product = await ProductModel.findById(productId)
        if(!product){
            res.status(404).json({msg:"Product not found"})
        }
        else{
            await ProductModel.findByIdAndDelete(productId)
            res.status(200).json({msg:"Product Deleted"})
        }
    } catch (error) {
        res.status(500).json({msg:"Something went wrong"})
    }
})


module.exports = ProductRouter