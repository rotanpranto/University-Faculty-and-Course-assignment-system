const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema
const facultySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    CreditNumber: {
        type: Number,
        default: 0
    },
    initial: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }

})

//static signup method

facultySchema.statics.signup = async function(name, number, initial, email, password) {

    if (!name || !number || !initial || !email || !password) {
        throw Error('All fields must be filed')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }


    const numberexists = await this.findOne({ number })
    if (numberexists) {
        throw Error('number already in use')
    }

    const initialexists = await this.findOne({ initial })
    if (initialexists) {
        throw Error('initial already in use')
    }

    const emailexists = await this.findOne({ email })
    if (emailexists) {
        throw Error('email already in use')
    }

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    const userFaculty = await this.create({ name, number, initial, email, password: hash })

    return userFaculty

}

//static login method
facultySchema.statics.login = async function(name, number, initial, email, password) {

    if (!name || !number || !initial || !email || !password) {
        throw Error('All fields must be filed')
    }

    const userFacultyname = await this.findOne({ name })
    if (!userFacultyname) {
        throw Error('wrong name')
    }
    const userFacultynumber = await this.findOne({ number })
    if (!userFacultynumber) {
        throw Error('wrong number')
    }
    const userFacultyinitial = await this.findOne({ initial })
    if (!userFacultyinitial) {
        throw Error('wrong initial')
    }
    const userFacultyemail = await this.findOne({ email })
    if (!userFacultyemail) {
        throw Error('wrong email')
    }

    const match = await bcrypt.compare(password, userFacultyemail.password)

    if (!match) {
        throw Error('Incorrect password')
    }
    return { name: userFacultyname, email: userFacultyemail, initial: userFacultyinitial, number: userFacultynumber };


}

module.exports = mongoose.model('UserFaculty', facultySchema)