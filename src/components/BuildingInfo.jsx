import React, { useState } from "react";
import "../style/BuildingInfo.css";
import SectionTitle from "./SectionTitle";

export default function BuildingInfo() {
  const [activeTab, setActiveTab] = useState({
    box1: "features",
    box2: "overview",
  });

  return (
    <div className="building-info">
      <SectionTitle
        className="building-info-title"
        main_title="building features"
        secondary_title={`
        Explore all the details that make this building stand out
        `}
      />
      {/* ------------------------------------------------------------------ */}
      <div className="building-details">
        <div className="building-btns-box1">
          <button
            onClick={() => setActiveTab({ ...activeTab, box1: "features" })}
            className={activeTab.box1 === "features" ? "active" : ""}
          >
            Features
          </button>

          <button
            onClick={() => setActiveTab({ ...activeTab, box1: "photos" })}
            className={activeTab.box1 === "photos" ? "active" : ""}
          >
            Photos
          </button>

          <button
            onClick={() => setActiveTab({ ...activeTab, box1: "videos" })}
            className={activeTab.box1 === "videos" ? "active" : ""}
          >
            Videos
          </button>

          <button
            onClick={() => setActiveTab({ ...activeTab, box1: "plan" })}
            className={activeTab.box1 === "plan" ? "active" : ""}
          >
            Plan
          </button>
        </div>

        <div className="building-btns-box2">
          <button
            onClick={() => setActiveTab({ ...activeTab, box2: "overview" })}
            className={activeTab.box2 === "overview" ? "active" : ""}
          >
            Overview
          </button>

          <button
            onClick={() => setActiveTab({ ...activeTab, box2: "details" })}
            className={activeTab.box2 === "details" ? "active" : ""}
          >
            Details
          </button>

          <button
            onClick={() => setActiveTab({ ...activeTab, box2: "aminities" })}
            className={activeTab.box2 === "aminities" ? "active" : ""}
          >
            Aminities
          </button>

          <button
            onClick={() =>
              setActiveTab({ ...activeTab, box2: "outdoor features" })
            }
            className={activeTab.box2 === "outdoor features" ? "active" : ""}
          >
            Outdoor Features
          </button>
        </div>

        <div className="specifications">
          <div className="space">
            <span className="specifications-name">space</span>
            <span className="specifications-val">1200 sqm</span>
          </div>
          <div className="floors">
            <span className="specifications-name">floors</span>
            <span className="specifications-val">8</span>
          </div>
          <div className="rooms">
            <span className="specifications-name">rooms</span>
            <span className="specifications-val">100</span>
          </div>
          <div className="type">
            <span className="specifications-name">type</span>
            <span className="specifications-val">commercial</span>
          </div>
        </div>
      </div>
    </div>
  );
}
