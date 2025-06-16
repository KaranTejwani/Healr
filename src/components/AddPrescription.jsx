import React from "react";
import "./AddPrescription.css";

const AddPrescription = () => {
  return (
    <div className="add-prescription-wrapper">
      <div className="add-prescription-card">
        {/* Patient Details Section */}
        <div className="add-prescription-row">
          <select className="add-prescription-input" defaultValue="">
            <option value="" disabled hidden>Select hospital *</option>
            <option value="Hospital A">Hospital A</option>
            <option value="Hospital B">Hospital B</option>
          </select>
          <input type="text" placeholder="Phone number *" className="add-prescription-input" />
          <input type="text" placeholder="Patient's name *" className="add-prescription-input" />
          <select className="add-prescription-input" defaultValue="">
            <option value="" disabled hidden>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="number" placeholder="Age (years)" className="add-prescription-input" />
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">ADD MEDICAL RECORD</button>
          <button className="tab">PREVIOUS MEDICAL RECORDS(0)</button>
        </div>

        {/* Form and Sidebar */}
        <div className="add-prescription-row">
          {/* Main Form */}
          <div style={{ flex: 3 }}>
            <h3 className="label">Symptoms</h3>

            <h3 className="label">Follow-up after</h3>
            <div className="followup-row">
              {["3 Days", "5 Days", "1 Week", "2 Weeks", "1 Month", "Select date & time"].map((label) => (
                <button key={label} className="chip">{label}</button>
              ))}
            </div>

            <div className="add-prescription-row">
              <select className="add-prescription-input" style={{ flex: 2 }}>
                <option>Choose a service</option>
              </select>
              <input type="number" value="0" className="add-prescription-input" style={{ flex: 1 }} />
            </div>

            <div className="add-prescription-row" style={{ justifyContent: "flex-end", marginTop: "1rem" }}>
              <button className="disabled-button">SAVE</button>
              <button className="disabled-button">SAVE & PRINT</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="card-box">
              <h4>Templates</h4>
              <p style={{ fontSize: "0.9rem" }}>Save this prescription as a template</p>
              <input type="text" placeholder="Enter template name" className="add-prescription-input" />
              <button className="disabled-button">SAVE AS TEMPLATE</button>
            </div>

            <div className="card-box">
              <h4>Suggestions</h4>
              <p style={{ fontSize: "0.9rem" }}>Suggestions will appear here once you select a field</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
