import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useToast } from "@chakra-ui/react";
import { useStateValue } from "../../StateProvider";
import axios from 'axios';

const PostShare = () => {

  const [{user}]=useStateValue()
  const toast=useToast();
  // const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const [pic,setPic]=useState();

  const postDetails=(pics)=>{
    if(pics===undefined){
      toast({
          title:"please select an image",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"top"
      })
      return;
    }
    if(pics.type==='image/jpeg'||pics.type==='image/png'){
      const data=new FormData();
      data.append("file",pics);
      data.append("upload_preset","chat-app");
      data.append("cloud_name","dxdctwwyf");
      fetch("https://api.cloudinary.com/v1_1/dxdctwwyf/image/upload",{
          method:'post',
          body:data
      })
      .then((res)=>res.json())
      .then((data)=>{
          setPic(data.url.toString());
          console.log(""+data.url);
      })
      .catch((err)=>{
          console.log(err);
      })
    }else{
        toast({
            title:"please select an image",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"top"
        })
        return;
    }

  }
  const handleUpload=async(e)=>{
    e.preventDefault();

      if(desc.current.value==null){
        toast({
          title:"please fill the description",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"top"
        })
        return
      }
      if(!pic){
        toast({
          title:"please select the pic",
          status:"warning",
          duration:5000,
          isClosable:true,
          position:"top"
        })
        return;
      }
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      images:pic
    };

    const post=await axios.post(`http://localhost:5000/post`,newPost);
    console.log(post);
    resetShare();
  }
  const resetShare = () => {
    setPic(null);
    desc.current.value = "";
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? user.profilePicture
            : {ProfileImage}
        }
        alt="Profile"
      />
      <div>
        <input type="text" placeholder="What's happening??" required ref={desc}/>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" onClick={handleUpload}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              accept='image/*'
              onChange={(e)=>postDetails(e.target.files[0])}
            />
          </div>
        </div>
      {pic && (

        <div className="previewImage">
          <UilTimes onClick={()=>setPic(null)}/>
          <img src={pic} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;