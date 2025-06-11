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

const PrivacyPolicyPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        Your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our platform.
      </p>

      <h2 style={styles.subheading}>1. Information We Collect</h2>
      <p style={styles.paragraph}>
        We collect both personal and non-personal information such as your name, contact number, email, date of birth, location, medical history, appointment records, and more. This data helps us provide personalized healthcare services.
      </p>

      <h2 style={styles.subheading}>2. How We Use Your Information</h2>
      <ul style={styles.list}>
        <li>To schedule appointments and send confirmations</li>
        <li>To communicate important updates and notifications</li>
        <li>To improve platform usability and service quality</li>
        <li>For internal analytics and reporting</li>
      </ul>

      <h2 style={styles.subheading}>3. Sharing and Disclosure</h2>
      <p style={styles.paragraph}>
        We do not sell or rent your data to third parties. We may share limited information with verified doctors, clinics, or diagnostic centers solely for appointment or service fulfillment purposes.
      </p>

      <h2 style={styles.subheading}>4. Data Security</h2>
      <p style={styles.paragraph}>
        Your data is stored securely using encryption protocols and industry-standard security practices. We take full measures to prevent unauthorized access or disclosure.
      </p>

      <h2 style={styles.subheading}>5. Cookies</h2>
      <p style={styles.paragraph}>
        Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, although it may affect certain features.
      </p>

      <h2 style={styles.subheading}>6. User Consent</h2>
      <p style={styles.paragraph}>
        By using our services, you consent to the terms of this Privacy Policy. You may request to delete or update your data anytime by contacting us.
      </p>

      <p style={styles.note}>Last updated: [Date]</p>
    </div>
  );
};

export default PrivacyPolicyPage;
