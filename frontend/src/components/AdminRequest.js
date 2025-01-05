import React from "react"
import { useEffect, useState } from "react"
import { useAdminLogout } from "../hooks/useAdminLogout"
import RequestList from "./RequstList"
const AdminRequest = () => {
    const {Adminlogout}= useAdminLogout()
    const [requests,setRequests]=useState(null)
  // fetech to backend
    useEffect(()=>{
      const fetchRequest = async()=>{
        const response =await fetch('/api/Request')
        const json = await response.json()

        if(response.ok){
          setRequests(json)
        }
      }
      fetchRequest()
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
        <h1 className="avaiablesemester">All Requests </h1>
          <div >
            {requests && requests.map((request)=>(
              <RequestList request={request} key={request._id}/>
              
            )
            )}

          </div> 


        </div>
    )
}

export default AdminRequest