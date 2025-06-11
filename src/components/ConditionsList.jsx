import React from "react";
import "./ConditionsList.css";

import Acne from "../assets/conditions/acne.png";
import Diarrhea from "../assets/conditions/diarrhea.png";
import Fever from "../assets/conditions/fever.png";
import HeartAttack from "../assets/conditions/heart-attack.png";
import HighBloodPressure from "../assets/conditions/high-blood-pressure.png";
import Piles from "../assets/conditions/piles.png";
import Pregnancy from "../assets/conditions/pregnancy.png"; // Corrected

const conditions = [
  { name: "Acne", icon: Acne },
  { name: "Diarrhea", icon: Diarrhea },
  { name: "Fever", icon: Fever },
  { name: "Heart Attack", icon: HeartAttack },
  { name: "High Blood Pressure", icon: HighBloodPressure },
  { name: "Piles", icon: Piles },
  { name: "Pregnancy", icon: Pregnancy },
];

const ConditionsList = () => {
  return (
    <div className="conditions-container">
      <div className="conditions-header">
        <h2>Search doctor by Conditions</h2>
        <a href="/conditions" className="view-all-link">View All</a>
      </div>
      <div className="conditions-grid">
        {conditions.map((condition, index) => (
          <div className="condition-card" key={index}>
            <div className="condition-icon">
              <img src={condition.icon} alt={condition.name} />
            </div>
            <p className="condition-name">{condition.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionsList;
