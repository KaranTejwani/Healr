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
  list: {
    paddingLeft: '24px',
    marginBottom: '16px',
    fontSize: '1.05rem',
    listStyleType: 'disc',
  },
  note: {
    fontStyle: 'italic',
    fontSize: '0.9rem',
    color: '#4A5568',
  }
};

const RefundPolicyPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Refund Policy</h1>
      <p style={styles.paragraph}>
        We strive to ensure a smooth and satisfying experience for our users. However, in certain situations, you may be eligible for a refund. This policy explains how refunds work on our platform.
      </p>

      <h2 style={styles.subheading}>1. Eligibility for Refund</h2>
      <ul style={styles.list}>
        <li>If a doctor cancels the appointment unexpectedly.</li>
        <li>If the user cancels at least 24 hours before the scheduled time.</li>
        <li>In the case of technical failures or duplicate payments.</li>
      </ul>

      <h2 style={styles.subheading}>2. Refund Process</h2>
      <p style={styles.paragraph}>
        Once a refund is approved, it will be processed within 5–7 business days to the original payment method. Users will be notified via email or SMS.
      </p>

      <h2 style={styles.subheading}>3. Non-Refundable Situations</h2>
      <ul style={styles.list}>
        <li>Late cancellations (less than 24 hours before appointment).</li>
        <li>No-shows or missed appointments.</li>
        <li>Refund requests without valid reason or documentation.</li>
      </ul>

      <p style={styles.note}>
        Note: We reserve the right to make final decisions on refunds.
      </p>
    </div>
  );
};

export default RefundPolicyPage;
