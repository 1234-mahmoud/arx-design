import { useState, useEffect } from "react";
import React from "react";
import "../style/Slider.css";
import home_img1 from "../assets/home_img.png";
import home_img2 from "../assets/slide_2.jpg";
import home_img3 from "../assets/slide_3.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Slider() {
  const pics = [home_img1, home_img2, home_img3];

  const [count, setCount] = useState(0);


  return (
    <div className="parent">
      <div className="slider-wrapper">
          {
            pics.map((i,index)=>(
              <div className="card-img"
           key={index}
                style={{
                  zIndex: index === count ? pics.length : pics.length - index, // Selected image highest zIndex
                  opacity: index === count ? 1 : 0.3,
                  transition: "opacity 0.5s ease, z-index 0.8s ease-in-out",
                  position: "absolute",
                }}

          >
            <img src={i} alt="" />
          </div>
            ))
          }
  
      </div>
        {/* Pagination with original pics length */}
        <div className="pagination">
          {Array.from({ length: pics.length }).map((_, i) => (
            <span
              key={i}
              className={
                i === count % pics.length ? "active" : "" // Active bullet based on original pics length
              }
              onClick={() => setCount(i)}
            >
               <img src={pics[i]} alt="" />

               <div className="circles"></div>
               <div className="circles"></div>
               <div className="circles"></div>
               <div className="circles"></div>
               <div className="circles"></div>
            </span>
          ))}
        </div>
    </div>
  );
}
