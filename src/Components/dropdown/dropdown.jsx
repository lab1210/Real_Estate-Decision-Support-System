import React, { useState } from 'react'
import profile from "../Assets/houses-fill.svg"
import drop from "../Assets/dropdown.svg"
import user from "../Assets/person.svg"
import logout from "../Assets/log-out.svg"

import "./dropdown.css"
import { Link } from 'react-router-dom'
const Dropdown = () => {
  const [Isvisible, setIsvisible] = useState(false);
  const toggle_dropdown = () => {
    setIsvisible(!Isvisible)
  }
  return (
      <div className="container-p">
        <div className="profile">
          <img className="picon" src={profile} alt="" />
          <p>Oladeji</p>
          <img
            className="dropdown"
            src={drop}
            alt=""
            onClick={toggle_dropdown}
          />
        </div>
        {Isvisible && (
          <div className="dropdown-content">
           <Link to="/Profile">
           <div className='proflink'>
            <p>Profile</p>
            <img src={user} alt="" />
            </div>
            </Link> 
            <div className="logout">
            <p>Logout</p>
            <img src={logout} alt="" />
            </div>
          </div>
        )}

      </div>


  );
}
export default Dropdown