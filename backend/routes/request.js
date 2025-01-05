const express = require('express')
const {
    getRequest,
    createRequest,
    deleteRequest,
} = require('../controllers/requestController')

const router = express.Router()

// GET all request
router.get('/', getRequest)

// POST a new request
router.post('/', createRequest)

// DELETE a request
router.delete('/:id', deleteRequest)


module.exports = router