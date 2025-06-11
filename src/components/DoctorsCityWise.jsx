import React from 'react';
import { useNavigate } from 'react-router-dom';

const specializations = [
  'Dermatologist',
  'Gynecologist', 
  'Urologist',
  'Sexologist',
  'Internal Medicine Specialist',
  'Child Specialist',
  'Orthopedic Surgeon',
  'Eye Specialist',
  'ENT Specialist',
  'Cardiologist',
  'Neurologist',
  'Psychiatrist',
  'General Surgeon',
  'Gastroenterologist',
  'Endocrinologist',
  'Nephrologist',
  'Pulmonologist',
  'Oncologist'
];

const cities = ['Lahore', 'Karachi', 'Islamabad'];

const DoctorsCityWise = () => {
  const navigate = useNavigate();

  const handleSelect = (spec, city) => {
    // Navigate with query parameters
    navigate(`/search-results?specialization=${encodeURIComponent(spec)}&city=${encodeURIComponent(city)}`);
  };

  const renderCitySection = (city) => (
    <div 
      key={city} 
      style={{
        flex: 1,
        minWidth: 0,
        marginRight: city !== 'Islamabad' ? '2rem' : 0
      }}
    >
      <h2 
        style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '1.5rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        Doctors in {city}
      </h2>
      
      <div>
        {specializations.map((specialization) => (
          <div
            key={`${city}-${specialization}`}
            onClick={() => handleSelect(specialization, city)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
              cursor: 'pointer',
              borderRadius: '0.25rem',
              transition: 'background-color 0.2s',
              marginBottom: '0.25rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f9fafb';
              const chevron = e.target.querySelector('.chevron');
              const text = e.target.querySelector('.text');
              if (chevron) chevron.style.color = '#2563eb';
              if (text) text.style.color = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              const chevron = e.target.querySelector('.chevron');
              const text = e.target.querySelector('.text');
              if (chevron) chevron.style.color = '#9ca3af';
              if (text) text.style.color = '#6b7280';
            }}
          >
            <span 
              className="chevron"
              style={{
                display: 'inline-block',
                width: '14px',
                height: '14px',
                marginRight: '0.5rem',
                color: '#9ca3af',
                transition: 'color 0.2s',
                flexShrink: 0
              }}
            >
              ›
            </span>
            <span 
              className="text"
              style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
            >
              Best {specialization} in {city}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div 
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: 'white'
      }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}
      >
        {cities.map(city => renderCitySection(city))}
      </div>
    </div>
  );
};

export default DoctorsCityWise;