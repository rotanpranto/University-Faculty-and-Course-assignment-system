const express = require('express')

const { allFaculty, loginFaculty, signupFaculty } = require('../controllers/UserFacultyController')

const router = express.Router()

//get all faculty
router.get('/', allFaculty)

//login 


router.post('/login', loginFaculty)


//signup 

router.post('/signup', signupFaculty)


module.exports = router