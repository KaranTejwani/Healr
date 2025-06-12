import React from "react";
import { useNavigate } from "react-router-dom";
import "./HealthServices.css";

// import images...
import consultImage from "../IMAGES/consult.webp";
import clinicImage from "../IMAGES/clinic.webp";
import labImage from "../IMAGES/Laboratory.jpg";
import surgeryImage from "../IMAGES/surgery.png";
import medicineImage from "../IMAGES/medicine.jpg";

const services = [
  {
    title: "Consult Online",
    description: "Connect with Specialists through Video call.",
    image: consultImage,
  },
  {
    title: "In-Clinic Appointments",
    description: "Book an In-Person visit to doctor's clinic.",
    image: clinicImage,
  },
  {
    title: "Laboratory Tests",
    description: "Avail Exclusive discounts on lab tests.",
    image: labImage,
  },
  {
    title: "Procedures & Surgeries",
    description: "Plan your surgeries at discounted rates.",
    image: surgeryImage,
    route: "/surgery", // 👈 route added
  },
  {
    title: "Medicines",
    description: "Know your medicines better",
    image: medicineImage,
  },
];

const HealthServices = () => {
  const navigate = useNavigate();

  return (
    <div className="health-services container my-5">
      <div className="row justify-content-center gap-3">
        {services.map((service, index) => (
          <div
            className="service-card shadow-sm"
            key={index}
            style={{ cursor: service.route ? "pointer" : "default" }}
            onClick={() => {
              if (service.route) {
                navigate(service.route);
              }
            }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content p-3">
              <h5 className="fw-bold">{service.title}</h5>
              <p className="mb-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthServices;
