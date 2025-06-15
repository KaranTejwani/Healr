import React from "react";
import styles from "./AddPrescription.module.css";

const AddPrescription = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Patient Details Section */}
        <div className={styles.row}>
          <select className={styles.input} defaultValue="">
            <option value="" disabled hidden>Select hospital *</option>
            <option value="Hospital A">Hospital A</option>
            <option value="Hospital B">Hospital B</option>
          </select>
          <input type="text" placeholder="Phone number *" className={styles.input} />
          <input type="text" placeholder="Patient's name *" className={styles.input} />
          <select className={styles.input} defaultValue="">
            <option value="" disabled hidden>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="number" placeholder="Age (years)" className={styles.input} />
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>ADD MEDICAL RECORD</button>
          <button className={styles.tab}>PREVIOUS MEDICAL RECORDS(0)</button>
        </div>

        {/* Form and Sidebar */}
        <div className={styles.row}>
          {/* Main Form */}
          <div style={{ flex: 3 }}>
            <h3 className={styles.label}>Symptoms</h3>

            <h3 className={styles.label}>Follow-up after</h3>
            <div className={styles.followupRow}>
              {["3 Days", "5 Days", "1 Week", "2 Weeks", "1 Month", "Select date & time"].map((label) => (
                <button key={label} className={styles.chip}>{label}</button>
              ))}
            </div>

            <div className={styles.row}>
              <select className={styles.input} style={{ flex: 2 }}>
                <option>Choose a service</option>
              </select>
              <input type="number" value="0" className={styles.input} style={{ flex: 1 }} />
            </div>

            <div className={styles.row} style={{ justifyContent: "flex-end", marginTop: "1rem" }}>
              <button className={styles.disabledButton}>SAVE</button>
              <button className={styles.disabledButton}>SAVE & PRINT</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.cardBox}>
              <h4>Templates</h4>
              <p style={{ fontSize: "0.9rem" }}>Save this prescription as a template</p>
              <input type="text" placeholder="Enter template name" className={styles.input} />
              <button className={styles.disabledButton}>SAVE AS TEMPLATE</button>
            </div>

            <div className={styles.cardBox}>
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
