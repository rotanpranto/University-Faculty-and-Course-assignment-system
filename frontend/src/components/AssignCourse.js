import React, { useState } from "react"
import { useAdminLogout } from "../hooks/useAdminLogout"


//section, course, faculty, start_time, end_time, day, room, parallel_course

const AssignCourse =()=>{
    const [section,setSection]= useState('')
    const [course,setCourse]= useState('')
    const [credit,setCredit]= useState('') 
    const [faculty,setFaculty]= useState('')
    const [start_time,setStart_time]= useState('')
    const [end_time,setEnd_time]= useState('')
    const [day,setDay]= useState('')
    const [room,setRoom]= useState('')
    const [parallel_course,setParallel_course]= useState('')
    const [error,setError]= useState(null)
    const {Adminlogout}= useAdminLogout()
   
    //event handle
    const handleSubmit=  async(e)=>{
     e.preventDefault()
        const assignCourse = {section, course,credit, faculty, start_time, end_time, day, room, parallel_course}
    
        const response = await fetch('/api/assignedCourse',{
            method:'POST',
            body:  JSON.stringify(assignCourse),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json =await response.json()

        if(!response.ok){
            console.log(response)
          setError(json.error)
        }
        if(response.ok){
            setError(null)
            setSection('')
            setCourse('')
            setCredit('')
            setFaculty('')
            setStart_time('')
            setEnd_time('')
            setDay('')
            setRoom('')
            setParallel_course('')
            
            console.log('New Course Assigned')
          }

    }
    //logout hook
    const handleClick=()=>{
              Adminlogout()
      }

return (  
        <div className="assignCourse">
            
           <header className = "adminheader" >
        <div className = "leftarea" >
        <h1 > Admin Panel </h1> 
        </div> 
        <div className="rightarea">
        <button onClick={handleClick}>Log Out</button>
        </div>
        </header>

        <div className="formarea">
            <form className="create" onSubmit={handleSubmit}>
                <h2 className="tittle">Assign a new course</h2>
                <label>Section no</label>
                <input type="number" 
                onChange={(e)=>setSection(e.target.value)} 
                    value={section}
                    
                />
                 <label>Course name</label>
                <input type="text" 
                onChange={(e)=>setCourse(e.target.value)} 
                    value={course}
                />
                  <label>Credit</label>
                <input type="number" 
                onChange={(e)=>setCredit(e.target.value)} 
                    value={credit}
                />
                 <label>Instructor</label>
                <input type="text" 
                onChange={(e)=>setFaculty(e.target.value)} 
                    value={faculty}
                />
                   <label>Start time</label>
                <input type="time" 
                onChange={(e)=>setStart_time(e.target.value)} 
                    value={start_time}
                />
                   <label>End time</label>
                <input type="time"
                 onChange={(e)=>setEnd_time(e.target.value)} 
                    value={end_time}
                />
                   <label>Day</label>
                <input type="text"
                 onChange={(e)=>setDay(e.target.value)} 
                    value={day}
                />
                   <label>Room no</label>
                <input type="number" 
                onChange={(e)=>setRoom(e.target.value)} 
                    value={room}
                />
                   <label>Parallel course</label>
                <input type="text" 
                onChange={(e)=>setParallel_course(e.target.value)} 
                    value={parallel_course}
                />
                <button>Assign course</button>
                {error && <div className="error">{error}</div>}
          </form>
      </div>

    </div> 
        
        
          
  
        
    )
}


export default AssignCourse