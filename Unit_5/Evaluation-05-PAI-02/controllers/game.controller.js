const GameModel = require("../models/game.model")
const PublishModel = require("../models/publish.model")


const addgame = async(req,res)=>{
    // const {publishId} = req.params
    try {
        // let publish = await PublishModel.findById(publishId)
        // if(!publish){
        //     res.status(404).json({msg:"Publisher not found."})
        // }
        // else{

        // }
        let game = await GameModel.create(req.body)
        res.status(201).json({msg:"Game Added",game})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Something went wrong"})
    }
}

const allGames = async(req,res)=>{
    try {
        let game = await GameModel.find({})
        res.status(201).json({msg:" All gamers",game})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Something went wrong"})
    }
}


const gameById = async(req,res)=>{
    let {gameId} = req.params
    try {
        let game = await GameModel.findById(gameId)
        res.status(201).json({msg:"gameers Details By Id",gameDetails:game})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Something went wrong"})
    }
}

const updategames = async(req,res)=>{
    let {gameId} = req.params
    try {
        let game = await GameModel.findById(gameId)
        if(!game){
            res.status(404).json({msg:"game Not found"})
        }
        else{
            await GameModel.findByIdAndUpdate(gameId,req.body)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Something went wrong"})
    }
}

const deletegame = async(req,res)=>{
    let {gameId} = req.params
    try {
        let game = await GameModel.findById(gameId)
        if(!game){
            res.status(404).json({msg:"game Not found"})
        }
        else{
            await GameModel.findByIdAndDelete(gameId)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Something went wrong"})
    }
}


module.exports = {addgame,allGames,updategames,deletegame,gameById}