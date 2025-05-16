import React from "react";
import "../style/Vision.css";
import v1 from "../assets/vision_1.png";
import v2 from "../assets/vision_2.png";
import v3 from "../assets/vision_3.png";
export default function Vision() {
  const data = [
    {
      img: v1,
      title: "vision",
      description: `Enhancing communities through innovative real 
                    estate projects, blending creativity with advanced strategies 
                    for optimal client investment.`,
    },
    {
      img: v2,
      title: "mission",
      description: `
                    We uphold core values that drive sustainable 
                    and sophisticated urban development aligned with global standards.
      `,
    },
    {
      img: v3,
      title: "values",
      description: `Transparency: We uphold honesty and clarity in all our dealings.
                    Respect: We foster a culture of mutual respect and integrity.`,
    },
    
  ];
  return (
    <div className="vision-comp">
      {data.map((i, idx) => (
        <div className="vision-card" key={idx}>
          <div className="info">
            <h2>{i.title}</h2>
            <p>{i.description}</p>
          </div>
          <div className="vision-img">
            <img src={i.img} alt="image" />
          </div>
        </div>
      ))}
    </div>
  );
}
