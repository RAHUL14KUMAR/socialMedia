
import React from "react";
import {useNavigate} from'react-router-dom'
import "./InfoCard.css";
import { useStateValue } from "../../StateProvider";

const InfoCard = () => {
  const navigate=useNavigate();
  const [{user},dispatch]=useStateValue();

  const logout=()=>{
    localStorage.removeItem("user");
    navigate('/');
  }
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        
      </div>

      <div className="info">
        <span>
          <b>Relationship Status </b>
        </span>
        <span>{user.relationship}</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{user.livesin}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{user.worksAt}</span>
      </div>

      <button className="button logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default InfoCard;