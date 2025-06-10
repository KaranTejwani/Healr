import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import fetchSelectedDoctors from './fetchSelectedDoctors';

const specializations = [
  'Dermatologist', 'Physician', 'Cardiologist', 'Dentist', 'Gynecologist',
  'Urologist', 'Gastroenterologist', 'Psychiatrist', 'ENT', 'Orthopedic',
  'Sexologist', 'Neurologist', 'ChildSpecialist', 'Pulmonologist', 'EyeSpecialist',
];

const cities = ['Karachi', 'Lahore', 'Islamabad'];

const DoctorDropdown = ({ onSelect }) => {
  const [showSpecializations, setShowSpecializations] = useState(false);
  const [activeSpecialization, setActiveSpecialization] = useState(null);

  const handleDoctorsClick = () => {
    setShowSpecializations(!showSpecializations);
    setActiveSpecialization(null);
  };

  const handleSpecializationClick = (spec) => {
    setActiveSpecialization((prev) => (prev === spec ? null : spec));
  };

  const handleSelect = async (spec, city) => {
  try {
    const doctors = await fetchSelectedDoctors(spec, city);
    console.log("Selected doctors:", doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
  }
};

  return (
    <div className="position-relative">
      <div
        onClick={handleDoctorsClick}
        className="nav-link nav-underline"
        style={{ cursor: 'pointer' }}
      >
        Doctors
      </div>

      {showSpecializations && (
        <div className="bg-white border shadow p-3 position-absolute" style={{ zIndex: 1000 }}>
          {specializations.map((spec) => (
            <div key={spec}>
              <div
                onClick={() => handleSpecializationClick(spec)}
                style={{
                  cursor: 'pointer',
                  fontWeight: '500',
                  color: '#0033cc',
                  padding: '6px 0',
                }}
              >
                {spec}
              </div>

              {activeSpecialization === spec && (
                <ul style={{ paddingLeft: '15px' }}>
                  {cities.map((city) => (
                    <li
                      key={city}
                      onClick={() => handleSelect(spec, city)}
                      style={{ cursor: 'pointer', padding: '4px 0', listStyle: 'circle' }}
                    >
                      Doctor in {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorDropdown;
