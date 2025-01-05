import React from "react"
import { useEffect, useState } from "react"
import { useAdminLogout } from "../hooks/useAdminLogout"
import FacultyList from '../components/FacultyList';
const AvailableFaculty = () => {
    const {Adminlogout}= useAdminLogout()
    const [userFacultys,setUserFacultys]=useState(null)
    //fetch to backend
    useEffect(()=>{
      const fetchUserFacultys = async()=>{
        const response =await fetch('/api/userFaculty')
        const json = await response.json()

        if(response.ok){
          setUserFacultys(json)
        }
      }
      fetchUserFacultys()
    },[])
     //logout hook
      const handleClick=()=>{
              Adminlogout()
             
            
      }

    return ( <div >

        <header className = "adminheader" >
        <div className = "leftarea" >
        <h1 > Admin Panel </h1> 
        </div> 
        <div className="rightarea">        
         <button onClick={handleClick}>Log Out</button>
        </div>
        </header>
        <h1 className="avaiablesemester">Currently Avaiable Instructors for this semester </h1>
          <div >
            {userFacultys && userFacultys.map((userFaculty)=>(
              <FacultyList userFaculty={userFaculty} key={userFaculty._id}/>
              
            )
            )}

          </div> 


        </div>
    )
}

export default AvailableFaculty