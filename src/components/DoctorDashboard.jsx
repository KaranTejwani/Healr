import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";
import PatientList from "./PatientList";
import RevenueReport from "./RevenueReport";
import DoctorSettings from "./DoctorSettings";

const DoctorDashboard = ({ doctor }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Appointments");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/appointments/doctor/${doctor._id}`
        );
        const data = await res.json();
        setAppointments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    if (doctor?._id) fetchAppointments();
  }, [doctor]);

  const handleConfirmAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${appointmentId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'confirmed' }),
      });

      if (response.ok) {
        // Update the local state to reflect the change
        setAppointments(appointments.map(appt => 
          appt._id === appointmentId ? { ...appt, status: 'confirmed' } : appt
        ));
      } else {
        console.error('Failed to confirm appointment');
      }
    } catch (error) {
      console.error('Error confirming appointment:', error);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${appointmentId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'cancelled' }),
      });

      if (response.ok) {
        // Update the local state to reflect the change
        setAppointments(appointments.map(appt => 
          appt._id === appointmentId ? { ...appt, status: 'cancelled' } : appt
        ));
      } else {
        console.error('Failed to cancel appointment');
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  const handleProfileUpdate = (updatedDoctor) => {
    // Update the doctor state in the parent component
    if (typeof onDoctorUpdate === 'function') {
      onDoctorUpdate(updatedDoctor);
    }
  };

  if (!doctor) return <div className="p-5">Loading doctor data...</div>;

  const {
    name,
    role,
    profile: {
      profilePicture,
      specialization,
      highestDegree,
      degrees,
      experience,
      fee,
      waitTime,
      numberOfPatients,
      rating,
      location,
      verified,
    },
  } = doctor;

  const renderContent = () => {
    switch (activeSection) {
      case "Appointments":
        return (
          <div className="appointments-card">
            <h3 className="mb-4">📅 Upcoming Appointments</h3>
            {loading ? (
              <div className="loading-state">Loading appointments...</div>
            ) : appointments.length === 0 ? (
              <div className="empty-state">
                <p>No appointments scheduled for today.</p>
              </div>
            ) : (
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Reason</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appt, index) => (
                      <tr key={appt._id}>
                        <td>{index + 1}</td>
                        <td>{appt.patient?.name || "N/A"}</td>
                        <td>
                          {new Date(appt.appointmentDate).toLocaleDateString()}
                        </td>
                        <td>{appt.timeSlot}</td>
                        <td>
                          <span
                            className={`status-badge ${
                              appt.status.toLowerCase()
                            }`}
                          >
                            {appt.status}
                          </span>
                        </td>
                        <td>{appt.reason || "-"}</td>
                        <td>
                          {appt.status === 'pending' && (
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() => handleConfirmAppointment(appt._id)}
                              >
                                Confirm
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleCancelAppointment(appt._id)}
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      case "Patients":
        return <PatientList doctor={doctor} />;
      case "Revenue Report":
        return <RevenueReport doctor={doctor} />;
      case "Settings":
        return <DoctorSettings doctor={doctor} onProfileUpdate={handleProfileUpdate} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          Dr. <span className="text-warning">Dashboard</span>
        </div>
        <nav className="nav">
          {["Appointments", "Revenue Report", "Patients", "Settings"].map(
            (section) => (
              <button
                key={section}
                className={`nav-button ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            )
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Header */}
        <div className="header">
          <h1 className="welcome">Welcome, {name} 👋</h1>
          {/* <button
            className="add-prescription-btn"
            onClick={() => navigate("/add-prescription")}
          >
            <span>➕</span> Add Prescription
          </button> */}
        </div>

        {/* Doctor Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <img
              src={profilePicture || "./src/IMAGES/profile.jpg"}
              alt="Doctor"
              className="profile-pic"
            />
            <div className="profile-details">
              <h2 className="doctor-name">
                {name}
                {verified && (
                  <span className="verified-badge">
                    <span>✓</span> Verified
                  </span>
                )}
              </h2>
              <p className="doctor-role">{specialization?.join(", ") || role}</p>
              <p className="doctor-degree">
                {highestDegree} ({degrees?.join(", ")})
              </p>
            </div>
          </div>
          <div className="profile-stats">
            <span className="stat-badge" style={{ backgroundColor: "#e0f2fe" }}>
              🎓 {experience || "N/A"} years experience
            </span>
            <span className="stat-badge" style={{ backgroundColor: "#fef3c7" }}>
              💵 {fee}
            </span>
            <span className="stat-badge" style={{ backgroundColor: "#dcfce7" }}>
              ⏱ {waitTime}
            </span>
            <span className="stat-badge" style={{ backgroundColor: "#f3e8ff" }}>
              🏥 {location || "No Location"}
            </span>
            <span className="stat-badge" style={{ backgroundColor: "#fee2e2" }}>
              ⭐ {rating || "N/A"}
            </span>
            <span className="stat-badge" style={{ backgroundColor: "#e0e7ff" }}>
              👥 {numberOfPatients || 0} Patients
            </span>
          </div>
        </div>

        {/* Dynamic Content Section */}
        {renderContent()}
      </main>
    </div>
  );
};

export default DoctorDashboard;
