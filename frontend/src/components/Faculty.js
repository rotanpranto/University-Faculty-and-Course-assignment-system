import React from "react"
import { useFacultyLogout } from "../hooks/useFacultyLogout"
import { useFacultyAuthContext } from "../hooks/useFacultyAuthContext"

import { Link } from "react-router-dom"


const Faculty =()=>{

     const{userFaculty}= useFacultyAuthContext()

    const {facultyLogout }= useFacultyLogout()
   
    // logouthook
    const handleClick=()=>{
       facultyLogout()       
    }

    return (

        <div className="faculty">
        <header className = "facultyheader" >
        <div className = "leftarea" >
        <h1 > Instructor portal </h1> 
        </div> 
        <div className="rightarea">
         <Link to='/FacultCoursedetails'><button>Course List</button></Link>
         <Link to='/FacultyRequest'><button>Request</button></Link>
         <button onClick={handleClick}>Log Out</button>
         </div>
         </header> 
         <h1 className="greetings">Instructor Information</h1>  
         <div className="facultyinformation">
         <p><strong>Name         :  </strong> {userFaculty.name}</p>
         <p><strong>Phone Number :  </strong>{userFaculty.number}</p>
         <p><strong>Initial      :  </strong>{userFaculty.initial}</p>
         <p><strong>Email        :  </strong>{userFaculty.email}</p>
         </div>  
        </div>


        
        
    )
}

export default Faculty