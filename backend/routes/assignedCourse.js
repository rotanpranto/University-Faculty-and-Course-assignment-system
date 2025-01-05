const express = require('express')
const {
    getAllCourses,
    getCourse,
    createSection,
    cancelSection,
    updateCourse
} = require('../controllers/assignedCourseController')


const router = express.Router()

// Get all Assigned courses
router.get('/', getAllCourses)

//Get a section details
router.get('/:id', getCourse)

// Assgin a new section
router.post('/', createSection)

//Cancel a section
router.delete('/:id', cancelSection)

//Update course
router.patch('/:id', updateCourse)





module.exports = router