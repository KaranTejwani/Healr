// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchAllDoctors from "./fetchAllDoctors";
import DoctorDropdown from "./DoctorDropdown";
import ConditionsDropdown from "./ConditionDropdown";

const AppNavbar = ({ patient, setPatient, doctor, setDoctor }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("patient");
    localStorage.removeItem("doctor");
    if (setPatient) setPatient(null);
    if (setDoctor) setDoctor(null);
    navigate("/login");
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
          height: "40px",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#ff6b35" }}>hea</span>
          <span style={{ color: "#0033cc" }}>lr</span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            <DoctorDropdown />
            <a
              href="#"
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Hospitals
            </a>
            <ConditionsDropdown />
            <Link
              to="/about"
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "500",
            }}
            >
            About
            </Link>

          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            {!patient && !doctor ? (
              <>
                <Link
                  to="/login"
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    background: "transparent",
                    color: "#333",
                    border: "1px solid #333",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    background: "#ffc107",
                    color: "#333",
                    border: "none",
                  }}
                >
                  SignUp
                </Link>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    background: "#f0f0f0",
                    color: "#333",
                    border: "none",
                    cursor: "default",
                  }}
                >
                  {patient?.name || doctor?.name}
                </button>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    background: "#ff4d4f",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
