import React from "react"
import { useEffect, useState } from "react"
import CourseDetails from '../components/CourseDetails'
const Student = () => {
    const [assignedCourses, setAssignedCourses] = useState(null)

    // fetch to backend
    useEffect(() => {
        const fetchAssignedCourses = async() => {
            const response = await fetch('/api/assignedCourse')
            const json = await response.json()

            if (response.ok) {
                setAssignedCourses(json)
            }
        }
        fetchAssignedCourses()
    }, [])
    return ( 
        < div className = "student" >

        <header className = "studentheader" >
        <div className = "studentcontainer" >
        <h1> University offered course lists </h1>
         </div> 
         </header>
        {assignedCourses && assignedCourses.map(assignedCourse => ( <
                CourseDetails key = { assignedCourse._id }
                assignedCourse = { assignedCourse }
                />
            ))
        } 
        
        </div>
    )
}

export default Student