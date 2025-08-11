

const express = require('express')
const { allGames, addgame, gameById, updategames, deletegame } = require('../controllers/game.controller')

const gameRouter = express.Router()

gameRouter.get('/',allGames)
gameRouter.post('/:gameId',addgame)
gameRouter.get('/:gameId',gameById)
gameRouter.put('/:gameId',updategames)
gameRouter.delete('/:gameId',deletegame)
module.exports = gameRouter