import React from "react";
import "./Hero.css"; // Import the CSS file

function Hero() {
  return (
    <section className="container-fluid hero-section" id="supportHero" style={{marginTop:"70px"}}>
      {/* Top Banner */}
      <div className="support-header px-5 py-4 d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Support Portal</h4>
        <a href="#" className="track-link">
          Track Tickets →
        </a>
      </div>

      {/* Main Content */}
      <div className="row px-5 py-5 mx-3 hero-content">
        {/* Left Section */}
        <div className="col-md-6 col-12 mb-4">
          <h1 className="fs-3 fw-semibold mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control search-box mb-4"
            placeholder="Eg. how do I activate F&O"
          />
          <div className="quick-links d-flex flex-column gap-2">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 col-12">
          <h1 className="fs-3 fw-semibold mb-4">Featured</h1>
          <ol className="featured-list">
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
