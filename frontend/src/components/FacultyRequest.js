import React from "react";
import { useState } from 'react'
import { useFacultyLogout } from "../hooks/useFacultyLogout"

const FacultyRequest = () => {
  const [message, setMessage] = useState('')
  const [initial, setInitial] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const request = {message,initial}
    // fetch to backend
    const response = await fetch('/api/Request', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()


    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setMessage('')
      setInitial('')
      console.log('new request sent:', json)
    }

  }
  const {facultyLogout }= useFacultyLogout()
  
  //logout hook
    const handleClick=()=>{
       facultyLogout()       
    }

  return ( <div>
     <header className = "facultyheader" >
        <div className = "leftarea" >
        <h1 >Instructor portal </h1> 
        </div> 
        <div className="rightarea">
        <button onClick={handleClick}>Log Out</button>
        </div>
        </header>

      

    <form className="requestform" onSubmit={handleSubmit}> 
      <h2 className="tittle">Write down your request</h2>

      <input  className="requestmessage"
      placeholder="Message"
        type="text" 
        onChange={(e) => setMessage(e.target.value)} 
        value={message}
      />

      <input  className="requestinitial"
       placeholder="Initial"
        type="text" 
        onChange={(e) => setInitial(e.target.value)} 
        value={initial}
      />



      <button>Send</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default FacultyRequest