import React from 'react'
import './FollowersCard.css'
import axios from 'axios'
import { useStateValue } from '../../StateProvider'

function Followers({ids,image,username,name}) {
  const [{user},dispatch]=useStateValue();

    console.log(user._id);

    const follow=async(e)=>{
      e.preventDefault();
      const options={
        currentUserId:user._id
      }
      const res=await axios.put(`http://localhost:5000/user/${ids}/follow`,options);
      console.log(res);
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
        <button className='button fc-button' onClick={follow}>
        Follow
        </button>
    </div>
  )
}

export default Followers
