import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../style/OneBlog.css";
import pic1 from "../assets/prim1.png";
import pic2 from "../assets/prim2.png";
import pic3 from "../assets/prim3.png";
import Footer from "./Footer";
export default function OneBlog() {

const data=[pic1,pic2,pic3]


  const today = new Date();

  // Options for full date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Format the date using locale (e.g., 'en-US')
  const fullDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="one-blog">
      {/* ---------------------------------------------------- */}
      <div className="blog-info">
        <div className="blog-img">
          <img src={pic2} alt="" />
        </div>
        <div className="blog-data">
          <div className="date">
            <span>{fullDate}</span>
          </div>
          <div className="social">
            <FaLinkedinIn />
            <AiOutlineInstagram />
            <BsFacebook />
            <AiFillYoutube />
          </div>
        </div>
      </div>
      <hr />
      {/* ---------------------------------------------------- */}
      <div className="blog-content">
        <h3>
          Why is The Downtown Area an Investment Opportunity That Will Not be
          Repeated in The Administrative Capital?
        </h3>
        <p>
          Why is The Downtown Area an Investment Opportunity That Will Not be
          Repeated in The Administrative Capital?
        </p>
        <ul>
          Location Of The Downtown Area:
          <li>
            North Of Downtown: Government District, Parliament, Ministries
            District, and The Train Station.
          </li>
          <li>
            South: Green River, The New Museum, and The Famous Bin Zayed Axis.
          </li>
          <li>
            East: The Second Phase Of The Administrative Capital Will be Built.
          </li>
          <li>West: Al Masa Hotel.</li>
        </ul>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="blog-pics">
        {
            data.map((i,idx)=>(
                <div className="card-news" key={idx}>
                    <img src={i} alt="" />
                    <p>Prime Minister: Administrative Capital</p>
                </div>
            ))
        }
      </div>
      {/* ------------------------------------------ */}

    <Footer show={true}/>
    </div>
  );
}
