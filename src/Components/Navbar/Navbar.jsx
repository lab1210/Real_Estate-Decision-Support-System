import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import user from "../Assets/person-circle.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <>
      <div className="Support">
        <p>
          Need help making a decision? Use our{" "}
          <span>
            <i className="bi bi-lightbulb-fill"></i> <Link  to="/Smart_Property_Finder">Smart Property Finder</Link>
          </span>
        </p>
      </div>
      <div className="Navbar">
        <div className="logo">
          <img src={Logo} alt="" />
          <p>PropSage</p>
        </div>
        <div className="Search">
          <input type="text" placeholder="Search property...." />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="links">
          <ul>
            <li onClick={()=>{setMenu("home")}}><Link to="/">Home</Link>{menu==='home' ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}} ><Link to="/About-Us">About</Link>{menu==='about' ? <hr/>:<></>}</li >
            <li onClick={()=>{setMenu("listing")}}><Link to="/Property-Listing">Properties</Link>{menu==='listing' ? <hr/>:<></>}</li>
          </ul>
        </div>

        <div className="btn">
          <button className="login">Login</button>
          <button className="register">Sign Up</button>
        </div>
        <div className="profile">
          <img src={user} alt="" />
        </div>
      </div>
      <br />
    </>
  );
};

export default Navbar;
