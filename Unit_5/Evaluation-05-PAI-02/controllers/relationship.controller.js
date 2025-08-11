const PublishModel = require("../models/publish.model");



const gamesByPublishers = async(req,res)=>{
    let {publisherId}= req.params;
    try {
        let publish = await PublishModel.find({_id:publisherId}).populate('publisher')
        res.status(200).json({msg:"All Games",games:publish})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Something went wrong"})
    }
}

module.exports  = gamesByPublishers
