import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Reuse the same CSS

// Simple Modal Component
const Modal = ({ show, onClose, title, message }) => {
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
        <h3 style={{ color: title === 'Login Successful!' ? '#2e7d32' : '#c62828', marginBottom: 12 }}>{title}</h3>
        <div style={{ marginBottom: 20 }}>{message}</div>
        <button
          onClick={onClose}
          style={{
            background: title === 'Login Successful!' ? '#2c83fb' : '#c62828',
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

const Login = ({ setPatient, setDoctor }) => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showAccountSelection, setShowAccountSelection] = useState(false);
  const [availableAccounts, setAvailableAccounts] = useState(null);
  const [modal, setModal] = useState({ show: false, title: '', message: '' });
  const navigate = useNavigate();

  const handleLogin = async (e, preferredAccountType = null) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailOrMobile,
          password: password,
          accountType: preferredAccountType // Send preferred type to backend
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModal({ show: true, title: 'Login Successful!', message: 'You have logged in successfully.' });
        setTimeout(() => {
          setModal({ show: false, title: '', message: '' });
          if (data.doctor && data.user) {
            setAvailableAccounts(data);
            setShowAccountSelection(true);
            return;
          }
          if (data.doctor && !data.user) {
            localStorage.setItem("doctor", JSON.stringify(data.doctor));
            setDoctor(data.doctor);
            navigate("/dashboard", { state: { doctor: data.doctor } });
          } else if (data.user && !data.doctor) {
            localStorage.setItem("patient", JSON.stringify(data.user));
            setPatient(data.user);
            navigate("/");
          } else {
            setModal({ show: true, title: 'Login Failed', message: 'Unknown user type.' });
          }
        }, 1500);
        return;
      } else {
        // Show modal for all login failures
        let errorMsg =
          data.message ||
          data.error ||
          (response.status === 401
            ? 'Invalid credentials. Please check your email/mobile and password.'
            : response.status === 404
              ? 'User does not exist.'
              : 'Login failed. Please try again.');
        setModal({ show: true, title: 'Login Failed', message: errorMsg });
      }
    } catch (error) {
      setModal({ show: true, title: 'Login Failed', message: 'Network or server error. Please try again.' });
    }
  };

  const handleAccountSelection = async (accountType) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailOrMobile,
          password: password,
          accountType: accountType
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModal({ show: true, title: 'Login Successful!', message: 'You have logged in successfully.' });
        setTimeout(() => {
          setModal({ show: false, title: '', message: '' });
          if (accountType === "doctor" && data.doctor) {
            localStorage.setItem("doctor", JSON.stringify(data.doctor));
            setDoctor(data.doctor);
            navigate("/dashboard", { state: { doctor: data.doctor } });
          } else if (accountType === "patient" && data.user) {
            localStorage.setItem("patient", JSON.stringify(data.user));
            setPatient(data.user);
            navigate("/");
          } else {
            setModal({ show: true, title: 'Login Failed', message: 'Unknown user type.' });
          }
        }, 1500);
      } else {
        let errorMsg =
          data.message ||
          data.error ||
          (response.status === 401
            ? 'Invalid credentials. Please check your email/mobile and password.'
            : response.status === 404
              ? 'User does not exist.'
              : 'Login failed. Please try again.');
        setModal({ show: true, title: 'Login Failed', message: errorMsg });
      }
    } catch (error) {
      setModal({ show: true, title: 'Login Failed', message: 'Network or server error. Please try again.' });
    }
    setShowAccountSelection(false);
    setAvailableAccounts(null);
  };

  const handleBackToLogin = () => {
    setShowAccountSelection(false);
    setAvailableAccounts(null);
  };

  // Account selection screen
  if (showAccountSelection) {
    return (
      <div className="signup-container">
        <Modal
          show={modal.show}
          onClose={() => setModal({ show: false, title: '', message: '' })}
          title={modal.title}
          message={modal.message}
        />
        <div className="signup-box">
          <h2>
            <span className="brand">healr</span>
          </h2>
          <p>Choose your account type:</p>
          <div style={{ marginBottom: '15px' }}>
            <button
              className="login-btn"
              onClick={() => handleAccountSelection("doctor")}
              style={{ marginBottom: '10px', width: '100%' }}
            >
              Login as Doctor
            </button>
            <button
              className="login-btn"
              onClick={() => handleAccountSelection("patient")}
              style={{ marginBottom: '10px', width: '100%', backgroundColor: '#28a745' }}
            >
              Login as Patient
            </button>
          </div>
          <button
            onClick={handleBackToLogin}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#007bff',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ← Back to login
          </button>
        </div>
      </div>
    );
  }

  // Regular login screen
  return (
    <div className="signup-container">
      <Modal
        show={modal.show}
        onClose={() => setModal({ show: false, title: '', message: '' })}
        title={modal.title}
        message={modal.message}
      />
      <div className="signup-box">
        <h2>
          <span className="brand">healr</span>
        </h2>
        <p>Login to your account:</p>
        <input
          type="text"
          placeholder="Email or Mobile number"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;