

const mongoose = require('mongoose')

const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Failed to connect DB")
    }


}

module.exports = connectToDB;