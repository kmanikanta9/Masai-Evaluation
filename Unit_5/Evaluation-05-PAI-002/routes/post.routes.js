const express=require('express')
const { authmiddleware } = require('../middlewares/authmiddleware')
const { posts, getPosts, getPostById, deletePost } = require('../controllers/postController')
const { moderatorMiddleware } = require('../middlewares/moderatemiddleware')

const postRouter=express.Router()

postRouter.post('/posts',authmiddleware,posts)

postRouter.get('/posts',getPosts)

postRouter.get('/posts/:id',getPostById) 

postRouter.delete('/posts/:id',moderatorMiddleware,deletePost)

module.exports=postRouter