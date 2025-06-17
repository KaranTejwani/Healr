import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListFilteredDoctors.css";

const ListFilteredDoctors = ({ doctors }) => {
  const [sortOption, setSortOption] = useState("");
  console.log(doctors);
  console.log(
    "Experience:",
    doctors.Experience,
    "Fee:",
    doctors.Fee,
    "Rating:",
    doctors.Rating
  );

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedDoctors = sortOption
    ? [...doctors].sort((a, b) => {
        if (sortOption === "experience") {
          const expA = parseInt(a.profile?.experience?.split(" ")[0]) || 0;
          const expB = parseInt(b.profile?.experience?.split(" ")[0]) || 0;
          return expB - expA;
        }

        if (sortOption === "fee") {
          const feeA = parseInt(a.profile?.fee?.replace(/[^\d]/g, "")) || 0;
          const feeB = parseInt(b.profile?.fee?.replace(/[^\d]/g, "")) || 0;
          return feeA - feeB;
        }

        if (sortOption === "rating") {
          const ratingA = parseInt(a.profile?.rating?.replace("%", "")) || 0;
          const ratingB = parseInt(b.profile?.rating?.replace("%", "")) || 0;
          return ratingB - ratingA;
        }

        return 0;
      })
    : doctors;

  return (
    <div className="container my-5">
      {/* 🔘 Sorting Buttons */}
      <div className="mb-4 text-start">
        <button
          className={`btn btn-outline-primary btn-sm rounded-pill me-2 ${
            sortOption === "experience" ? "active" : ""
          }`}
          onClick={() => handleSort("experience")}
        >
          Most Experienced
        </button>
        <button
          className={`btn btn-outline-primary btn-sm rounded-pill me-2 ${
            sortOption === "fee" ? "active" : ""
          }`}
          onClick={() => setSortOption("fee")}
        >
          Lowest Fee
        </button>
        <button
          className={`btn btn-outline-primary btn-sm rounded-pill me-2 ${
            sortOption === "rating" ? "active" : ""
          }`}
          onClick={() => setSortOption("rating")}
        >
          Highest Rating
        </button>
      </div>

      {/* 🩺 Doctor List */}
      {sortedDoctors.map((doc) => (
        <div key={doc._id} className="card mb-4 shadow-sm doctor-card-style">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <img
                  src={doc.image || "./src/IMAGES/profile.jpg"}
                  alt={doc.Name}
                  className="img-fluid rounded-circle doctor-avatar"
                />
              </div>
              <div className="col-md-7">
                <h5 className="doctor-name">
                  {doc.name}{" "}
                  {doc.platinum && (
                    <span className="badge bg-warning text-dark ms-2">
                      Platinum Doctor ⭐
                    </span>
                  )}
                </h5>
                <p className="mb-1">{doc.Specialization}</p>
                <p className="mb-1 text-muted">{doc.Qualifications}</p>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  <span className="badge bg-light text-dark">
                    ⏱ {doc.WaitTime || "15-30 Min"} Wait Time
                  </span>
                  <span className="badge bg-light text-dark">
                    🎓 {doc.Experience} Years Experience
                  </span>
                  <span className="badge bg-light text-dark">
                    👍 {doc.Rating || "98%"}
                  </span>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <p className="small mb-1">PMDC Verified</p>
                <Link
                  to={`/video-consult/${doc._id}`}
                  className="btn btn-outline-primary mb-2 w-100"
                >
                  🎥 Video Consultation
                </Link>
                <Link
                  to={`/doctor/${doc._id}`}
                  className="btn btn-warning text-white w-100"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
            <hr />
            <div className="row mt-3 text-center">
              <div className="col-md-6">
                <p className="mb-1 fw-semibold">Online Video Consultation</p>
                <p className="text-success mb-1">
                  Available {doc.availability || "today"}
                </p>
                <p>Rs. {doc.videoFee || "1,500"}</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1 fw-semibold">
                  {doc.Location || "Clinic/Hospital Name"}
                </p>
                <p className="text-success mb-1">
                  Available {doc.hospitalAvailability || "today"}
                </p>
                <p>{doc.Fee || "2,500"}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListFilteredDoctors;
