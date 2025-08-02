const express = require("express");
const OrderModel = require("../models/order.model");


const OrderRouter = express.Router();
OrderRouter.get("/", async (req,res)=>{
    try{
        let orders = await OrderModel.find({}); 
        res.status(200).json({msg:"Orders List", orders})
    }catch(err){
        res.status(500).json({msg:"Something went wrong"})
    }
})



OrderRouter.post("/add-order", async (req,res)=>{
    let order = await OrderModel.create(req.body)
    res.status(201).json({msg:"Order Added", order});
})

OrderRouter.patch("/update-order/:orderId", async (req,res)=>{
     const {orderId} = req.params;
     let order = await OrderModel.findById(orderId);
     if(!order){
        res.status(404).json({msg:"Order Not Found"})
     }else{
        await OrderModel.findByIdAndUpdate(orderId, req.body)
        res.status(201).json({msg:"Order Updated"})
     }
})

OrderRouter.delete("/delete-order/:orderId", async (req,res)=>{
    try{
        const {orderId} = req.params;
    let order = await OrderModel.findById(orderId);
    if(!order){
       res.status(404).json({msg:"Order Not Found"})
    }else{
       await OrderModel.findByIdAndDelete(orderId)
       res.status(200).json({msg:"Order Deleted"})
    }
    }catch(err){
        res.status(500).json({msg:"Something went wrong"})
    }
})


module.exports = OrderRouter;