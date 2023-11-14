import React from 'react'
import hero from "./img/heroimg.jpg"
import house from "../Assets/house-door-fill.svg"
import arrow_right from "../Assets/arrow-right-short.svg"
import "../Pages/css/home.css"
import { Link } from 'react-router-dom'
import Latest from '../Latest/Latest'
const Home = () => {
  return (
    <>
      <div className='Home'>
        <div className="left">
          <p>Predicting the Perfect Property Match For You!</p>
          <button>Get Started</button>
        </div>
        <div className="right">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="home-down">
        <div className="latest-all">
          <div className="latest-head">
            <img src={house} alt="" />
            <p className='text'>Latest Property For Sale </p>
            <hr />
          </div>
          <div className="latest-desc">
            <p className='desc'>Explore our newest listings and find your dream property for sale today.</p>
            <Link to="/Property_Listings"> <img src={arrow_right} alt="" /></Link>
          </div>
        </div>
      <Latest />
      </div>
    </>
  )
}
export default Home