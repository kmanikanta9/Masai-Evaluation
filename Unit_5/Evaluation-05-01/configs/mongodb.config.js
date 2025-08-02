

const mongoose = require('mongoose')

const connectToDB = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
        console.log("Connect To DB")
    } catch (error) {
        console.log("Err in connecting DB")
        console.log(err)
        
    }
}

module.exports =  connectToDB;