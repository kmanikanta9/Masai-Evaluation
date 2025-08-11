

const mongoose = require('mongoose')


const publishSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    location:String,
    yearEstablished:{type:Number,min:1950}

})

const PublishModel = mongoose.model("Publish",publishSchema)


module.exports = PublishModel