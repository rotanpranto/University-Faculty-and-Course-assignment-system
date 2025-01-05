import React from "react"
const CourseDetails =({assignedCourse})=>{
   
  return(

    
    <div className="course-details"> 
       
       <table>
       <thead>
              <tr>
                    <th>Course Name</th>
                    <th>Section</th>
                    <th>credit</th>
                    <th>Instructor</th>
                   
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Day</th>
                    <th>Room</th>
                    <th>Parallelly Offer</th>
                </tr>
                </thead>
              
                <tbody>
                    <tr>
                        <th>{assignedCourse.section}</th>
                        <th>{assignedCourse.course}</th>
                        <th>{assignedCourse.credit}</th>
                        <th>{assignedCourse.faculty}</th>
                        <th>{assignedCourse.start_time}</th>
                        <th>{assignedCourse.end_time}</th>
                        <th>{assignedCourse.day}</th>
                        <th>{assignedCourse.room}</th>
                        <th>{assignedCourse.parallel_course}</th>
                        
                    </tr>

                    </tbody>
                  
                
          </table>
    </div>
  )
}
//section, course, faculty, start_time, end_time, day, room, parallel_course

export default CourseDetails