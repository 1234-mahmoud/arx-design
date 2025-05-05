import React from "react";
import "../style/Subscribtion.css";
export default function Subscribtion({ className }) {
  return (
    <div className={`subscribtion ${className}`}>
      <div className="sub-content">
        <div className="subscribe-info">
          <p>Join Our Newsletter Now</p>
          <p>
            Subscribe to our weekly newsletter and receive updates via Email
          </p>
        </div>
        <div className="subscribe-input">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email To Subscribe"
          />
          <button type="submit">subscribe</button>
        </div>
      </div>
    </div>
  );
}
