import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Reuse the same CSS

const Login = ({ setPatient }) => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailOrMobile,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        // If doctor logs in
        if (data.doctor) {
          navigate("/dashboard", { state: { doctor: data.doctor } });

        // If patient logs in
        } else if (data.user) {
          console.log("Logged in as patient:", data.user);
          localStorage.setItem("patient", JSON.stringify(data.user));
          setPatient(data.user); // ✅ Updates App-level state
          navigate("/"); // Redirect to homepage or patient dashboard if needed

        } else {
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
