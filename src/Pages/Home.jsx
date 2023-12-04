import React from "react";
import "./css/Home.css";
import home from "../Components/Assets/home_img.avif";
import why from "../Components/Assets/why.png";
import time from "../Components/Assets/time.png";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="hero">
        <span>
          <p>Your Partner in Paving the way to Your Perfect Home. </p>
          <button>
            <Link to="/Smart_Property_Finder">GET STARTED</Link>
          </button>
        </span>
        <img src={home} alt="" />
      </div>
      <p className="title1">Why Choose Us ?</p>
      <div className="why_us">
        <div className="slides">
          <img src={why} alt="" />
          <div className="caption">
            <p>
              Our system goes beyond property listings. It's a decision support
              tool, providing insights and helping you make informed choices.
            </p>
          </div>
        </div>
        <div className="slides">
          <img src={time} alt="" />
          <div className="caption">
            <p>
              No more endless scrolling. Our AI streamlines the property search,
              presenting you with options that truly match what you're looking
              for.
            </p>
          </div>
        </div>
       
      </div>
     
    </div>
  );
};

export default Home;
