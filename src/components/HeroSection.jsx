import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import doctorImage from "../IMAGES/image1.png";
import SearchDoctor from "./searchDoctor";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await SearchDoctor(query);
    console.log("Search results:", results);
  };

  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-white">
            <h1 className="display-5 fw-bold">
              Find and Book the <span className="highlight">Best Doctors</span>{" "}
              near you
            </h1>
            <div className="badge-box mt-3">
              <span className="badge-text">✅ 50M+ patients served</span>
            </div>

            <div className="search-bar mt-4">
              <div className="search-container">
                {/* <div className="location-section">
                  <input
                    type="text"
                    className="form-control location-input"
                    placeholder="Lahore"
                    defaultValue="Lahore"
                  />
                  <button className="btn btn-outline-light detect-button">
                    📍 Detect
                  </button>
                </div> */}
                <input
                  type="text"
                  className="form-control main-search-input"
                  placeholder="Doctors, Hospital, Conditions"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="btn btn-warning search-button text-white fw-bold"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={doctorImage}
              alt="Doctor"
              className="img-fluid rounded hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
