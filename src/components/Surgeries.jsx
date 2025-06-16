import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SurgerySection.css";
import surgeryImage from "../IMAGES/surgery.png"; // replace with actual image path
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; // Adjust the path as needed

// Icons (replace with actual imports or paths)
import Liposuction from "../assets/surgeries/liposuction.png";
import Rhinoplasty from "../assets/surgeries/rhinoplasty.png";
import HairTransplant from "../assets/surgeries/hair-transplant.png";
import Caesarean from "../assets/surgeries/caesarean.png";
import IVF from "../assets/surgeries/ivf.png";
import PenileImplants from "../assets/surgeries/penile-implants.png";
import Vasectomy from "../assets/surgeries/vasectomy.png";
import Hernia from "../assets/surgeries/hernia.png";
import Circumcision from "../assets/surgeries/circumcision.png";
import Fistula from "../assets/surgeries/fistula.png";
import Cataract from "../assets/surgeries/cataract.png";
import KidneyTransplant from "../assets/surgeries/kidney-transplant.png";
import RootCanal from "../assets/surgeries/root-canal.png";
//
import CO2FractionalLaser from "../assets/surgeries/co2-fractional-laser.png";
import DentalImplants from "../assets/surgeries/dental-implants.png";
import Nephrectomy from "../assets/surgeries/nephrectomy.png";
import VaricoceleMicrosurgery from "../assets/surgeries/varicocele-microsurgery.png";
import ACLReconstruction from "../assets/surgeries/acl-reconstruction.png";
import KneeReplacement from "../assets/surgeries/knee-replacement.png";

const surgeries = [
  { name: "Liposuction", icon: Liposuction, specialization: "Plastic Surgeon" },
  { name: "Rhinoplasty", icon: Rhinoplasty, specialization: "ENT Surgeon" },
  {
    name: "Hair Transplant",
    icon: HairTransplant,
    specialization: "Dermatologist",
  },
  {
    name: "Caesarean (C-Section)",
    icon: Caesarean,
    specialization: "Gynecologist",
  },
  { name: "IVF", icon: IVF, specialization: "Fertility Specialist" },
  {
    name: "Penile Implants",
    icon: PenileImplants,
    specialization: "Urologist",
  },
  { name: "Vasectomy", icon: Vasectomy, specialization: "Urologist" },
  { name: "Hernia Surgery", icon: Hernia, specialization: "General Surgeon" },
  { name: "Circumcision", icon: Circumcision, specialization: "Urologist" },
  { name: "Fistula", icon: Fistula, specialization: "Colorectal Surgeon" },
  {
    name: "Cataract Eye Surgery",
    icon: Cataract,
    specialization: "Ophthalmologist",
  },
  {
    name: "Renal (Kidney) Transplant",
    icon: KidneyTransplant,
    specialization: "Nephrologist",
  },
  { name: "Root Canal", icon: RootCanal, specialization: "Dentist" },
  {
    name: "CO2 Fractional Laser",
    icon: CO2FractionalLaser,
    specialization: "Dermatologist",
  },
  { name: "Dental Implants", icon: DentalImplants, specialization: "Dentist" },
  { name: "Nephrectomy", icon: Nephrectomy, specialization: "Urologist" },
  {
    name: "Varicocele Microsurgery (Varicocelectomy)",
    icon: VaricoceleMicrosurgery,
    specialization: "Urologist",
  },
  {
    name: "ACL Reconstruction Surgery",
    icon: ACLReconstruction,
    specialization: "Orthopedic Surgeon",
  },
  {
    name: "Knee Replacement Surgery",
    icon: KneeReplacement,
    specialization: "Orthopedic Surgeon",
  },
];
const SurgerySection = () => {
  const [query, setQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    surgery: "",
  });
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/surgery-search?query=${encodeURIComponent(query.trim())}`);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // You can integrate actual API call or routing here
  };

  const closeModal = () => setSubmitted(false);

  const handleSurgeryClick = (specialization) => {
    const lowerSpecialization = specialization.toLowerCase();
    if (lowerSpecialization && lowerSpecialization.length > 0) {
      const encodedSpecialization = encodeURIComponent(lowerSpecialization);
      navigate(`/search-results?query=${encodedSpecialization}`);
    } else {
      alert("No specialization found for this condition.");
    }
  };
  return (
    <>
      <div className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 text-white">
              <h1 className="display-5 fw-bold">
                Discover Top <span className="highlight">Surgery Experts</span>
              </h1>
              <div className="badge-box mt-3">
                <span className="badge-text">🏥 Trusted by 10k+ surgeries</span>
              </div>

              <form onSubmit={handleSearch} className="search-bar mt-4">
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control main-search-input"
                    placeholder="Surgeons, Hospitals, Procedures"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-danger search-button text-white fw-bold"
                  >
                    Find
                  </button>
                </div>
              </form>
            </div>

            {/* Right Content */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={surgeryImage}
                alt="Surgery"
                className="img-fluid rounded hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Left Column: Surgery Grid */}
          <div
            className="col-lg-8"
            style={{
              position: "sticky",
              top: "100px",
              maxHeight: "85vh",
              overflowY: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            <h2 className="text-dark fw-bold mb-4">
              Specializing in surgical expertise for over 50 health issues.
            </h2>
            <div className="row">
              {surgeries.map((item, index) => (
                <div
                  className="col-6 col-md-4 col-lg-3 mb-4 text-center"
                  key={index}
                  onClick={() => handleSurgeryClick(item.specialization)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      padding: "15px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      height: "100%",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        marginBottom: "10px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h5 className="fw-bold mb-4 text-primary">
                Plan your Surgery with HEALR!
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label text-dark fw-semibold">
                    Patient Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter patient name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-dark fw-semibold">
                    Phone No*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-dark fw-semibold">
                    City*
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-select form-select-lg"
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label text-dark fw-semibold">
                    Surgery*
                  </label>
                  <select
                    name="surgery"
                    value={formData.surgery}
                    onChange={handleChange}
                    className="form-select form-select-lg"
                    required
                  >
                    <option value="">Select Surgery</option>
                    {surgeries.map((s, i) => (
                      <option key={i} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn  w-100 fw-bold py-2">
                  Request Surgery Booking
                </button>
              </form>

              {/* ✅ Confirmation Modal */}
              {submitted && (
                <div
                  style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      padding: "30px",
                      borderRadius: "12px",
                      textAlign: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      position: "relative",
                      width: "90%",
                      maxWidth: "400px",
                    }}
                  >
                    {/* ❌ Close Button */}
                    <button
                      onClick={closeModal}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "15px",
                        background: "transparent",
                        border: "none",
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "#999",
                      }}
                      aria-label="Close"
                    >
                      ✖
                    </button>

                    <div style={{ fontSize: "48px", color: "green" }}>✔️</div>
                    <p className="mt-3 mb-0 fw-semibold">
                      Surgery booking Request submitted.
                    </p>
                    <p>You will be contacted by our representative shortly.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurgerySection;
