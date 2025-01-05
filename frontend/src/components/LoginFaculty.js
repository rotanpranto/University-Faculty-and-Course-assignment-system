import { useState } from "react"

import { useFacultyLogin } from "../hooks/useFacultyLogin"

const LoginFaculty = () => {
    const[name,setName]=useState('')
    const[number,setNumber]=useState('')
    const[initial,setInitial]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {facultylogin, isLoading, error } = useFacultyLogin()

   //event handle
  const handleSubmit = async (e) => {
    e.preventDefault()

    await facultylogin(name,number,initial,email, password)
  }

  return (
    <div>
    <div className="faculty">
        <header className = "facultyheader" >
        <div className = "leftarea" >
        <h1 > Instructor portal </h1> 
        </div> 
         </header> 
         </div>
    <div className="formarea">
    <form className="create" onSubmit={handleSubmit}>
      <h3 className="tittle">Please Login to view your portal</h3>
        
      <label>Enter Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />
        
      <label>Ente Phone Number:</label>
      <input 
        type="Number" 
        onChange={(e) => setNumber(e.target.value)} 
        value={number} 
      />
        
        <label>Enter initial:</label>
      <input 
        type="text" 
        onChange={(e) => setInitial(e.target.value)} 
        value={initial} 
      />
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>   }
    </form>
    </div>
    </div>
  )
}

export default LoginFaculty