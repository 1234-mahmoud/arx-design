import React, { useEffect, useState } from "react";
import "../style/Projects.css";
import pic1 from "../assets/short1.png";
import pic2 from "../assets/short2.png";
import pic3 from "../assets/short3.png";
import pic4 from "../assets/short1.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export default function Projects() {
  const pics = [pic1, pic2, pic3, pic4];
  const [itemsPerPage, setItemsPerPage] = useState(2);
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
      } else {
        setItemsPerPage(2); // XX-Large
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = `(100% - ${(itemsPerPage - 1) * gap}px) / ${itemsPerPage}`;
  const sliderStyle = css`
    transform: translateX(calc(-${count} * (calc(${cardWidth}) + ${gap}px)));
    transition: transform .1s ease-in-out;
  `;

  return (
    <div className="projects">
      <div className="latest_projects">
        <h2>our latest projects</h2>
        <button>
          <a href="#">
            See all projects
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </button>
      </div>
      {/* ----------Projects Show------------------------------- */}
      <div className="projects-container">
        <div className="proj_show-btns">
          <button onClick={shiftPrev}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button onClick={shiftNext}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="projects_show">
        <div className="projects-show-wrapper">
          <div className="projects-show-parent" css={sliderStyle}>
            {dataSlider.map((img, idx) => (
              <div className="card" key={idx}>
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <div className="proj_show_title">
                  <p>O7 MALL - O7</p>
                  <div className="location">
                    <span className="material-symbols-outlined">location_on</span>
                    <span>New Damietta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
