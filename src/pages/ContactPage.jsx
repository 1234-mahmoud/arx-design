import React from "react";
import "../style/ContactPage.css";
import bg from "../assets/stas_bg.jpg";
import Contact from "../components/Contact";
import Footer from '../components/Footer'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
export default function ContactPage() {

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};



  return (
    <div className="contact-page">
      <div className="bg-contact">
        <img src={bg} alt="" />
        <div className="bg-contact-title">
          <h1>contact us</h1>
          <p>
            We're always here for you! Feel free to reach out— our team is ready
            to assist and answer your questions anytime.
          </p>
        </div>
      </div>
      <Contact/>
<div className="locations-comp">
  
      <h2 className="locations-title">
        our locations
      </h2>
      <LoadScript googleMapsApiKey="AIzaSyDAGlEiK6N_r4qwnQuLt0YFjiVVDDWbzl0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <h1>google mappppppppppppp</h1>
      </GoogleMap>
    </LoadScript>
</div>

<Footer/>

    </div>
  );
}
