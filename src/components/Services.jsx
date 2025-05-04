import React from "react";
import "../style/Services.css";
import SectionTitle from "./SectionTitle";

import com_icon from "../assets/commercial.svg";
import admin_icon from "../assets/Administaritive.svg";
import medical_icon from "../assets/medical.svg";

export default function Services() {
  const services_data = [
    {
      icon: com_icon,
      title: "Commercial",
      discribtion: `Take your business to new heights with our versatile spaces,
       designed for various industries and scales. Experience professionalism
        and innovation in every detail, with modern infrastructure,
         state-of-the-art facilities, and a vibrant
          community—redefining how you work and grow.`,
    },
    {
      icon: admin_icon,
      title: "Administrative",
      discribtion: `Searching for the perfect workspace? Our office units offer the ideal environment for professionals, 
      fostering collaboration, creativity, and productivity. 
      Enjoy a dedicated, distraction-free space designed to help you thrive.`,
    },
    {
      icon: medical_icon,
      title: "Medical",
      discribtion: `A range of premium medical units designed to enhance diagnosis, 
      treatment, and patient care. Equipped with cutting-edge facilities,
       these units streamline workflows and improve medical outcomes, 
       ensuring the highest standard of healthcare.`,
    },
  ];
  return (
    <div className="services">
      <SectionTitle
        className="services_title"
        main_title="our services"
        secondary_title="our main focus"
      />

      <div className="services-content">
        {services_data.map((s, idx) => (
          <div className="service" key={idx}>
          <div className="service-img">
          <img src={s.icon} alt="" />
          </div>
            <p className="serv_title">{s.title}</p>
            <p className="serv_desc">{s.discribtion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
