import { AiFillYoutube } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import React from "react";
import "../style/Footer.css";
import logo from "../assets/footer_logo.png";
import Subscription from '../components/Subscribtion'
export default function Footer({show}) {
  return (
   <div className="footer-box">
     <div className="footer">
    {show && <Subscription className='footer-sub'/>}
      <div className="box-col">
        <div className="col-logo">
          <ul>
            <li>
              <img src={logo} alt="ARX" />
            </li>
            <li>
              <p>
                With 25+ years in Egypt’s real estate market, ARX delivers
                exceptional services.
              </p>
            </li>
            <li>
              <div className="locations">
                <span className="material-symbols-outlined">location_on</span>
                <span>New Cairo - New Damietta</span>
              </div>
            </li>
            <li>
              <div className="mail">
                <span className="material-symbols-outlined">mail</span>
                <span>info@arxeg.com</span>
              </div>
            </li>
            <li>
              <div className="call">
                <span className="material-symbols-outlined">phone_in_talk</span>
                <span className="phone">16591</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-cols col-links">
          <ul>
            <li>
              <p>Links</p>
            </li>
            <li>
              <a href="#">home page</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">FAQS</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-cols col-projects">
          <ul>
            <li>
              <p>projects</p>
            </li>
            <li>
              <a href="#">full city</a>
            </li>
            <li>
              <a href="#">UNi6</a>
            </li>
            <li>
              <a href="#">Golden Projects</a>
            </li>
            <li>
              <a href="#">UNi8</a>
            </li>
          </ul>
        </div>
        <div className="footer-cols col-contact">
          <ul>
            <li>
              <p>contact us</p>
            </li>
            <li>
              <a href="#">full city</a>
            </li>
            <li>
              <a href="#">UNi6</a>
            </li>
            <li>
              <a href="#">Golden Projects</a>
            </li>
            <li>
              <a href="#">UNi8</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------ */}
  
      <div className="footer-social">
        <div className="copyright">
            <p>
                &copy; 2025 ARX Developments
            </p>
        </div>
        <div className="socila-media">
            <FaLinkedinIn /><AiOutlineInstagram /><BsFacebook /><AiFillYoutube />
        </div>
      </div>
    </div>
   </div>
  );
}
