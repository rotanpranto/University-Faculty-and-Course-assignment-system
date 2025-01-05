const FacultyList = ({userFaculty})=>{
    return(
        <div className="avaiablefaculty">            
              <p><strong>Name         :  </strong> {userFaculty.name}</p>
              <p><strong>Phone Number :  </strong>{userFaculty.number}</p>
              <p><strong>Initial      :  </strong>{userFaculty.initial}</p>
              <p><strong>Email        :  </strong>{userFaculty.email}</p>
          </div> 
    )

}

export default FacultyList