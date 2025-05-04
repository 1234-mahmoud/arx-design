import { AiOutlineSearch } from "react-icons/ai"; 
import { BiFilterAlt } from "react-icons/bi"; 
import React from "react";
import "../style/Slider.css";
import home_img from "../assets/home_img.png";
export default function Slider() {
  return (
    <div className="slider">

      <img src={home_img} alt="" />
      <div className="title">
        <h1>NEW</h1>
        <h1>ADMINISTRATIVE</h1>
        <h1>CAPITAL</h1>
      </div>
      <div className="description">
        <p>
          New Administrative Capital - Downtown Plot NO. MU5-39, Area 3275m²."
          (Commercial - Medical - Offices) Consists Of 15 Mixed-Used Floors.
        </p>
      </div>
      <div className="search">
        <input type="search" name="" id="" placeholder="Search About Projects"/>
        <div className="search_box_icons">
            <div className="filter_icon">
                <BiFilterAlt />
            </div>
            <div className="search_icon">
                <AiOutlineSearch />
            </div>
        </div>
      </div>

      {/* --------------slider pagination-------------- */}

      <div className="pagination">
        
      </div>

    </div>
  );
}
