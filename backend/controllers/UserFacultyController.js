const UserFaculty = require('../models/UserFacultyModel')
const jwt = require('jsonwebtoken')





const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1h' })

}

// Get all faculty

const allFaculty = async(req, res) => {
    const userFacultys = await UserFaculty.find({}).sort({ name: 1 })
    res.status(200).json(userFacultys)
}


// faculty login

const loginFaculty = async(req, res) => {
    const { name, number, initial, email, password } = req.body
    try {
        const userFaculty = await UserFaculty.login(name, number, initial, email, password)

        //token
        const token = createToken(userFaculty._id)

        res.status(200).json({ name, number, initial, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//faculty signup
const signupFaculty = async(req, res) => {

    const { name, number, initial, email, password } = req.body
    try {
        const userFaculty = await UserFaculty.signup(name, number, initial, email, password)

        //token
        const token = createToken(userFaculty._id)

        res.status(200).json({ name, number, initial, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}



module.exports = {
    loginFaculty,
    signupFaculty,
    allFaculty
}