import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Existing columns */}
        <div className="footer-col">
          <h2 className="brand">
            <span className="highlight">heal</span>r
          </h2>
          <p>
            Book appointments with top doctors and specialists in Pakistan.
            Avail services like MRI, CT scan, Ultrasound, X-Ray, and video
            consultations.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Delivery Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#">Payment Terms</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Major Cities</h4>
          <ul>
            <li>
              <a href="#">Karachi</a>
            </li>
            <li>
              <a href="#">Lahore</a>
            </li>
            <li>
              <a href="#">Islamabad</a>
            </li>
            <li>
              <a href="#">Rawalpindi</a>
            </li>
            <li>
              <a href="#">Multan</a>
            </li>
            <li>
              <a href="#">Peshawar</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Top Hospitals</h4>
          <ul>
            <li>
              <a href="#">Doctors Hospital</a>
            </li>
            <li>
              <a href="#">Shifa International</a>
            </li>
            <li>
              <a href="#">Fatima Memorial</a>
            </li>
            <li>
              <a href="#">South City Hospital</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Lab Tests</h4>
          <ul>
            <li>
              <a href="#">MRI in Lahore</a>
            </li>
            <li>
              <a href="#">CT Scan</a>
            </li>
            <li>
              <a href="#">X-Ray</a>
            </li>
            <li>
              <a href="#">Ultrasound</a>
            </li>
          </ul>
        </div>

        {/* New Connect with Us column */}
        {/* Connect with us - single line with icons */}
        <div className="footer-col">
          <h4>Connect with us</h4>
          <div className="connect-inline">
            <a href="mailto:support@healr.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+922100000000" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
