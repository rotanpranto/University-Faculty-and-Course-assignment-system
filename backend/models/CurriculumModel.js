const mongoose = require('mongoose')

const Schema = mongoose.Schema

const curriculumSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    credit: {
        type: Number,
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    parrallelCourse: {
        type: String
    }
}, )

module.exports = mongoose.model('Curriculum', curriculumSchema)