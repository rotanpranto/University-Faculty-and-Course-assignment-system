const Curriculum = require('../models/CurriculumModel')
const mongoose = require('mongoose')

// get all curriculum
const getCurriculum = async(req, res) => {
    const curriculum = await Curriculum.find({}).sort({ name: 1 })

    res.status(200).json(curriculum)
}


// create a new curriculum
const createCurriculum = async(req, res) => {
    const { name, credit, tittle, parrallelCourse } = req.body

    try {
        const curriculum = await Curriculum.create({ name, credit, tittle, parrallelCourse })
        res.status(200).json(curriculum)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a curriculum
const deleteCurriculum = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such curriculum' })
    }

    const curriculum = await Curriculum.findOneAndDelete({ _id: id })

    if (!curriculum) {
        return res.status(400).json({ error: 'No such curriculum' })
    }

    res.status(200).json(curriculum)
}


module.exports = {
    getCurriculum,
    createCurriculum,
    deleteCurriculum,
}