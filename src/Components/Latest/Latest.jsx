import React from 'react'
import "./Latest.css"
import Data from "../Assets/Property_Data"
import bed from "../Assets/bed.png"
import bath from "../Assets/bath.png"
import square from "../Assets/building.svg"


const Latest = () => {
    return (
        <div className='Latest'>
            {Data.map((item,i) => {
                return (
                    <div className="card" key={i} >
                        <img src={item.pic} alt="Avatar" />
                        <div className="container">
                            <h4><b>₦ {item.Price.toLocaleString("en-US")}</b></h4>
                            <p>{item.Address}</p>
                            <br />
                            <div className="icons">
                                <div className="bed">
                                    <img src={bed} alt="" />
                                    <p>{item.No_of_Bedrooms}</p>
                                </div>
                                <div className="bath">
                                    <img src={bath} alt="" />
                                    <p>{item.Bathroom}</p>
                                </div>
                                <div className="bath">
                                    <img src={square} alt="" />
                                    <p>{item.Sq_m}m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Latest