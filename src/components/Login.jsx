import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Modal = ({ show, onClose, title, message, isSuccess }) => {
  if (!show) return null;
  const isSuccessMsg = isSuccess;
  return (
    <div className="modal-overlay" style={{}}>
      <div
        className="modal-content"
        style={{
          '--modal-bg': isSuccessMsg ? '#e3f0fd' : 'linear-gradient(135deg, #ffeaea 0%, #ffd6d6 100%)',
          '--modal-icon-bg': isSuccessMsg ? '#2c83fb' : 'linear-gradient(135deg, #ff4e4e 60%, #c62828 100%)',
          '--modal-icon-shadow': isSuccessMsg ? '#2c83fb40' : '#ff4e4e40',
          '--modal-title-color': isSuccessMsg ? '#20509e' : '#c62828',
          '--modal-btn-bg': isSuccessMsg ? '#2c83fb' : 'linear-gradient(90deg, #ff4e4e 60%, #c62828 100%)',
          '--modal-btn-shadow': isSuccessMsg ? '#2c83fb30' : '#ff4e4e30',
        }}
      >
        <div className="modal-icon">
          {isSuccessMsg ? (
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
        <h3 className="modal-title">{title}</h3>
        <div className="modal-message">{message}</div>
        <button
          className="modal-close-btn"
          onClick={onClose}
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
  const [modal, setModal] = useState({ show: false, title: '', message: '', isSuccess: null });
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
          accountType: preferredAccountType
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.admin) {
          localStorage.setItem("admin", JSON.stringify(data.admin));
          navigate("/admin-dashboard");
          return;
        }
        if (data.doctor && data.user) {
          setAvailableAccounts(data);
          setShowAccountSelection(true);
          return;
        }
        if (data.doctor && !data.user) {
          setModal({ show: true, title: 'Login Successful!', message: 'You have logged in successfully.', isSuccess: true });
          setTimeout(() => {
            setModal({ show: false, title: '', message: '', isSuccess: null });
            localStorage.setItem("doctor", JSON.stringify(data.doctor));
            setDoctor(data.doctor);
            navigate("/dashboard", { state: { doctor: data.doctor } });
          }, 1500);
        } else if (data.user && !data.doctor) {
          setModal({ show: true, title: 'Login Successful!', message: 'You have logged in successfully.', isSuccess: true });
          setTimeout(() => {
            setModal({ show: false, title: '', message: '', isSuccess: null });
            localStorage.setItem("patient", JSON.stringify(data.user));
            setPatient(data.user);
            navigate("/");
          }, 1500);
        } else {
          setModal({ show: true, title: 'Login Failed', message: 'Unknown user type.', isSuccess: false });
        }
      } else {

        let errorMsg =
          data.message ||
          data.error ||
          (response.status === 401
            ? 'Invalid credentials. Please check your email/mobile and password.'
            : response.status === 404
              ? 'User does not exist.'
              : 'Login failed. Please try again.');
        setModal({ show: true, title: 'Login Failed', message: errorMsg, isSuccess: false });
      }
    } catch (error) {
      setModal({ show: true, title: 'Login Failed', message: 'Something went wrong. Please try again.', isSuccess: false });
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
        setModal({ show: true, title: 'Login Successful!', message: 'You have logged in successfully.', isSuccess: true });
        setTimeout(() => {
          setModal({ show: false, title: '', message: '', isSuccess: null });
          if (accountType === "doctor" && data.doctor) {
            localStorage.setItem("doctor", JSON.stringify(data.doctor));
            setDoctor(data.doctor);
            navigate("/dashboard", { state: { doctor: data.doctor } });
          } else if (accountType === "patient" && data.user) {
            localStorage.setItem("patient", JSON.stringify(data.user));
            setPatient(data.user);
            navigate("/");
          } else {
            setModal({ show: true, title: 'Login Failed', message: 'Unknown user type.', isSuccess: false });
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
        setModal({ show: true, title: 'Login Failed', message: errorMsg, isSuccess: false });
      }
    } catch (error) {
      setModal({ show: true, title: 'Login Failed', message: 'Something went wrong. Please try again.', isSuccess: false });
    }
    setShowAccountSelection(false);
    setAvailableAccounts(null);
  };

  const handleBackToLogin = () => {
    setShowAccountSelection(false);
    setAvailableAccounts(null);
  };

  if (showAccountSelection) {
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