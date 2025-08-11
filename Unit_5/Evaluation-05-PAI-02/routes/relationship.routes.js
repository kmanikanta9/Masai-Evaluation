

const express  = require('express')
const gamesByPublishers = require('../controllers/relationship.controller')

const relationShipRouter = express.Router()

relationShipRouter.get('/:publisherId/games',gamesByPublishers)

module.exports = relationShipRouter