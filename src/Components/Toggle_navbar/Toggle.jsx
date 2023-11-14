import React, { useState } from 'react'
import "./Toggle.css"
import house from "../Assets/house-door-fill.svg"
import list from "../Assets/card-list.svg"
import about from "../Assets/question-square.svg"
import phone from "../Assets/phone.svg"



import { Link } from 'react-router-dom'
const Toggle = () => {
    const [showlink, setShowlink] = useState(false)
    const Toggle_sidebar = () => {
        setShowlink(!showlink)
    }
    return (
        <>
            <div className="toggle"onClick={Toggle_sidebar} >
                <li ><hr /></li>
                <li><hr /></li>
                <li><hr /></li>
            </div>
            {showlink && (
                <div className="sidebar">
                    <div className="side_links">
                        <ul>
                            <div className="home">
                                <img src={house} alt="" />
                                <li > <Link to="/">Home</Link></li>
                            </div>
                            <div className="list">
                                <img src={list} alt="" />
                                <li ><Link to="/Property_Listings"> Listings</Link></li>
                            </div>
                            <div className="about">
                                <img src={about}alt="" />
                                <li ><Link to="/About">About</Link></li>
                            </div>
                            <div className="Contact">
                                <img src={phone} alt="" />
                                <li ><Link to="/Contact">Contact</Link></li>
                            </div>

                        </ul>

                    </div>

                </div>
            )

            }
        </>
    )
}
export default Toggle