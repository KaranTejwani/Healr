import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Reuse the same CSS

const Login = ({ setPatient, setDoctor }) => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showAccountSelection, setShowAccountSelection] = useState(false);
  const [availableAccounts, setAvailableAccounts] = useState(null);
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
        console.log("Login successful:", data);
        console.log("Has doctor account:", !!data.doctor);
        console.log("Has user account:", !!data.user);
        console.log("Has both accounts:", !!(data.doctor && data.user));

        // Check if user has both doctor and patient accounts
        if (data.doctor && data.user) {
          console.log("Both accounts detected, showing selection screen");
          setAvailableAccounts(data);
          setShowAccountSelection(true);
          return;
        }

        // Single account login (existing logic)
        if (data.doctor && !data.user) {
          console.log("Doctor only account detected");
          localStorage.setItem("doctor", JSON.stringify(data.doctor));
          setDoctor(data.doctor);
          navigate("/dashboard", { state: { doctor: data.doctor } });

        } else if (data.user && !data.doctor) {
          console.log("Patient only account detected");
          localStorage.setItem("patient", JSON.stringify(data.user));
          setPatient(data.user);
          navigate("/");

        } else {
          console.log("Unknown account structure:", data);
          alert("Unknown user type.");
        }
      } else {
        console.error("Login failed:", data.message || "Unknown error");
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleAccountSelection = async (accountType) => {
    try {
      // Make a new login request with the specific account type
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
        if (accountType === "doctor" && data.doctor) {
          localStorage.setItem("doctor", JSON.stringify(data.doctor));
          setDoctor(data.doctor);
          navigate("/dashboard", { state: { doctor: data.doctor } });
        } else if (accountType === "patient" && data.user) {
          localStorage.setItem("patient", JSON.stringify(data.user));
          setPatient(data.user);
          navigate("/");
        }
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during account selection:", error);
      alert("Something went wrong. Please try again.");
    }
    
    // Reset states
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