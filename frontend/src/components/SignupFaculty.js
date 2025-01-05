import { useState } from "react"
import { useAdminLogout } from "../hooks/useAdminLogout"


const SignupFaculty = () => {
    const[name,setName]=useState('')
    const[number,setNumber]=useState('')
    const[initial,setInitial]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {Adminlogout}= useAdminLogout()
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(name,number,initial,email, password)
  }
  const handleClick=()=>{
              Adminlogout()
      }


  return ( <div>
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
      <h3 className="tittle">Assign a Instructor</h3>
        
      <label>Enter Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={String} 
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

      <button>Sign up</button>
    </form>
    </div>
    </div>
  )
}

export default SignupFaculty