import React, { useState,useRef } from 'react'
import './FollowersCard.css'
import axios from 'axios'
import { useStateValue } from '../../StateProvider'

function Followers({ids,image,username,name}) {
  const [floe,setfloe]=useState(true);
  const [{user},dispatch]=useStateValue();

    console.log(user._id);

    const follow=async(e)=>{
      e.preventDefault();
      const options={
        currentUserId:user._id
      }
      if(!floe){
        const res=await axios.put(`http://localhost:5000/user/${ids}/follow`,options);
        console.log(res);
      }else{
        const res=await axios.put(`http://localhost:5000/user/${ids}/unfollow`,options);
        console.log(res);
      }
      setfloe(!floe);
    }

  return (
   <div className="follower">
        <div>
        <img src={image} alt="" className='followerImage' />
        <div className="name">
            <span>{name}</span>
            <span>@{username}</span>
        </div>
        </div>
        {floe&&
        <button className='button fc-button' onClick={follow}>
        follow
        </button>}
        {!floe&&<button className='button fc-button' onClick={follow}>
        unfollow
        </button>}
    </div>
  )
}

export default Followers
