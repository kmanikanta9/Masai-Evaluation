const express=require("express")
const { moderatorMiddleware } = require("../middlewares/moderatemiddleware")
const { topActiveUsers, mostUpvotedPosts } = require("../controllers/analyticsController")

const analyticsRouter = express.Router()

analyticsRouter.get('/stats/topActiveUsers',moderatorMiddleware,topActiveUsers)
analyticsRouter.get('/stats/mostUpvotedPosts',moderatorMiddleware,mostUpvotedPosts)

module.exports=analyticsRouter