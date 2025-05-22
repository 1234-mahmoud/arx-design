import React, { useState, useEffect } from "react";
import pic1 from "../assets/short1.png";
import pic2 from "../assets/short2.png";
import pic3 from "../assets/short3.png";
import pic4 from "../assets/short1.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import '../style/Blog.css'
import SectionTitle from './SectionTitle'
export default function Blog() {

     const pics = [pic1, pic2, pic3, pic4];
      const [itemsPerPage, setItemsPerPage] = useState(3);
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
          } else {
            setItemsPerPage(3); // XX-Large
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
    <div className='Blog'>
        <SectionTitle main_title="our blog" secondary_title="latest news feeds"/>

            <div className="latest-news-btns">
              <button onClick={shiftPrev}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button onClick={shiftNext}>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
        <div className="latest-news">
    
            <div className="latest-news-wrapper">
              <div className="latest-news-parent" css={sliderStyle}>
                {dataSlider.map((img, idx) => (
                  <div className="card" key={idx}>
                    <div className="card-img">
                      <img loading="lazy" src={img} alt="" />
                    </div>
                    <div className="card-layer">
                      
                      <div className="card-title">
                        <p>Prime Minister: Administrative Capital....</p>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        
   
      
        </div>
    </div>
  )
}
