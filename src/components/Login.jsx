import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Reuse the same CSS

// Simple Modal Component
const Modal = ({ show, onClose, title, message }) => {
  if (!show) return null;
  const isSuccess = title === 'Login Successful!';
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      animation: 'fadeInBg 0.3s',
    }}>
      <div style={{
        background: isSuccess ? 'linear-gradient(135deg, #e3fcec 0%, #b2f7ef 100%)' : 'linear-gradient(135deg, #ffeaea 0%, #ffd6d6 100%)',
        borderRadius: 20,
        padding: '40px 32px 32px 32px',
        minWidth: 340,
        maxWidth: '90vw',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        textAlign: 'center',
        position: 'relative',
        animation: 'popIn 0.35s cubic-bezier(.68,-0.55,.27,1.55)',
      }}>
        <div style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: isSuccess ? 'linear-gradient(135deg, #2ecc40 60%, #2c83fb 100%)' : 'linear-gradient(135deg, #ff4e4e 60%, #c62828 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 18px auto',
          boxShadow: isSuccess ? '0 2px 12px #2ecc4040' : '0 2px 12px #ff4e4e40',
        }}>
          {isSuccess ? (
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="none" />
              <path d="M11 20.5L17 26.5L27 14.5" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="none" />
              <path d="M13 13L25 25M25 13L13 25" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <h3 style={{
          color: isSuccess ? '#187a3c' : '#c62828',
          marginBottom: 10,
          fontWeight: 700,
          fontSize: 24,
          letterSpacing: 0.5,
        }}>{title}</h3>
        <div style={{
          marginBottom: 28,
          color: '#222',
          fontSize: 16,
          lineHeight: 1.5,
        }}>{message}</div>
        <button
          onClick={onClose}
          style={{
            background: isSuccess ? 'linear-gradient(90deg, #2c83fb 60%, #2ecc40 100%)' : 'linear-gradient(90deg, #ff4e4e 60%, #c62828 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 36px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 16,
            boxShadow: isSuccess ? '0 2px 8px #2c83fb30' : '0 2px 8px #ff4e4e30',
            transition: 'background 0.2s',
          }}
        >
          Close
        </button>
        {/* Animations */}
        <style>{`
          @keyframes popIn {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeInBg {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
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