import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Select from 'react-select';
import "../style/Contact.css";
import eng from "../assets/Eng.svg";
import ar from '../assets/eg.png'


export default function Contact() {

  
    const options = [
    {
      value: 'en',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={eng} alt="English" style={{ width: 20, marginRight: 8 }} />
          En
        </div>
      ),
    },
    {
      value: 'ar',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={ar} alt="Arabic" style={{ width: 20, marginRight: 8 }} />
          Ar
        </div>
      ),
    },
  ];
  
  


  return (
    <div className="contact-comp">
      <div className="locations">
        <div className="reach">
          <h5>reach us</h5>
          <p>we’re here to help and always happy to hear from you!" ✨📞</p>
        </div>
        <div className="info">
          <div className="address info-block">
            <span className="material-symbols-outlined icon_">pin_drop</span>
            <div className="cont">
              <span>Office Address</span>
              <span>
                New Cairo -south 90 St- top 90 building New Damietta – the 3rd
                district – 15th St
              </span>
            </div>
          </div>
          <div className="phone-num  info-block">
            <span className="material-symbols-outlined icon_">call</span>
            <div className="cont">
              <div className="cont">
                <span>Phone Number</span>
                <span>16591</span>
              </div>
            </div>
          </div>
          <div className="mail info-block">
            <span className="material-symbols-outlined icon_">mail</span>
            <div className="cont">
              <span>Email Us</span>
              <span>info@arxeg.com</span>
            </div>
          </div>
          <div className="meeting info-block">
            <span className="material-symbols-outlined icon_">video_call</span>
            <div className="cont">
              <span>Schedule Meeting</span>
            </div>
          </div>
        </div>
        <div className="social-media">
          <p>Follow Our Social Media</p>
          <div className="social-groub">
            <div className="icon_">
              <FaLinkedinIn />
            </div>
            <div className="icon_">
              <BsFacebook />
            </div>
            <div className="icon_">
              <AiFillYoutube />
            </div>
            <div className="icon_">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="msg-us">
        <h5>Send Us A Message</h5>
        <form action="">
          <div className="box-1">
            <div className="name input-cont">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </div>

            <div className="phone input-cont">
              <label htmlFor="">Phone</label>
              <div className="phone-content">
                <img src={ar} alt="icon" />
                           <Select options={options} />

                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            <div className="subject input-cont">
              <label htmlFor="">Subject</label>
              <select name="" id="">
                <option value="">Interested In</option>
              </select>
            </div>
          </div>

          {/* --------------- */}
          <div className="box-2">
            <div className="mail input-cont">
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" />
            </div>

            <div className="mesgbox">
              <label htmlFor="">Message</label>
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
          </div>
        </form>
        <button type="submit">Send</button>
      </div>
    </div>
  );
}
