import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";

const DoctorDashboard = ({ doctor }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Appointments"); // 🌟 Track active nav

  if (!doctor) return <div className="p-8">Loading...</div>;

  const {
    name,
    role,
    profile: {
      profilePicture,
      specialization,
      highestDegree,
      numberOfPatients,
      rating,
    },
  } = doctor;

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">
          my<span className="text-black">Practice</span>
        </h1>
        <nav className="nav">
          <button
            className={`nav-button ${activeSection === "Appointments" ? "active" : ""}`}
            onClick={() => setActiveSection("Appointments")}
          >
            Appointments
          </button>
          <button
            className={`nav-button ${activeSection === "Revenue Report" ? "active" : ""}`}
            onClick={() => setActiveSection("Revenue Report")}
          >
            Revenue Report
          </button>
          <button
            className={`nav-button ${activeSection === "Patients" ? "active" : ""}`}
            onClick={() => setActiveSection("Patients")}
          >
            Patients
          </button>
          <button
            className={`nav-button ${activeSection === "Settings" ? "active" : ""}`}
            onClick={() => setActiveSection("Settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <div className="header">
          <h2 className="welcome">Welcome, {name} 👋</h2>
          <div className="doctor-info">
            <div className="text">
              <p className="doctor-role">{specialization?.[0] || role}</p>
            </div>
          </div>
        </div>

        <div className="actions">
          <input type="date" className="input" />
          <select className="input">
            <option>All Appointments</option>
          </select>
          <button className="btn btn-blue" onClick={() => navigate("/add-prescription")}>
            Add Prescription
          </button>
          <button className="btn btn-orange">Add Patient</button>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>MR #</th>
                <th>Patient</th>
                <th>Appt Time</th>
                <th>Type</th>
                <th>Arrived</th>
                <th>Checked</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="empty-row">
                <td colSpan="7">
                  No appointments found. If you have applied any filters, try
                  to remove or change them.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="pagination">
            <div>
              Rows per page:
              <select className="input small">
                <option>10</option>
                <option>25</option>
              </select>
            </div>
            <div>
              <button className="disabled">&lt;</button>
              <button className="disabled">&gt;</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
