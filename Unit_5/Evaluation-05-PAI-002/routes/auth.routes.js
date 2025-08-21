const express=require('express')
const { singup, login } = require('../controllers/auth.controllers')

const authRouter=express.Router()

authRouter.post('/register',singup)

authRouter.post('/login',login)


module.exports = authRouter