import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";

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

  return (
    <div className="dashboard d-flex">
      {/* Sidebar */}
      <aside
        className="sidebar bg-primary text-white p-4"
        style={{ width: "220px" }}
      >
        <h3 className="mb-4">
          my<span className="text-warning">Practice</span>
        </h3>
        {["Appointments", "Revenue Report", "Patients", "Settings"].map(
          (section) => (
            <button
              key={section}
              className={`btn w-100 mb-2 ${
                activeSection === section
                  ? "btn-light text-dark"
                  : "btn-outline-light"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          )
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 bg-light">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Welcome, {name} 👋</h2>
          <button
            className="btn add-prescription-btn"
            onClick={() => navigate("/add-prescription")}
          >
            ➕ Add Prescription
          </button>
        </div>

        {/* Doctor Profile Summary */}
        <div className="card p-4 mb-4 shadow-sm">
          <div className="d-flex align-items-center">
            <img
              src={profilePicture || "./src/IMAGES/profile.jpg"}
              alt="Doctor"
              className="rounded-circle me-4"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div>
              <h4 className="mb-1">
                {name}{" "}
                {verified && (
                  <span className="badge bg-success ms-2">Verified ✅</span>
                )}
              </h4>
              <p className="mb-1 text-muted">
                {specialization?.join(", ") || role}
              </p>
              <p className="mb-1">
                <strong>Degree:</strong> {highestDegree} ({degrees?.join(", ")})
              </p>
              <div className="d-flex flex-wrap gap-3 mt-2">
                <span className="badge bg-primary">
                  🎓 {experience || "N/A"} yrs
                </span>
                <span className="badge bg-secondary">💵 {fee}</span>
                <span className="badge bg-info text-dark">⏱ {waitTime}</span>
                <span className="badge bg-warning text-dark">
                  🏥 {location || "No Location"}
                </span>
                <span className="badge bg-success">⭐ {rating || "N/A"}</span>
                <span className="badge bg-dark">
                  👥 {numberOfPatients || 0} Patients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="card p-4 shadow-sm">
          <h5 className="mb-3">📅 Appointments</h5>
          {loading ? (
            <p>Loading appointments...</p>
          ) : appointments.length === 0 ? (
            <div className="alert alert-warning">No appointments found.</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Reason</th>
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
                      <td>{appt.status}</td>
                      <td>{appt.reason || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
