import React, { useState } from "react";
import Select from 'react-select';
import "../style/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import eng from "../assets/Eng.svg";
import ar from '../assets/eg.png'
export default function Header({className}) {

  const [show,setShow] = useState(false)
  const toggle=()=>{
setShow(!show)
  }



  const options = [
  {
    value: 'en',
    label: (
      <div style={{ display: 'flex', alignItems: 'center',width:'1000px'}}>
        <img loading="lazy" src={eng} alt="English" style={{ width: 20, marginRight: 8 }} />
        En
      </div>
    ),
  },
  {
    value: 'ar',
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img loading="lazy" src={ar} alt="Arabic" style={{ width: 20, marginRight: 8 }} />
        Ar
      </div>
    ),
  },
];



  return (
    <div className={`header`}>
      <div className="header-container">
        <div className="header-logo">
          <img loading="lazy" src={logo} alt="logo" />
        </div>
        <nav className={`${show?'show-nav':''}`}>
          <ul>
            <li>
              <Link className="header_nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="About">
                About Us
              </Link>
            </li>
            <li>
              <Link className="header_nav_link" to="ServicesPage">
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
              <li>
              <Link className="header_nav_link" to="QuestionPage">
                FAQS
              </Link>
            </li>
          </ul>
          <div className="lang">
           <Select options={options} />
          </div>
        </nav>
        <span className="material-symbols-outlined list_icon" onClick={toggle}>menu</span>
      </div>
    </div>
  );
}
