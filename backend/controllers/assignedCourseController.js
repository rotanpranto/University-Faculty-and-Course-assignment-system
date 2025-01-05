const mongoose = require('mongoose')
const AssignedCourse = require('../models/databaseModel')
const UserFaculty = require('../models/UserFacultyModel')
const Curriculum = require('../models/CurriculumModel')

// get all assigned courses
const getAllCourses = async(req, res) => {
    const assignedCourses = await AssignedCourse.find({}).sort({ section: 1 })
    res.status(200).json(assignedCourses)
}

// get a section details

const getCourse = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such course" })
    }

    const assignedCourse = await AssignedCourse.findById(id)

    if (!assignedCourse) {
        return res.status(404).json({ error: "no such course" })
    }
    res.status(200).json(assignedCourse)
}

//assign a new section
const createSection = async (req, res) => {
    const { section, course, credit, faculty, start_time, end_time, day, room, parallel_course } = req.body;
  
    let emptyFields = [];
    if (!section) {
      emptyFields.push('section');
    }
    if (!course) {
      emptyFields.push('course');
    }
    if (!credit) {
      emptyFields.push('credit');
    }
    if (!faculty) {
      emptyFields.push('faculty');
    }
    if (!start_time) {
      emptyFields.push('start_time');
    }
    if (!end_time) {
      emptyFields.push('end_time');
    }
    if (!day) {
      emptyFields.push('day');
    }
    if (!room) {
      emptyFields.push('room');
    }
  
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }
  
    try {
      const facultyDoc = await UserFaculty.findOne({ initial: faculty });
      if (!facultyDoc) {
        return res.status(400).json({ error: 'Faculty not found' });
      }
  
      const creditNumber = facultyDoc.CreditNumber;
  
      // Check the value of CreditNumber
      if (creditNumber + Number(credit) > 13) {
        return res.status(400).json({ error: 'Faculty credit limit exceeded (Credit more than 13)' });
      }

      const existingCurriculum = await Curriculum.findOne({ name: course, credit: credit });
      if (!existingCurriculum) {
        return res.status(400).json({ error: 'Course name is wrong or credit value is wrong' });
      }
  
      // Check if for a given course the section exists or not
      const existingSection = await AssignedCourse.findOne({
        section: section,
        course: course,
      });
      if (existingSection) {
        return res.status(400).json({ error: 'Duplicate entry of section found' });
      }

      // Check if for a given faulty the time assigned or not
      const existingEntry = await AssignedCourse.findOne({
        faculty: faculty,
        start_time: start_time,
        end_time: end_time,
        day: day,
      });
      if (existingEntry) {
        return res.status(400).json({ error: 'Duplicate entry found of time' });
      }
  
      // Rest of your code for creating the section...
  
      const assignedCourse = await AssignedCourse.create({
        section,
        course,
        credit,
        faculty,
        start_time,
        end_time,
        day,
        room,
        parallel_course
      });
    // Increase the CreditNumber value
    facultyDoc.CreditNumber = creditNumber + Number(credit); // Convert to number
    await facultyDoc.save();
      res.status(200).json(assignedCourse);
    } catch (error) {
      res.status(402).json({ error: error.message });
    }
  };
  


//cancel a section

const cancelSection = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such section" })
    }

    const assignedCourse = await AssignedCourse.findOneAndDelete({ _id: id })

    if (!assignedCourse) {
        return res.status(404).json({ error: "no such section" })
    }
    res.status(200).json(assignedCourse)

}

//update course

const updateCourse = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such section" })
    }
    const assignedCourse = await AssignedCourse.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!assignedCourse) {
        return res.status(404).json({ error: "no such section" })
    }

    res.status(200).json(assignedCourse)

}


module.exports = {
    getAllCourses,
    getCourse,
    createSection,
    cancelSection,
    updateCourse

}