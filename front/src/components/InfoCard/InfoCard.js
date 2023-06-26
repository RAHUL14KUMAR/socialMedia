
import React from "react";
import "./InfoCard.css";
import { useStateValue } from "../../StateProvider";

const InfoCard = () => {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span></span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>devlovers</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;