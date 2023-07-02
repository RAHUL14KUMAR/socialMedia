import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Conversation({data,currentUser}) {
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        getuserData();
    },[])
    const userId=data.members.find((id)=>id!=currentUser);
    const getuserData=async()=>{
        try{
            const {data}=await axios.get(`http://localhost:5000/user/${userId}`);

            setUserData(data);
        }catch(error){
            console.log(error);
        }
    }
  return (
    <>
    <div className="follower conversation">
        <div>
          {/* {online && <div className="online-dot"></div>} */}
          <img
            src="https://i.pinimg.com/736x/bd/8f/e2/bd8fe25e920b158815386f88c2e5cb5c.jpg"
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.firstname} {userData?.lastname}</span>
            {/* <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span> */}
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation
