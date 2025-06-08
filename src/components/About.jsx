import React from "react";
import "./About.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>;

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>
            About
            <span
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                color: "#4CAF50",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <i
                className="fas fa-heartbeat"
                style={{ marginRight: "8px", color: "red" }}
              ></i>{" "}
            </span>
          </h2>
          <p>
            <strong>Healr</strong> is your trusted digital healthcare companion
            in Pakistan. We connect patients with top doctors, hospitals, and
            diagnostic labs all in just a few clicks. Whether you're booking
            appointments, scheduling lab tests, or opting for video
            consultations,
            <strong> Healr </strong> brings healthcare to your fingertips.
          </p>
          <p>
            Our mission is to make quality healthcare accessible, affordable,
            and seamless for everyone, everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
