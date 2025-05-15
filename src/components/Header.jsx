import React, { useState } from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import eng from "../assets/Eng.svg";
export default function Header() {

  const [show,setShow] = useState(false)
  const toggle=()=>{
setShow(!show)
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={`${show?'show-nav':''}`}>
          <ul>
            <li>
              <Link className="header_nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="/About">
                About Us
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="/ServicesPage">
                Services
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="ProjectsPage">
                Projects
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="BlogPage">
                Blog
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="ContactPage">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="JoinPage">
                Join As Affiliate
              </Link>
            </li>
          </ul>
          <div className="lang">
            <select name="" id="">
              <option value="En">En</option>
              <option value="Ar">Ar</option>
            </select>
          </div>
        </nav>
        <span className="material-symbols-outlined list_icon" onClick={toggle}>menu</span>
      </div>
    </div>
  );
}
