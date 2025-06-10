import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import doctorImage from "../IMAGES/image1.png";
import SearchDoctor from "./searchDoctor";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await SearchDoctor(query);
    console.log("Search results:", results);
    setDoctors(results);
  };

  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-white">
            <h1 className="display-5 fw-bold">
              Find and Book the <span className="highlight">Best Doctors</span> near you
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-12">
                  <button
                    className="btn btn-warning w-100 text-white fw-bold"
                    onClick={handleSearch}
                  >
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

        {/* Display Results (Optional) */}
        {doctors.length > 0 && (
          <div className="mt-5 text-white">
            <h3>Search Results:</h3>
            <ul className="list-group">
              {doctors.map((doc) => (
                <li key={doc._id} className="list-group-item">
                  <strong>{doc.name}</strong> — {doc.specialization} — {doc.location}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
