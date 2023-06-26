import React,{useState} from 'react'
import './NavIcons.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Box } from '@chakra-ui/react';
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import InfoCard from '../InfoCard/InfoCard';
function NavIcons() {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='col-sm-3'>
      <div className="navIcons d-flex">
        <img src={Home} alt="" />
        <div style={{marginTop:25+'px',cursor:'Pointer'}}>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
    </div>
  )
}

export default NavIcons
