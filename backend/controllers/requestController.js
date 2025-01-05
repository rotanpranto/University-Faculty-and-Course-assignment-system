const Request = require('../models/requestModel')
const mongoose = require('mongoose')

// get all request
const getRequest = async(req, res) => {
    const request = await Request.find({}).sort({ createdAt: -1 })

    res.status(200).json(request)
}




// create a new request
const createRequest = async(req, res) => {
    const { message, initial } = req.body


    try {
        const request = await Request.create({ message, initial })
        res.status(200).json(request)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a request
const deleteRequest = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such Request' })
    }

    const request = await Request.findOneAndDelete({ _id: id })

    if (!request) {
        return res.status(400).json({ error: 'No such Request' })
    }

    res.status(200).json(request)
}



module.exports = {
    getRequest,
    createRequest,
    deleteRequest,

}