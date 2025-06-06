import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import doctorImage from "../IMAGES/image1.jpg"; // Replace with your uploaded image

const HeroSection = () => {
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
              <div className="row g-2">
                <div className="col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doctors, Hospital, Conditions"
                  />
                </div>
                <div className="col-md-3 col-12">
                  <button className="btn btn-warning w-100 text-white fw-bold">
                    Search
                  </button>
                </div>
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
