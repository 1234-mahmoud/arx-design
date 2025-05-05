import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import React from "react";
import SectionTitle from "./SectionTitle";
import "../style/Clients.css";
export default function Clients() {
  return (
    <div className="clients">
      <SectionTitle
        className="clients-title"
        secondary_title="trusted by clients"
      />
      {/* --------------------------------- */}
      <div className="clients-info">
        <div className="quote1">
          <span>
            <FaQuoteRight />
          </span>
        </div>

        {/* ------------------------------------------ */}
        <div className="clients-content-parent">
          <div className="clients-content">
            <p>
              I could probably go into sales for you. Iam completely blown away.
              Afterusing SEO my business skyrocketed!
            </p>
            <p> The very best.</p>
          </div>

          <div className="box-customer">
            <div className="box-quote2">
              <span className="quote2">
                <FaQuoteLeft />
              </span>
              <div className="box-title">
                <span>Grace Hall</span>
                <span>Customer</span>
              </div>
            </div>
            <div className="box-pagination">
              <span class="material-symbols-outlined">arrow_left_alt</span>
              <h4 className="pag1">01</h4>
              <div className="slash">/</div>
              <h4 className="pag2">20</h4>
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>
          </div>
        </div>
        {/* ------------------------------------------ */}
      </div>
    </div>
  );
}
