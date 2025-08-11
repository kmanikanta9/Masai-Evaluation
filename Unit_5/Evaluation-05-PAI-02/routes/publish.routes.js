
const express = require('express')
const { allPublishers, addPublish, publishersById, updatePublishers, deletePublishers, gamesByPublishers } = require('../controllers/publish.controller')

const publishRouter = express.Router()


publishRouter.post('/add',addPublish)
publishRouter.get('/',allPublishers)
publishRouter.get('/:publisherId',publishersById)
publishRouter.put('/:publisherId',updatePublishers)
publishRouter.delete('/:publisherId',deletePublishers)


module.exports = publishRouter