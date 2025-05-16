import React from "react";
import "../style/News.css";
import SectionTitle from "../components/SectionTitle";
import pic1 from "../assets/prim1.png";
import pic2 from "../assets/prim2.png";
import pic3 from "../assets/prim3.png";
export default function News() {
  const data = [
    pic1,
    pic2,
    pic3,
    pic1,
    pic2,
    pic3,
    pic1,
    pic2,
    pic3,
    pic1,
    pic2,
    pic3,
  ];
  return (
    <div className="news">
      <SectionTitle
        className="news-title"
        main_title="Latest News Feeds"
        secondary_title="Welcome to our blog, where we share the latest news, tips, and inspiring ideas!"
      />

      <div className="latest-news">
        {
            data.map((i,idx)=>(
                <div className="card-news" key={idx}>
                    <img src={i} alt="" />
                    <p>Prime Minister: Administrative Capital</p>
                </div>
            ))
        }
      </div>
    </div>
  );
}
