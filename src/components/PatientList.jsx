import React, { useEffect, useState } from 'react';
import styles from './PatientList.module.css';

const PatientList = ({ doctor }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/appointments/doctor/${doctor._id}`
        );
        const appointments = await res.json();
        
        // Process appointments to get unique patients with visit counts
        const patientMap = new Map();
        
        appointments.forEach(appointment => {
          if (appointment.patient) {
            const patientId = appointment.patient._id;
            if (!patientMap.has(patientId)) {
              patientMap.set(patientId, {
                ...appointment.patient,
                visitCount: 1,
                lastVisit: appointment.appointmentDate,
                appointments: [appointment]
              });
            } else {
              const patient = patientMap.get(patientId);
              patient.visitCount++;
              patient.appointments.push(appointment);
              // Update last visit if this appointment is more recent
              if (new Date(appointment.appointmentDate) > new Date(patient.lastVisit)) {
                patient.lastVisit = appointment.appointmentDate;
              }
            }
          }
        });

        // Convert Map to Array and sort by last visit date
        const patientsArray = Array.from(patientMap.values())
          .sort((a, b) => new Date(b.lastVisit) - new Date(a.lastVisit));
        
        setPatients(patientsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patients:", error);
        setLoading(false);
      }
    };

    if (doctor?._id) fetchPatients();
  }, [doctor]);

  if (!doctor) return <div className="p-5">Loading doctor data...</div>;

  return (
    <div className={styles['patient-list-container']}>
      <div className={styles['patient-list-header']}>
        <h2>Patient History</h2>
        <p>View all patients who have visited your practice</p>
      </div>

      {loading ? (
        <div className={styles['loading-state']}>
          <div className={styles['loading-spinner']}></div>
          <p>Loading patient data...</p>
        </div>
      ) : patients.length === 0 ? (
        <div className={styles['empty-state']}>
          <p>No patients have visited yet</p>
        </div>
      ) : (
        <div className={styles['patients-grid']}>
          {patients.map((patient) => (
            <div key={patient._id} className={styles['patient-card']}>
              <div className={styles['patient-header']}>
                <div className={styles['patient-avatar']}>
                  {patient.name.charAt(0).toUpperCase()}
                </div>
                <div className={styles['patient-info']}>
                  <h3>{patient.name}</h3>
                  <p className={styles['patient-email']}>{patient.email}</p>
                </div>
              </div>
              
              <div className={styles['patient-stats']}>
                <div className={styles['stat-item']}>
                  <span className={styles['stat-icon']}>🏥</span>
                  <div className={styles['stat-details']}>
                    <span className={styles['stat-value']}>{patient.visitCount}</span>
                    <span className={styles['stat-label']}>Total Visits</span>
                  </div>
                </div>
                <div className={styles['stat-item']}>
                  <span className={styles['stat-icon']}>📅</span>
                  <div className={styles['stat-details']}>
                    <span className={styles['stat-value']}>
                      {new Date(patient.lastVisit).toLocaleDateString()}
                    </span>
                    <span className={styles['stat-label']}>Last Visit</span>
                  </div>
                </div>
              </div>

              <div className={styles['visit-history']}>
                <h4>Recent Visits</h4>
                <div className={styles['history-list']}>
                  {patient.appointments.slice(0, 3).map((appointment) => (
                    <div key={appointment._id} className={styles['history-item']}>
                      <span className={styles['visit-date']}>
                        {new Date(appointment.appointmentDate).toLocaleDateString()}
                      </span>
                      <span className={`${styles['visit-status']} ${styles[appointment.status.toLowerCase()]}`}>
                        {appointment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientList; 