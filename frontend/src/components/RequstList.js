
const RequestList = ({request})=>{
    return(
        <div className="requestlist">            
              <p className="requestmsg"><strong>Message         :  </strong> {request.message}</p>
              <p><strong>Initial :  </strong>{request.initial}</p>
              <p>{request.createdAt}</p>
          </div> 
    )

}

export default RequestList