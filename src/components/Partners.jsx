import React from "react";
import "../style/Partners.css";
import pic1 from "../assets/comp1.png";
import pic2 from "../assets/comp2.png";
import pic3 from "../assets/comp3.png";
export default function Partners() {
  return (
    <div className="partners">
      <div className="partners-title">
        <h1>
          <span>our</span> success
        </h1>
        <h1>partners</h1>
      </div>
      <div className="partners-comp">
        <div className="partner-img">
          <img src={pic1} alt="" />
        </div>
        <div className="partner-img">
          <img src={pic2} alt="" />
        </div>
        <div className="partner-img">
          <img src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
}
