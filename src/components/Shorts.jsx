import React, { useState, useEffect } from "react";
import pic1 from "../assets/short1.png";
import pic2 from "../assets/short2.png";
import pic3 from "../assets/short3.png";
import pic4 from "../assets/short1.png";
import vid_icon from "../assets/Video-icon.svg";
import reel from "../assets/reel.svg";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../style/Shorts.css";
import SectionTitle from "./SectionTitle";
export default function Shorts() {
  const pics = [pic1, pic2, pic3, pic4];
  const [itemsPerPage, setItemsPerPage] = useState(4);
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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setItemsPerPage(1); // X-Small
      } else if (width >= 576 && width < 768) {
        setItemsPerPage(2); // Small
      } else if (width >= 768 && width < 992) {
        setItemsPerPage(3); // Medium
      } else if (width >= 992 && width < 1200) {
        setItemsPerPage(4); // Large
      } else {
        setItemsPerPage(4); // XX-Large
      }
    };

    handleResize(); // لتعيين القيمة عند أول تحميل
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = `(100% - ${(itemsPerPage - 1) * gap}px) / ${itemsPerPage}`;
  const sliderStyle = css`
    transform: translateX(calc(-${count} * (calc(${cardWidth}) + ${gap}px)));
    transition: transform 1s ease-in-out;
  `;

  return (
    <div className="shorts_content">
      <SectionTitle
        className="shorts_title"
        main_title="our shorts"
        secondary_title="A glimpse into our journey, one reel at a time."
      />
      <div className="Short-parent">
        <div className="swiper-btns">
          <button onClick={shiftPrev}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button onClick={shiftNext}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="slider-wrapper">
          <div className="slider-parent" css={sliderStyle}>
            {dataSlider.map((img, idx) => (
              <div className="card" key={idx}>
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <div className="card-layer">
                  <div className="reel">
                    <img src={reel} alt="" />
                  </div>

                  <div className="vid">
                    <img src={vid_icon} alt="" />
                  </div>

                  <div className="card-title">
                    <h1>07 MALL - 07</h1>
                    <span>New Damietta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
