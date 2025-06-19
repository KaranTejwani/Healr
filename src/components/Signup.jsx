import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

// Simple Modal Component
const Modal = ({ show, onClose, title, message, isSuccess }) => {
  if (!show) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        padding: 32,
        minWidth: 320,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}>
        <h3 style={{ color: isSuccess ? '#2e7d32' : '#c62828', marginBottom: 12 }}>{title}</h3>
        <div style={{ marginBottom: 20 }}>{message}</div>
        <button
          onClick={onClose}
          style={{
            background: isSuccess ? '#2c83fb' : '#c62828',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 24px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Signup = () => {
  const [modal, setModal] = useState({ show: false, title: '', message: '', isSuccess: null });
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const specializations = [
    "Dermatologist",
    "Gynecologist",
    "Urologist",
    "Sexologist",
    "Internal Medicine Specialist",
    "Child Specialist",
    "Orthopedic Surgeon",
    "Eye Specialist",
    "ENT Specialist",
    "Cardiologist",
    "Neurologist",
    "Psychiatrist",
    "General Surgeon",
    "Gastroenterologist",
    "Endocrinologist",
    "Nephrologist",
    "Pulmonologist",
    "Oncologist",
  ];

  const showModal = (title, msg, success) => {
    setModal({ show: true, title, message: msg, isSuccess: success });
    if (success) {
      setTimeout(() => {
        setModal({ show: false, title: '', message: '', isSuccess: null });
        navigate("/login");
      }, 2500);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      gender: "",
      specialization: "",
      highestDegree: "",
      experience: "",
      fee: "",
      waitTime: "",
      numberOfPatients: "",
      location: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Name is required"),

      email: Yup.string()
        .trim()
        .required("Email or mobile is required")
        .test(
          "is-email-or-phone",
          "Must be a valid email or 11-digit number",
          function (value) {
            if (!value) return false;
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            const isPhone = /^\d{11}$/.test(value);
            return isEmail || isPhone;
          }
        ),

      password: Yup.string().min(6, "Password too short").required("Required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),

      role: Yup.string().required("Select a role"),

      gender: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Gender is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      specialization: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Specialization is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      highestDegree: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Degree is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      experience: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Experience is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      fee: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Fee is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      waitTime: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Wait time is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      numberOfPatients: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Patient count is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      location: Yup.string().when("role", {
        is: "doctor",
        then: () => Yup.string().trim().required("Location is required"),
        otherwise: () => Yup.string().notRequired(),
      }),
    }),

    onSubmit: async (values) => {
      const body = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
        ...(values.role === "doctor" && {
          gender: values.gender,
          specialization: values.specialization.split(","),
          highestDegree: values.highestDegree,
          experience: values.experience,
          fee: values.fee,
          waitTime: values.waitTime,
          numberOfPatients: values.numberOfPatients,
          location: values.location,
        }),
      };

      try {
        const res = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        if (res.ok) {
          showModal(
            "Sign Up Successful!",
            "Your account has been created. Please login to continue.",
            true
          );
        } else {
          // Handle specific error messages
          if (data.error && data.error.toLowerCase().includes("already exists")) {
            showModal(
              "Sign Up Failed",
              "A user with this email or mobile already exists. Please try logging in or use a different email/mobile.",
              false
            );
          } else if (data.error && data.error.toLowerCase().includes("validation")) {
            showModal(
              "Sign Up Failed",
              "Validation error: " + data.error,
              false
            );
          } else {
            showModal(
              "Sign Up Failed",
              data.error || "Signup failed. Please try again.",
              false
            );
          }
        }
      } catch (error) {
        showModal(
          "Network Error",
          "Network error. Please check your connection and try again.",
          false
        );
      }
    },
  });

  const getInputClass = (field) =>
    formik.touched[field] && formik.errors[field] ? "error-field" : "";

  return (
    <div className="signup-container">
      <Modal
        show={modal.show}
        onClose={() => setModal({ show: false, title: '', message: '', isSuccess: null })}
        title={modal.title}
        message={modal.message}
        isSuccess={modal.isSuccess}
      />
      <div className="signup-box">
        <h2>
          <span className="brand">healr</span>
        </h2>
        <p>Create your account below:</p>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={getInputClass("name")}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}

          <input
            type="text"
            name="email"
            placeholder="Email or Mobile number"
            className={getInputClass("email")}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={getInputClass("password")}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={getInputClass("confirmPassword")}
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}

          <select
            name="role"
            className={`input-select ${getInputClass("role")}`}
            {...formik.getFieldProps("role")}
          >
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          {formik.touched.role && formik.errors.role && (
            <div className="error">{formik.errors.role}</div>
          )}

          {formik.values.role === "doctor" && (
            <>
              <select
                name="gender"
                className={getInputClass("gender")}
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {formik.touched.gender && formik.errors.gender && (
                <div className="error">{formik.errors.gender}</div>
              )}

              <div className="custom-dropdown">
                <input
                  type="text"
                  name="specialization"
                  placeholder="Select or type specialization"
                  className="styled-input"
                  value={formik.values.specialization}
                  onChange={(e) =>
                    formik.setFieldValue("specialization", e.target.value)
                  }
                  onFocus={() => setShowDropdown(true)}
                />
                {showDropdown && (
                  <ul className="dropdown-list">
                    {specializations
                      .filter((spec) =>
                        spec
                          .toLowerCase()
                          .includes(formik.values.specialization.toLowerCase())
                      )
                      .map((spec) => (
                        <li
                          key={spec}
                          onClick={() => {
                            formik.setFieldValue("specialization", spec);
                            setShowDropdown(false);
                          }}
                        >
                          {spec}
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {formik.touched.specialization &&
                formik.errors.specialization && (
                  <div className="error">{formik.errors.specialization}</div>
                )}

              <input
                type="text"
                name="highestDegree"
                placeholder="Highest Degree"
                className={getInputClass("highestDegree")}
                {...formik.getFieldProps("highestDegree")}
              />
              {formik.touched.highestDegree && formik.errors.highestDegree && (
                <div className="error">{formik.errors.highestDegree}</div>
              )}

              <input
                type="text"
                name="experience"
                placeholder="Experience in years"
                className={getInputClass("experience")}
                {...formik.getFieldProps("experience")}
              />
              {formik.touched.experience && formik.errors.experience && (
                <div className="error">{formik.errors.experience}</div>
              )}

              <input
                type="text"
                name="fee"
                placeholder="Fee"
                className={getInputClass("fee")}
                {...formik.getFieldProps("fee")}
              />
              {formik.touched.fee && formik.errors.fee && (
                <div className="error">{formik.errors.fee}</div>
              )}

              <input
                type="text"
                name="waitTime"
                placeholder="Wait Time"
                className={getInputClass("waitTime")}
                {...formik.getFieldProps("waitTime")}
              />
              {formik.touched.waitTime && formik.errors.waitTime && (
                <div className="error">{formik.errors.waitTime}</div>
              )}

              <input
                type="text"
                name="numberOfPatients"
                placeholder="Number of Patients Treated"
                className={getInputClass("numberOfPatients")}
                {...formik.getFieldProps("numberOfPatients")}
              />
              {formik.touched.numberOfPatients &&
                formik.errors.numberOfPatients && (
                  <div className="error">{formik.errors.numberOfPatients}</div>
                )}

              <select
                name="location"
                className={getInputClass("location")}
                {...formik.getFieldProps("location")}
              >
                <option value="">Select Location</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
              </select>

              {formik.touched.location && formik.errors.location && (
                <div className="error">{formik.errors.location}</div>
              )}
            </>
          )}

          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
