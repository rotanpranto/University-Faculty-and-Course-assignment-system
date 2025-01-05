require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const assignedCourseRoutes = require('./routes/assignedCourse')
const userFacultyRoutes = require('./routes/UserFaculty')
const userAdminRoutes = require('./routes/UserAdmin')
const curriculumRoutes = require('./routes/courseCurriculum')
const requestRoutes = require('./routes/request')


//middleware

const app = express()


app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/assignedCourse', assignedCourseRoutes)
app.use('/api/userFaculty', userFacultyRoutes)
app.use('/api/userAdmin', userAdminRoutes)
app.use('/api/Curriculum', curriculumRoutes)
app.use('/api/Request', requestRoutes)


//Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listening to
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })