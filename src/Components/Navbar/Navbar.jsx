import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/eglogo.png"

import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/dropdown'
import Toggle from '../Toggle_navbar/Toggle'
const Navbar = () => {
  const [Menu, setMenu] = useState("Home")
  return (
    <div className='Navbar'>
      <div className="logo">
        <Link to="/">  <img onClick={() => setMenu("Home")} src={logo} alt="" /></Link>
        <Link to="/"><p onClick={() => setMenu("Home")}>CityCanvas</p></Link>
      </div>
      <div className="searchbar">
        <input type="text" />

      </div>
      <div className="links">
        <ul>
          <li onClick={() => { setMenu("Home") }}> <Link to="/">Home</Link>{Menu === "Home" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Listings")}><Link to="/Property_Listings"> Listings</Link>{Menu === "Listings" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("About")}><Link to="/About">About</Link>{Menu === "About" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Contact")}><Link to="/Contact">Contact</Link>{Menu === "Contact" ? <hr /> : <></>}</li>
        </ul>
      </div>

      <div className="loginsignup">
        {/* <button className='btnlogin'>Login</button>
        <button className='btnreg'>SignUp</button> */}
      </div>
      <Dropdown/>
      <Toggle/>
    </div>
  )
}
export default Navbar