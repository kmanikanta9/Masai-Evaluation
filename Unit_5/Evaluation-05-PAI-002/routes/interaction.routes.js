const express=require("express")
const { authmiddleware } = require("../middlewares/authmiddleware")
const { comments, upvotes } = require("../controllers/interactionController")

const intractionRouter=express.Router()

intractionRouter.post('/interact', authmiddleware,comments)

intractionRouter.get('/interact',authmiddleware, upvotes)

module.exports=intractionRouter