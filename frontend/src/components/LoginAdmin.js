import { useState } from "react"
import { useAdminLogin } from "../hooks/useAdminLogin"

const LoginAdmin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {adminlogin, isLoading, error } = useAdminLogin()

  //event handle
  const handleSubmit = async (e) => {
    e.preventDefault()

    await adminlogin(email, password)
  }

  return (<div>
     
     <header className = "adminheader" >
        <div className = "leftarea" >
        <h1 > Admin Panel </h1> 
        </div> 
        </header>

        <div className="formarea">

    <form className="create" onSubmit={handleSubmit}>
      <h3 className="tittle">Please log in to view your portal</h3>
      
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

export default LoginAdmin