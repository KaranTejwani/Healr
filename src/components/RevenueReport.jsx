import React, { useEffect, useState } from 'react';
import styles from './RevenueReport.module.css';

const RevenueReport = ({ doctor }) => {
  const [revenueData, setRevenueData] = useState({
    totalEarnings: 0,
    monthlyEarnings: 0,
    completedAppointments: 0,
    pendingPayments: 0
  });
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/appointments/doctor/${doctor._id}`
        );
        const appointments = await res.json();
        
        // Process appointments to calculate revenue
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        const processedData = appointments.reduce((acc, appointment) => {
          const appointmentDate = new Date(appointment.appointmentDate);
          const isCompleted = appointment.status === 'completed';
          const isPaid = appointment.isPaid;
          
          // Calculate total earnings
          if (isCompleted) {
            acc.totalEarnings += doctor.profile.fee;
            acc.completedAppointments++;
            
            // Calculate monthly earnings
            if (appointmentDate >= startOfMonth) {
              acc.monthlyEarnings += doctor.profile.fee;
            }
            
            // Track pending payments
            if (!isPaid) {
              acc.pendingPayments += doctor.profile.fee;
            }
          }
          
          return acc;
        }, {
          totalEarnings: 0,
          monthlyEarnings: 0,
          completedAppointments: 0,
          pendingPayments: 0
        });

        setRevenueData(processedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
        setLoading(false);
      }
    };

    if (doctor?._id) fetchRevenueData();
  }, [doctor]);

  if (!doctor) return <div className="p-5">Loading doctor data...</div>;

  return (
    <div className={styles['revenue-report-container']}>
      <div className={styles['revenue-header']}>
        <div className={styles['header-content']}>
          <h2>Revenue Report</h2>
          <p>Track your earnings and payment history</p>
        </div>
        <div className={styles['period-selector']}>
          <button 
            className={selectedPeriod === 'month' ? styles.active : ''}
            onClick={() => setSelectedPeriod('month')}
          >
            This Month
          </button>
          <button 
            className={selectedPeriod === 'all' ? styles.active : ''}
            onClick={() => setSelectedPeriod('all')}
          >
            All Time
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles['loading-state']}>
          <div className={styles['loading-spinner']}></div>
          <p>Loading revenue data...</p>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className={styles['stats-grid']}>
            <div className={styles['stat-card']}>
              <div className={styles['stat-icon']}>💰</div>
              <div className={styles['stat-info']}>
                <h3>₹{selectedPeriod === 'month' ? revenueData.monthlyEarnings : revenueData.totalEarnings}</h3>
                <p>{selectedPeriod === 'month' ? 'This Month' : 'Total Earnings'}</p>
              </div>
            </div>
            <div className={styles['stat-card']}>
              <div className={styles['stat-icon']}>📊</div>
              <div className={styles['stat-info']}>
                <h3>{revenueData.completedAppointments}</h3>
                <p>Completed Appointments</p>
              </div>
            </div>
            <div className={styles['stat-card']}>
              <div className={styles['stat-icon']}>⏳</div>
              <div className={styles['stat-info']}>
                <h3>₹{revenueData.pendingPayments}</h3>
                <p>Pending Payments</p>
              </div>
            </div>
            <div className={styles['stat-card']}>
              <div className={styles['stat-icon']}>💵</div>
              <div className={styles['stat-info']}>
                <h3>₹{doctor.profile.fee}</h3>
                <p>Fee</p>
              </div>
            </div>
          </div>

          {/* Pending Payments */}
          {revenueData.pendingPayments > 0 && (
            <div className={styles['pending-payments-section']}>
              <h3>Pending Payments</h3>
              <div className={styles['pending-payments-alert']}>
                <span className={styles['alert-icon']}>⚠️</span>
                <p>You have ₹{revenueData.pendingPayments} in pending payments</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RevenueReport; 