import React,{useState,useEffect} from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useStateValue } from '../../StateProvider'
import axios from 'axios';


const Post = ({data}) => {
  const [{ user }] = useStateValue();
  
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  

  const handleLike=()=>{
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  }
  const likePost=async(id,userId)=>{
    await axios.put(`http://localhost:5000/post/${id}/like`,{userId:userId})
  }
  return (
    <div className="Post">
        <img src={data.images} alt="" />


        <div className="postReact">
            <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post
