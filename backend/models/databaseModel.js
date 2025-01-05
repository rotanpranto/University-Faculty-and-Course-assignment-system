const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const databaseSchema = new Schema({
    section: {
        type: Number,
        required: true,
    },
    course: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    parallel_course: {
        type: String
    }
});

module.exports = mongoose.model('AssignedCourse', databaseSchema);