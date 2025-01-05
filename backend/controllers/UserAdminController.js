const UserAdmin = require('../models/UserAdminModel')

const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET1, { expiresIn: '1h' })
}

// Admin login
const loginAdmin = async(req, res) => {
    const { email, password } = req.body

    try {
        const userAdmin = await UserAdmin.login(email, password)

        //  token
        const token = createToken(userAdmin._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Admin signup
const signupAdmin = async(req, res) => {
    const { email, password } = req.body

    try {
        const userAdmin = await UserAdmin.signup(email, password)

        // token
        const token = createToken(userAdmin._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { signupAdmin, loginAdmin }