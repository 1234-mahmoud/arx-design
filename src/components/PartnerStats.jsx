import React from "react";
import "../style/PartnerStats.css";
import Counter from "../components/Counter";
export default function PartnerStats() {
  return (
    <div className="partner-stats">
      <div className="circle-stats">
        <div className="cir">
          <h1>+25</h1>
          <h5>Years Of Experience</h5>
        </div>
        <div className="cir"></div>
        <div className="cir"></div>
        <div className="cir"></div>
      </div>
      <div className="col-stats">
        <div className="counter-stats">
          <Counter className="counter-stats-num" end={2500} />
          <span>Units Sold</span>
        </div>
        <div className="counter-stats">
          <Counter className="counter-stats-num" end={170} />
          <span>Total Constructions</span>
        </div>
        <div className="counter-stats">
          <Counter className="counter-stats-num" end={2000} />
          <span className="stat-txt">Customers Number</span>
        </div>
      </div>
    </div>
  );
}
