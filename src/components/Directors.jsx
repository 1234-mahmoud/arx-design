import React from "react";
import "../style/Directors.css";
import pic1 from "../assets/dir1.jpg";
import pic2 from "../assets/dir2.png";
export default function Directors() {
  const data = [
    {
      img: pic1,
      name: "Dr Saad Omar",
      jobTitle: "Chief Excutive Officer",
      summary: `Dr. Saad is a real estate developer with a PhD in 
          Business Administration from the Arab Academy. Since 2011,
           he has led successful projects in Damietta, focusing on strategic 
           locations, 
          innovation, and long-term value in real estate development.`,
    },
    {
      img: pic2,
      name: "Dr Ahmed Omar",
      jobTitle: "Founder Chairman",
      summary: `
Dr. Ahmed Omar is a real estate developer and business leader 
with a PhD in International Law, 
known for combining innovation with local and international expertise.`,
    },
    {
      img: pic1,
      name: "Dr Saad Omar",
      jobTitle: "Chief Excutive Officer",
      summary: `Dr. Saad is a real estate developer with a PhD in 
          Business Administration from the Arab Academy. Since 2011,
           he has led successful projects in Damietta, focusing on strategic 
           locations, 
          innovation, and long-term value in real estate development.`,
    },
    {
      img: pic2,
      name: "Dr Ahmed Omar",
      jobTitle: "Founder Chairman",
      summary: `
Dr. Ahmed Omar is a real estate developer and business leader 
with a PhD in International Law, 
known for combining innovation with local and international expertise.`,
    },
  ];
  return (
    <div className="directors">
      <div className="dir-title">
        <p>Chairman Of The Board Of Directors Speech</p>
      </div>
      <div className="dir-cards">
        <p className="dir-txt">
          A vision rooted in progress, driven by experience.
        </p>
        {data.map((i, idx) => (
          <div className="dir-card" key={idx}>
            <img loading="lazy" src={i.img} alt="" />
            <div className="director-info">
              <h4>{i.name}</h4>
              <h5>{i.jobTitle}</h5>
              <p>{i.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
