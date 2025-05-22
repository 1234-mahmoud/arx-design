import React from "react";
import building_pic from "../assets/arx_real-estate.png";
import vision_pic from "../assets/vision.svg";
import mission_pic from "../assets/mission.svg";
import values_pic from "../assets/values.svg";
import arx_logo from "../assets/logo.png";
import "../style/About_us.css";
import SectionTitle from "./SectionTitle";
export default function About_us() {
  return (
    <div className="about_us">
      <div className="container">
        <div className="building_block">
          <div className="building">
            <img loading="lazy" src={building_pic} alt="" />
          </div>
          <div className="arx_logo">
            <img loading="lazy" src={arx_logo} alt="" />
          </div>
        </div>
        <div className="about_info">
          <SectionTitle
            className="about-title"
            main_title="About us"
            secondary_title="Redefining luxury real estate with 25+ years of excellence."
          />

          <div className="about_goals">
            <div className="goal">
              <img loading="lazy" src={vision_pic} alt="" />
              <p className="goal-title">Vision</p>
              <p className="goal_des">
                Enhancing communities through innovative real estate projects,
                blending creativity with advanced strategies for optimal client
                investment.
              </p>
            </div>
            {/* ------------------------ */}
            <div className="goal">
              <img loading="lazy" src={mission_pic} alt="" />
              <p className="goal-title">Mission</p>
              <p className="goal_des">
                We uphold core values that drive sustainable and sophisticated
                urban development aligned with global standards.
              </p>
            </div>
            {/* ----------------------------------- */}

            <div className="goal">
              <img loading="lazy" src={values_pic} alt="" />
              <p className="goal-title">Values</p>
              <p className="goal_des">
                Transparency: We uphold honesty and clarity in all our dealings.
                Respect: We foster a culture of mutual respect and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
