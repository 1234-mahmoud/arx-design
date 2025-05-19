import React from "react";
import "../style/PrivacyPolicy.css";
import Footer from '../components/Footer'
import Error from "./Error";
export default function PrivacyPolicy() {
  const data = [
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
    {
      point_title: "Information We Collect",
      points_title: "We may collect and process the following data about you:",
      point1:
        "Personal Identification Information (Name, Email, Phone Number, etc.)",
      point2: "Property Interests and Preferences",
      point3: "Browsing Data (IP Address, Location, Device Information)",
      point4:
        "Any information you voluntarily submit through forms or inquiries",
    },
  ];

  return (
    <div className="privacy-policy">
      <div className="privacy-desc">
        <h1>Privacy Policy</h1>
        <p>Effective Date: [Tuesday, 02 March 2025] </p>
        <p>
          At ARX Development, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website [Your Website URL]. Please
          read this policy carefully to understand our views and practices
          regarding your personal data.
        </p>
      </div>
      {/* ------------------------------------------------------ */}
      <div className="privacy-info">
        {data.map((p, idx) => (
          <div className="privacy-points" key={idx}>
            <div className="privacy-main-title">
              <span>{idx}.</span>
              <h5>{p.point_title}</h5>
            </div>
            <div className="privacy-sub-title">
              <p>{p.points_title}</p>

              <li>{p.point1}</li>
              <li>{p.point2}</li>
              <li>{p.point3}</li>
              <li>{p.point4}</li>
            </div>
          </div>
        ))}
      </div>
      {/* --------------------------------------------------- */}
<Error/>
      <Footer show={true}/>
    </div>
  );
}
