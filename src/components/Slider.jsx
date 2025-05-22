import { useState } from "react";
import "../style/Slider.css";
import home_img1 from "../assets/home_img.png";
import home_img2 from "../assets/slide_2.jpg";
import home_img3 from "../assets/slide_3.png";

export default function Slider() {
  const slide_data = [
    {
      main_title: "find the best to you",
      img: home_img1,
      title: "AURA MALL",
      description: `  AURA MALL In the most distinguished areas 
      of New Damietta, in the center of 
      the second district, plot No. 10, near Al-Saidi Street,`,
    },
    {
      main_title: "New Administrative Capital",
      img: home_img2,
      title: "Kentro Tower",
      description: `New Administrative Capital - Downtown Plot NO. MU5-39, 
                Area 3275m²." 
                (Commercial - Medical - Offices) Consists Of 15 Mixed-Used Floors. `,
    },
    {
      main_title: "Looking for a new house?",
      img: home_img3,
      title: "UNI 1",
      description: `UNI Project Series A Group Of UNI Projects 
      Has Been Implemented, Which Adds a New and 
      Distinctive Look To The Real Estate Development Market. `,
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <div className="parent">
      <div className="slider-wrapper">
        {slide_data.map((i, index) => (
          <div
            className="card-img"
            key={index}
            style={{
              zIndex:
                index === count ? slide_data.length : slide_data.length - index, // Selected image highest zIndex
              opacity: index === count ? 1 : 0.3,
              transition: "opacity 0.5s ease, z-index 0.8s ease-in-out",
              position: "absolute",
            }}
          >
            <img src={i.img} alt="" />

            <p className="slide_txt">{i.main_title}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {slide_data.map((slide, i) => (
          <div>
            <span
              key={i}
              className={
                i === count % slide_data.length ? "active" : "" // Active bullet based on original slide_data length
              }
              onClick={() => setCount(i)}
            >
              <img src={slide.img} alt="" />

              <div className="circle">
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles"></div>
              </div>

              <div className="slide-info">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
              {<div className="animated_line"></div>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
