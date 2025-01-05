import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminCourseDetails from '../components/AdminCoursedetails'
import { useAdminLogout } from "../hooks/useAdminLogout"


// fetch to backend
const Admin = () => {
    const {Adminlogout}= useAdminLogout()
   
    const [assignedCourses, setAssignedCourses] = useState(null)
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

    //logout hook
      const handleClick=()=>{
              Adminlogout()
             
            
      }

    return ( <div className = "admin" >
        <header className = "adminheader" >
        <div className = "leftarea" >
        <h1 > Admin Panel </h1> 
        </div> 
        <div className="rightarea">
        <Link to='/AdminRequest'><button>Request</button></Link>
        <Link to='/AvaiableFaculty'><button>Avaiable Faculty</button></Link>        
         <Link to='/CourseCurriculum'><button>Course Curriculum</button></Link>
         <Link to='/AssignCourse'><button>Assign a course</button></Link>
         <button onClick={handleClick}>Log Out</button>
        </div>
        </header>


        {assignedCourses && assignedCourses.map(assignedCourse => ( <
                AdminCourseDetails key = { assignedCourse._id }
                assignedCourse = { assignedCourse }
                />))}  
        </div>
        
    )
}

export default Admin