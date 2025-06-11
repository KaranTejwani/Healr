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
    paddingLeft: '20px',
    marginBottom: '16px',
  },
  listItem: {
    marginBottom: '8px',
    fontSize: '1.05rem',
  },
  link: {
    color: '#2B6CB0',
    textDecoration: 'none',
  },
  bold: {
    fontWeight: '600',
    color: '#1A202C',
  }
};

const ContactUsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.paragraph}>
        We value your feedback, suggestions, and inquiries. Our support team is available 7 days a week to assist you with appointments, accounts, or general questions.
      </p>

      <h2 style={styles.subheading}>Support Channels</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <span style={styles.bold}>Email:</span> support@yourplatform.com
        </li>
        <li style={styles.listItem}>
          <span style={styles.bold}>Phone:</span> +92-xxx-xxxxxxx
        </li>
        <li style={styles.listItem}>
          <span style={styles.bold}>Live Chat:</span> Available in the bottom-right corner during working hours
        </li>
      </ul>

      <h2 style={styles.subheading}>Office Address</h2>
      <p style={styles.paragraph}>
        1st Floor, TechPark Building,<br />
        Karachi, Sindh, Pakistan<br />
        Zip Code: 74000
      </p>

      <h2 style={styles.subheading}>Business Hours</h2>
      <p style={styles.paragraph}>
        Monday – Saturday: 9:00 AM – 6:00 PM<br />
        Sunday: Closed
      </p>

      <p style={styles.paragraph}>
        For collaboration or business opportunities, please write to us at{' '}
        <a href="mailto:partnerships@yourplatform.com" style={styles.link}>
          partnerships@yourplatform.com
        </a>.
      </p>
    </div>
  );
};

export default ContactUsPage;
