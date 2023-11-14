import React from 'react'
import "./css/contact.css"
import phone from "../Assets/telephone.svg"
import whatsapp from "../Assets/whatsapp.svg"
import mail from "../Assets/mailbox.svg"



const Contact = () => {
  return (
    <div className='Contact'>
      <div className="Contact-head">
        <p>Contact Us </p>
        <h4>Questions not answered yet ? We are here to help ?</h4>
      </div>

      <div className="contact_cards">
        <div className="icon">
          <span>
            <img src={phone} alt="" />
            <p className='title'>Call</p>
          </span>
          <p className="desc1">+234-8059714287, +234-8155856239</p>
        </div>
        <div className="icon">
          <span>
            <img src={whatsapp} alt="" />
            <p className='title'>Chat</p>
          </span>

          <p className="desc1">+234-8059714287, +234-8155856239</p>
        </div>
        <div className="icon">
          <span>
            <img src={mail} alt="" />
            <p className='title'>Email</p>
          </span>
          <p className="desc1">citycanvas@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
export default Contact