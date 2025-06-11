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

const TermsOfUsePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms of Use</h1>
      <p style={styles.paragraph}>
        By using our platform, you agree to comply with these terms and conditions. Please read them carefully before proceeding.
      </p>

      <h2 style={styles.subheading}>1. User Responsibilities</h2>
      <ul style={styles.list}>
        <li>Provide accurate personal and medical information.</li>
        <li>Use the platform for lawful and legitimate healthcare purposes only.</li>
        <li>Respect the time and availability of medical professionals.</li>
      </ul>

      <h2 style={styles.subheading}>2. Doctor Listings</h2>
      <p style={styles.paragraph}>
        We do not recommend or endorse any specific doctor. All listings are provided based on data available and user reviews.
      </p>

      <h2 style={styles.subheading}>3. Platform Limitations</h2>
      <p style={styles.paragraph}>
        We are a technology platform and do not practice medicine. Consultations and medical advice are provided solely by registered healthcare professionals.
      </p>

      <h2 style={styles.subheading}>4. Termination</h2>
      <p style={styles.paragraph}>
        We reserve the right to suspend or delete any account involved in misuse, fraud, or abuse of services.
      </p>

      <p style={styles.note}>
        These terms are subject to change. Last updated: [Date]
      </p>
    </div>
  );
};

export default TermsOfUsePage;
