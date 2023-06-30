import React from 'react'
import './NavIcons.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilPen } from "@iconscout/react-unicons";
function NavIcons() {
  return (
    <div className='col-sm-3'>
      <div className="navIcons d-flex">
        <img src={Home} alt="" />
        <div style={{marginTop:25+'px',cursor:'Pointer'}}>
          <UilPen
            width="2rem"
            height="1.2rem"
          />
        </div>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
    </div>
  )
}

export default NavIcons
