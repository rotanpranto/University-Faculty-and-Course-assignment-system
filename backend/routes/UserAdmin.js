const express = require('express')

// controller functions
const { loginAdmin, signupAdmin } = require('../controllers/UserAdminController')


const router = express.Router()

// login route
router.post('/login', loginAdmin)

// signup route
router.post('/signup', signupAdmin)

module.exports = router