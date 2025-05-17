import { useState, useEffect } from "react";
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../style/LandMarks.css";

import pic1 from "../assets/prim1.png";
import pic2 from "../assets/prim2.png";
import pic3 from "../assets/prim3.png";
import pic4 from "../assets/mall_1.png";
import pic5 from "../assets/mall_2.png";

export default function LandMarks() {
  const pics = [pic1, pic2, pic3, pic4, pic5, pic1, pic2, pic3, pic4];

  const pics_one_slide = [
    [pic1, pic2, pic3, pic4],
    [pic1, pic1, pic2, pic3, pic4],
    [pic1, pic2, pic3, pic4, pic5, pic1, pic2, pic3, pic4],
    [pic1, pic2, pic3, pic4],
    [pic1, pic2, pic3, pic4, pic5, pic1, pic2, pic3, pic4],
    [pic5, pic1, pic2, pic3, pic4],
    [pic1, pic2, pic3, pic4, pic5, pic1, pic2, pic3, pic4],
    [pic1, pic2, pic3, pic4, pic5, pic1, pic2, pic3, pic4],
    [pic1, pic2, pic3, pic4, pic5, pic1, pic2, pic3, pic4],
  ];

  const [dataSlider, setDataSlider] = useState(pics);
  const [count, setCount] = useState(0);

  const shiftNext = () => {
    if (count < dataSlider.length - 1) {
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

  return (
    <div className="landmarks">
      <div className="land-title">
        <h2>Explore Our Landmark Developments Shaping the Future.</h2>
      </div>
      <div className="land-slide">
        <div className="land-parent">
          {pics_one_slide[count].map((img, i) => (
            <div className="land-slide" key={i}>
              <img src={img} alt="" />
              <h3>Axiom Tower</h3>
            </div>
          ))}
        </div>
      </div>



      {/* Pagination with original pics length */}
      <div className="pagination">
            <span class="material-symbols-outlined" onClick={shiftPrev}>
chevron_left
</span>

        {Array.from({ length: pics.length }).map((_, i) => (
          <span
            key={i}
            className={
             `
             pagination-num
              ${i === count % pics.length ? "active" : ""} 
             `
            }
            onClick={() => setCount(i)}
          >{i}</span>
        ))}
        <span class="material-symbols-outlined" onClick={shiftNext}>
chevron_right
</span>
      </div>
    </div>
  );
}


