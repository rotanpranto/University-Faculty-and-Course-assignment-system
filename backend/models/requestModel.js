const mongoose = require('mongoose')

const Schema = mongoose.Schema

const requestSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    initial: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Request', requestSchema)