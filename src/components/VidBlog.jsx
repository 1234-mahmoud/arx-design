import React from "react";
import "../style/VidBlog.css";
import pic1 from "../assets/prim1.png";
import pic2 from "../assets/prim2.png";
import pic3 from "../assets/prim3.png";
import { Link } from "react-router-dom";
export default function VidBlog() {
  return (
    <div className="vid-blog">
      <div className="blog-title">
        <h1>our new videos</h1>
      </div>
      <div className="vid-boxes">
        <div className="vid_1">
          <img src={pic1} alt="" />
          <div className="vid-blog-layer">
            <span className="material-symbols-outlined vid-play">
              play_circle
            </span>
            <div className="contact">
              <span className="com-name">Kentro</span>
              <span className="phone-num">16591</span>
            </div>
          </div>
        </div>
        <div className="vid_2">
          <div className="videos">
            <div className="sub-vid-1">
              <img src={pic2} alt="" />
              <div className="vid-blog-layer">
               <Link to='/OneBlog'>
                <span className="material-symbols-outlined vid-play">
                  play_circle
                </span>
               </Link>
              </div>
            </div>
            <div className="sub-vid-2">
              <img src={pic3} alt="" />
              <div className="vid-blog-layer">
                <div className="hotel">
                  <span className="material-symbols-outlined vid-play">
                    play_circle
                  </span>
                  <span className="com-name">our special Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div className="videos-info">
            <p>Exclusive Interview from the Ramadan Iftar party!</p>
            <p>
              Mr. Mohamed Nazmy, VIP Sales Partner at RED - Real Estate Domain,
              shares expert insights on the real estate market and investment
              opportunities in 2025!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
