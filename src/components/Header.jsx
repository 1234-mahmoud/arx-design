import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import logo from "../assets/logo.png";
import eng from "../assets/Eng.svg";
import ar from "../assets/eg.png";

export default function Header({ className }) {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`header ${className}`}>
      <div className="header-container">
        <div className="header-logo">
          <img loading="lazy" src={logo} alt="logo" />
        </div>

        <nav ref={navRef} className={`${show ? 'show-nav' : ''}`}>
          <ul>
            <li><Link className="header_nav_link" to="/">Home</Link></li>
            <li><Link className="header_nav_link" to="About">About Us</Link></li>
            <li><Link className="header_nav_link" to="ServicesPage">Services</Link></li>
            <li><Link className="header_nav_link" to="ProjectsPage">Projects</Link></li>
            <li><Link className="header_nav_link" to="BlogPage">Blog</Link></li>
            <li><Link className="header_nav_link" to="ContactPage">Contact Us</Link></li>
            <li><Link className="header_nav_link" to="JoinPage">Join As Affiliate</Link></li>
            <li><Link className="header_nav_link" to="QuestionPage">FAQS</Link></li>
          </ul>

          <div className="lang">
            {/* Optional: Replace with react-select if needed */}
            <select>
              <option value="ar">Ar</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </nav>

        <span className="material-symbols-outlined list_icon" onClick={toggle}>menu</span>
      </div>
    </div>
  );
}
