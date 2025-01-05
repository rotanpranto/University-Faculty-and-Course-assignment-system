import React from "react"
import { useEffect, useState } from "react"
import { useAdminLogout } from "../hooks/useAdminLogout"
import CurriculumDetails from "./CurriculumDetails"
const CourseCurriculum = () => {
  const [curriculums, setCurriculums] = useState(null)
  //fetch to backedn
  useEffect(() => {
    const fetchCurriculums = async () => {
      const response = await fetch('/api/Curriculum')
      const json = await response.json()

      if (response.ok) {
        setCurriculums(json)
      }
    }

    fetchCurriculums()
  }, [])


   //logout hook

    const {Adminlogout}= useAdminLogout()
   
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

        <h1 className="avaiablesemester">Course offered by CSE Department </h1>

        {curriculums && curriculums.map(curriculum => ( <
                CurriculumDetails key = { curriculum._id }
                curriculum = { curriculum }
                />))} 

        


        </div>
    )
}

export default CourseCurriculum