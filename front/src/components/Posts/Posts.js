import React,{useEffect,useState} from 'react'
import { PostsData } from '../../Data/PostData'
import Post from '../post/Post';
import { useParams } from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import axios from 'axios';

function Posts() {
  const [{user}]=useStateValue();
  const params = useParams();
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    getPost(user._id);
  },[])
  const getPost=async(id)=>{
    const get=await axios.get(`http://localhost:5000/post/${id}/timeline`)
    console.log(get);
    setPosts(get.data);
  }
  console.log(posts);
  if(params.id)
  posts=posts.filter((post)=>post.user._id===params.id);

  return (
    <div className="d-flex flex-column">
        {posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts
