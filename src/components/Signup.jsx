import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [role, setRole] = useState("patient");

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>
          <span className="brand">healr</span>
        </h2>
        <p>Create your account below:</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email or Mobile number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        {/* Role Selection */}
        {/* Role Dropdown */}
        <select className="input-select">
          <option value="">Select Role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>

        <button className="login-btn">Sign Up</button>
        <p className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
