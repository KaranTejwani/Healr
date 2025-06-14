import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const { doctorId } = useParams(); // Get doctorId from URL
  const [patientId, setPatientId] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedPatient = localStorage.getItem("patient");
    if (storedPatient) {
      const patientObj = JSON.parse(storedPatient);
      setPatientId(patientObj._id); // ✅ Get ID from stored patient object
    } else {
      alert("Please log in first to book an appointment.");
      navigate("/login"); // ✅ Redirect to login page
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      patient: patientId,
      doctor: doctorId,
      appointmentDate,
      timeSlot,
      reason,
    };

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Appointment booked successfully!");
        // Optionally navigate to another page after success
        // navigate("/appointments");
      } else {
        setMessage(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setMessage("Something went wrong.");
    }
  };

  // Prevent rendering the form until patientId is set
  if (!patientId) return null;

  return (
    <div className="container mt-5">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Appointment Date:</label>
        <input
          type="date"
          className="form-control"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />

        <label>Time Slot:</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 10:00 AM - 10:30 AM"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          required
        />

        <label>Reason (optional):</label>
        <textarea
          className="form-control"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Book Now
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default BookAppointment;
