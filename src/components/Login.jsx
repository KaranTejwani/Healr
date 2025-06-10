import React, { useState } from "react";
import "./Signup.css"; // Reuse the same CSS

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", emailOrMobile, password);
  };

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
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
