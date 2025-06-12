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
// import PilesSurgery from "../assets/surgeries/piles-surgery.png";
// import HipReplacement from "../assets/surgeries/hip-replacement.png";
// import SpinalSurgery from "../assets/surgeries/spinal-surgery.png";
// import Tonsillectomy from "../assets/surgeries/tonsillectomy.png";
// import Appendectomy from "../assets/surgeries/appendectomy.png";
// import CystRemoval from "../assets/surgeries/cyst-removal.png";
// import TURP from "../assets/surgeries/turp.png";
// import HydroceleSurgery from "../assets/surgeries/hydrocele-surgery.png";
// import Lithotripsy from "../assets/surgeries/lithotripsy.png";
// import OpenHeartSurgery from "../assets/surgeries/open-heart-surgery.png";
// import TummyTuckSurgery from "../assets/surgeries/tummy-tuck.png";
// import LiverTransplant from "../assets/surgeries/liver-transplant.png";
// import GallBladderOperation from "../assets/surgeries/gall-bladder-operation.png";
// import HeartTransplant from "../assets/surgeries/heart-transplant.png";
// import Prostatectomy from "../assets/surgeries/prostatectomy.png";
// import LaserLithotripsy from "../assets/surgeries/laser-lithotripsy.png";

const surgeries = [
  { name: "Liposuction", icon: Liposuction },
  { name: "Rhinoplasty", icon: Rhinoplasty },
  { name: "Hair Transplant", icon: HairTransplant },
  { name: "Caesarean (C-Section)", icon: Caesarean },
  { name: "IVF", icon: IVF },
  { name: "Penile Implants", icon: PenileImplants },
  { name: "Vasectomy", icon: Vasectomy },
  { name: "Hernia Surgery", icon: Hernia },
  { name: "Circumcision", icon: Circumcision },
  { name: "Fistula", icon: Fistula },
  { name: "Cataract Eye Surgery", icon: Cataract },
  { name: "Renal (Kidney) Transplant", icon: KidneyTransplant },
  { name: "Root Canal", icon: RootCanal },
  { name: "CO2 Fractional Laser", icon: CO2FractionalLaser },
  { name: "Dental Implants", icon: DentalImplants },
  { name: "Nephrectomy", icon: Nephrectomy },
  {
    name: "Varicocele Microsurgery (Varicocelectomy)",
    icon: VaricoceleMicrosurgery,
  },
  { name: "ACL Reconstruction Surgery", icon: ACLReconstruction },
  { name: "Knee Replacement Surgery", icon: KneeReplacement },
  //   { name: "Piles Surgery", icon: PilesSurgery },
  //   { name: "Hip Replacement Surgery", icon: HipReplacement },
  //   { name: "Spinal Surgery", icon: SpinalSurgery },
  //   { name: "Tonsillectomy", icon: Tonsillectomy },
  //   { name: "Appendectomy", icon: Appendectomy },
  //   { name: "Cyst Removal Under Local Anesthesia", icon: CystRemoval },
  //   { name: "TURP", icon: TURP },
  //   { name: "Hydrocele Surgery (Hydrocelectomy)", icon: HydroceleSurgery },
  //   { name: "Lithotripsy", icon: Lithotripsy },
  //   { name: "Open Heart Surgery", icon: OpenHeartSurgery },
  //   { name: "Tummy Tuck Surgery", icon: TummyTuckSurgery },
  //   { name: "Liver Transplant", icon: LiverTransplant },
  //   { name: "Operation Of Gall Bladder", icon: GallBladderOperation },
  //   { name: "Heart Transplant", icon: HeartTransplant },
  //   { name: "Prostatectomy", icon: Prostatectomy },
  //   {
  //     name: "Laser Treatment for Urinary Stones (Laser Lithotripsy)",
  //     icon: LaserLithotripsy,
  //   },
  // Add the rest...
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
    // Simulate API call or form submission
    console.log("Form submitted:", formData);
    setSubmitted(true); // Show success popup
  };

  const closeModal = () => setSubmitted(false);

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
                  onClick={() => handleSurgeryClick(item.name)}
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
