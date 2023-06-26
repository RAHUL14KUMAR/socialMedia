import React from 'react'
import "./ProfileCard.css"
import Cover from '../../img/cover.jpg'
import Post from '../../img/postpic1.jpg'
import { useStateValue } from '../../StateProvider'
function ProfileCard() {

    const [{user},dispatch]=useStateValue();

  return (
    <div className='mt-2 col-sm-9' style={{bordeRadius: 1.5+'rem',
        gap: 1+'rem',background:"rgba(255, 255, 255, 0.64)"}}>
        <div className='d-flex flex-column align-items-center justify-content-center position-relative'>
            <img className="rounded-4"src={Cover} alt='coverImage' style={{width:"80%",height:10+'em'}}/>
            <div className="ProfileImages">
                <img src={Post}/>
            </div>
        </div> 
        <div className="ProfileName">
            <span style={{fontWeight:"bold"}}>firstname lastname</span>
            <span> 'Write about yourself'</span>
      </div>
      <div className="followStatus">
        <hr className='hr'/>
        <div>
            <div className="follow">
                <span>{user.followers.length}</span>
                <span>Followers</span>
            </div>
            <div className='vl'> </div>
            <div className="follow">
                <span>{user.followers.length}</span>
                <span>Following</span>
            </div>
        </div>
        <div style={{ textDecoration: "none", color: "inherit" }}>
            My Profile
            </div>
      </div>
    </div>
  )
}

export default ProfileCard
