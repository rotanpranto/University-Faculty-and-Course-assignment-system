import React from "react"
import { useEffect, useState } from "react"
import CourseDetails from '../components/CourseDetails'
import { useFacultyLogout } from "../hooks/useFacultyLogout"


const FacultCoursedetails = () => {
    const [assignedCourses, setAssignedCourses] = useState(null)
    //fetch to backend
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
    const {facultyLogout }= useFacultyLogout()
    
    // logout hook
    const handleClick=()=>{
       facultyLogout()       
    }
    return ( <div className = "FacultyCoursedetails" >

        <header className = "facultyheader" >
        <div className = "leftarea" >
        <h1 >Instructor portal </h1> 
        </div> 
        <div className="rightarea">
        <button onClick={handleClick}>Log Out</button>
        </div>
        </header>


        {assignedCourses && assignedCourses.map(assignedCourse => ( <
                CourseDetails key = { assignedCourse._id }
                assignedCourse = { assignedCourse }
                />))}  
        </div>
        
    )
}

export default FacultCoursedetails