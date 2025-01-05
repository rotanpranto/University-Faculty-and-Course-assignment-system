const express = require('express')
const {
    getCurriculum,
    createCurriculum,
    deleteCurriculum,
} = require('../controllers/CurriculumController')

const router = express.Router()

//get all curriculum
router.get('/', getCurriculum)

//create a curriculum
router.post('/', createCurriculum)
    //delete a curriculum
router.delete('/:id', deleteCurriculum)



module.exports = router