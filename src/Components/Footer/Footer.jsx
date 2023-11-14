import React from 'react'
import "./Footer.css"
import logo from "../Assets/eglogo.png"
import facebook from "../Assets/facebook.svg"
import tiktok from "../Assets/tiktok.svg"
import insta from "../Assets/instagram.svg"
import linkedin from "../Assets/linkedin.svg"
import google from "../Assets/google.svg"

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer_logo">
                <img src={logo} alt="" />
                <p>CityCanvas</p>
            </div>
            <div className="social">
                <img src={insta} alt="" />
                <img src={facebook} alt="" />
                <img src={tiktok} alt="" />
                <img src={linkedin} alt="" />
                <img src={google} alt="" />
            </div>
            <hr />
            <div className="copyright">
                <p>Copyright @ 2023 -All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer