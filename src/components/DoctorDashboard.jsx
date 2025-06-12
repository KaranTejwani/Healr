import React from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";

const DoctorDashboard = ({ doctor }) => {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    // Clear local storage/session (example: token)
    localStorage.removeItem("token");

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">
          my<span className="text-black">Practice</span>
        </h1>
        <nav className="nav">
          <button className="nav-button active">Appointments</button>
          <button className="nav-button">Revenue Report</button>
          <button className="nav-button">Patients</button>
          <button className="nav-button">Settings</button>
          <button className="nav-button logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <div className="header">
          <h2 className="welcome">Welcome, {name} 👋</h2>
          <div className="doctor-info">
            <div className="text">
              <p className="doctor-name">{name}</p>
              <p className="doctor-role">{specialization?.[0] || role}</p>
            </div>
            <img
              src={profilePicture || "https://via.placeholder.com/40"}
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>

        <div className="actions">
          <input type="date" className="input" />
          <select className="input">
            <option>All Appointments</option>
          </select>
          <button className="btn btn-blue">Add Prescription</button>
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
