import { useState, useEffect } from "react";
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../style/SliderProjects.css";
import pic1 from "../assets/prim1.png";
import pic2 from "../assets/prim2.png";
import pic3 from "../assets/prim3.png";

export default function SliderProjects() {
  const pics = [pic1, pic2, pic3];
  const itemsPerPage = 1;
  const gap = 30;

  const [dataSlider, setDataSlider] = useState(pics);
  const [count, setCount] = useState(0);

  const shiftNext = () => {
    if (count < dataSlider.length - itemsPerPage) {
      setCount(count + 1);
    } else {
      setDataSlider((prev) => [...prev, ...pics]);
      setCount(count + 1);
    }
  };

  const shiftPrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sliderStyle = css`
    transform: translateY(calc(-${count} * (calc(840px) + ${gap}px)));
    transition: transform 1s ease-in-out;
  `;

  return (
    <div className="slider-proj-parent">
      <div className="slider-proj-btns">
        <button onClick={shiftNext}>
       <span className="material-symbols-outlined">
double_arrow
</span>
        </button>
      </div>

      <div className="slider-proj-wrapper">
        <div className="slider-parent" css={sliderStyle}>
          {dataSlider.map((img, idx) => (
            <div className="card" key={idx}>
              <div className="card-img">
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Pagination with original pics length */}
        <div className="slider-proj-pagination">
          {Array.from({ length: pics.length }).map((_, i) => (
            <span
              key={i}
              className={
                i === count % pics.length ? "active" : "" // Active bullet based on original pics length
              }
              onClick={() => setCount(i)}
            ></span>
          ))}
        </div>
    </div>
  );
}
