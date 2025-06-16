import React, { useRef } from "react";
import "./PopularLabs.css";
import { useNavigate } from "react-router-dom";

const PopularLabs = ({ labs = [], onLabSelect }) => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (!Array.isArray(labs) || labs.length === 0) {
    return <p className="text-muted">No labs available.</p>;
  }

  return (
    <div className="popular-labs-container my-4">
      <h4 className="fw-semibold mb-3 text-dark">Popular Labs</h4>

      <div className="scroll-wrapper position-relative">
        <button className="arrow left" onClick={() => scroll("left")}>
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="lab-cards-wrapper d-flex" ref={scrollRef}>
          {labs.map((lab, index) => {
            const name = lab?.labName || "Unknown Lab";
            return (
              <div
                className="lab-card"
                key={index}
                onClick={() => navigate(`/lab/${encodeURIComponent(name)}`)}
              >
                <h6 className="lab-title mt-2">{name}</h6>
                <div className="badges d-flex flex-column align-items-start">
                  <span className="badge discount mb-1">🎯 20% off</span>
                  <span className="badge home">🏠 Free Home Sample</span>
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PopularLabs;
