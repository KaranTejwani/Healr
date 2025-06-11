import React from 'react';

const styles = {
  container: {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    color: '#2D3748',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    borderRadius: '12px',
    lineHeight: '1.7',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '24px',
    borderBottom: '2px solid #E2E8F0',
    paddingBottom: '10px',
    color: '#1A202C',
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginTop: '32px',
    marginBottom: '12px',
    color: '#2B6CB0',
  },
  paragraph: {
    marginBottom: '16px',
    fontSize: '1.05rem',
  },
  note: {
    fontStyle: 'italic',
    fontSize: '0.9rem',
    color: '#4A5568',
  }
};

const DeliveryPolicyPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Delivery Policy</h1>
      <p style={styles.paragraph}>
        Our platform primarily delivers digital healthcare services such as doctor consultations,
        appointment scheduling, and diagnostic reports. Below is our detailed delivery policy for all services offered.
      </p>

      <h2 style={styles.subheading}>1. Appointment Confirmations</h2>
      <p style={styles.paragraph}>
        Appointment bookings are confirmed instantly through in-app notifications, SMS, or email once the payment (if any)
        is processed and the slot is available.
      </p>

      <h2 style={styles.subheading}>2. Lab Reports and Results</h2>
      <p style={styles.paragraph}>
        Diagnostic reports are delivered electronically within the expected timeframe mentioned during booking.
        Users will be notified via email/SMS once the report is available on their dashboard.
      </p>

      <h2 style={styles.subheading}>3. Online Consultations</h2>
      <p style={styles.paragraph}>
        For telemedicine appointments, links are delivered instantly upon confirmation.
        Users are expected to join the call at the scheduled time.
      </p>

      <h2 style={styles.subheading}>4. Service Limitations</h2>
      <p style={styles.paragraph}>
        We do not offer physical delivery of medicines or other offline services.
        Please verify service availability before proceeding with any transaction.
      </p>

      <p style={styles.note}>For assistance, please reach out to our support team.</p>
    </div>
  );
};

export default DeliveryPolicyPage;
