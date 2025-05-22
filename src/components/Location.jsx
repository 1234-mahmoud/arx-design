import React from "react";
import pic from "../assets/AdminCap.jpg";
import "../style/Locations.css";
export default function Location() {
  return (
    <div className="proj-locations">
      <div className="admin-cap">
        <img loading="lazy" src={pic} alt="" />
      </div>
      <div className="prime-location">
       <div className="prime-location-container">
         <div className="prime-location-info-1">
          <h2>Prime Location</h2>
          <p>
            Strategically situated in Downtown, the heart of the New
            Administrative Capital, KÈNTRO TOWER enjoys an exceptional position
            surrounded by key landmarks.
          </p>
        </div>

        <div className="prime-location-info-2">
          <p>Getting There</p>
          <p>
            With seamless access from major roads and proximity to 80% of the
            capital’s iconic destinations, KÈNTRO TOWER stands as a central hub
            in the New Capital. Minutes away from the Gold Market, Mosque of
            Egypt, monorail station, and the Green River, its location ensures
            unparalleled connectivity and convenience.
          </p>
        </div>
        <button>get directions</button>
       </div>
      </div>
    </div>
  );
}
