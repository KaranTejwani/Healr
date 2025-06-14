import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");

  // Doctor-specific fields
  const [specialization, setSpecialization] = useState("");
  const [highestDegree, setHighestDegree] = useState("");
  const [experience, setExperience] = useState("");
  const [fee, setFee] = useState("");
  const [waitTime, setWaitTime] = useState("");
  const [numberOfPatients, setNumberOfPatients] = useState("");
  const [location, setLocation] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }

    const body = {
      name,
      email: emailOrMobile,
      password,
      role: role || "patient",
      ...(role === "doctor" && {
        gender,
        specialization: specialization ? specialization.split(",") : [],
        highestDegree,
        experience,
        fee,
        waitTime,
        numberOfPatients,
        location
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
        console.log("Signup successful", data);
      } else {
        console.error("Signup failed:", data.error || data);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2><span className="brand">healr</span></h2>
        <p>Create your account below:</p>

        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email or Mobile number" value={emailOrMobile} onChange={(e) => setEmailOrMobile(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        
        <select value={role} onChange={(e) => setRole(e.target.value)} className="input-select">
          <option value="">Select Role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>

        {role === "doctor" && (
          <>
            <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <input type="text" placeholder="Specialization (comma-separated)" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
            <input type="text" placeholder="Highest Degree" value={highestDegree} onChange={(e) => setHighestDegree(e.target.value)} />
            <input type="text" placeholder="Experience in years" value={experience} onChange={(e) => setExperience(e.target.value)} />
            <input type="text" placeholder="Fee" value={fee} onChange={(e) => setFee(e.target.value)} />
            <input type="text" placeholder="Wait Time" value={waitTime} onChange={(e) => setWaitTime(e.target.value)} />
            <input type="text" placeholder="Number of Patients Treated" value={numberOfPatients} onChange={(e) => setNumberOfPatients(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </>
        )}

        <button className="login-btn" onClick={handleSignup}>Sign Up</button>

        <p className="signup-link">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;