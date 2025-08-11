

const mongoose = require('mongoose')


const gameSchema = new mongoose.Schema({
    title:{type:String,required:true},
    genre:{type:String,enum:['RPG','Action','Adventure','Strategy','Sports']},
    releaseDate:{type:Date,Date:Date.now},
    publisher:{type:mongoose.Schema.Types.ObjectId, ref:"Publish"}

})

const GameModel = mongoose.model("Games",gameSchema)


module.exports = GameModel