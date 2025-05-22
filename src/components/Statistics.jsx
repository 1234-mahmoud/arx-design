import React from "react";
import "../style/Statistics.css";

import bg from "../assets/stas_bg.jpg";
import pic1 from "../assets/comp1.png";
import pic2 from "../assets/comp2.png";
import pic3 from "../assets/comp3.png";
import Counter from "./Counter";

export default function Statistics() {
  return (
    <div className="stats">
      <div className="stats-numbers">
        <img loading="lazy" src={bg} alt="" className="stats-background" />
        <div className="stat_box">
          <div className="stat_label">
            <Counter end={25} />
            <p>Total Years Of Experience</p>
          </div>

          <div className="stat_label">
            <Counter end={2500} />
            <p>Units Sold</p>
          </div>

          <div className="stat_label">
            <Counter end={170} />
            <p>Total Constructions</p>
          </div>

          <div className="stat_label">
            <Counter end={2000} />
            <p>Customers Number</p>
          </div>
        </div>
      </div>

      <div className="partners">
        <img loading="lazy" src={pic1} alt="" />
        <img loading="lazy" src={pic2} alt="" />
        <img loading="lazy" src={pic3} alt="" />
      </div>
    </div>
  );
}
