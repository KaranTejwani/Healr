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
  },
  bold: {
    fontWeight: '600',
    color: '#1A202C',
  }
};

const AboutUsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our healthcare platform — your trusted partner in finding qualified medical professionals with ease.
        We are dedicated to revolutionizing the healthcare experience by making it more accessible, transparent, and user-centered.
        With a focus on convenience, accuracy, and trust, we connect patients with doctors, specialists, and clinics across the country.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.paragraph}>
        Our mission is to empower patients by providing seamless access to healthcare services.
        We believe everyone deserves a smooth and stress-free journey when it comes to managing their health.
        Whether you're searching for a general physician, a specialized consultant, or diagnostic services,
        we make healthcare approachable through digital innovation.
      </p>

      <h2 style={styles.subheading}>What We Offer</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Appointment booking with licensed doctors and specialists.</li>
        <li style={styles.listItem}>Verified patient reviews to help make informed choices.</li>
        <li style={styles.listItem}>Location-based filtering and specialty-based search.</li>
        <li style={styles.listItem}>Secure access to lab test bookings and results.</li>
        <li style={styles.listItem}>Doctor availability and real-time consultation slots.</li>
        <li style={styles.listItem}>Telemedicine and online consultations where available.</li>
      </ul>

      <h2 style={styles.subheading}>Our Story</h2>
      <p style={styles.paragraph}>
        Founded by a group of passionate individuals who experienced the pain points of traditional healthcare firsthand,
        our platform was built to solve real-world problems. From long waiting queues to lack of verified information about doctors,
        we identified the gaps and aimed to bridge them using modern technology and a user-friendly interface.
      </p>
      <p style={styles.paragraph}>
        Today, we serve thousands of patients every month and are rapidly growing our network of healthcare providers.
        Our commitment to innovation, transparency, and quality care continues to fuel our growth and refine our services.
      </p>

      <h2 style={styles.subheading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <span style={styles.bold}>User-Centric Design:</span> Everything is designed keeping the patient experience at the forefront.
        </li>
        <li style={styles.listItem}>
          <span style={styles.bold}>Verified Professionals:</span> All healthcare providers are carefully vetted and reviewed.
        </li>
        <li style={styles.listItem}>
          <span style={styles.bold}>Real-Time Availability:</span> Book appointments instantly with real-time calendar integration.
        </li>
        <li style={styles.listItem}>
          <span style={styles.bold}>Data Security:</span> We strictly follow data privacy and healthcare compliance protocols.
        </li>
        <li style={styles.listItem}>
          <span style={styles.bold}>24/7 Support:</span> Our support team is always ready to assist you with queries and concerns.
        </li>
      </ul>

      <h2 style={styles.subheading}>Our Vision for the Future</h2>
      <p style={styles.paragraph}>
        We envision a future where healthcare is not a privilege but a basic right for everyone, regardless of location, income, or background.
        Our goal is to create a system where a doctor is just a click away, where medical advice is quick and reliable,
        and where booking a consultation is as easy as ordering a meal online.
      </p>

      <h2 style={styles.subheading}>Get in Touch</h2>
      <p style={styles.paragraph}>
        We are always open to feedback, partnerships, and ideas that can help us grow and serve better.
        Feel free to reach out to our team for support, collaborations, or to join our expanding network of medical professionals.
      </p>
      <p style={styles.paragraph}>
        Thank you for trusting us with your health — we are honored to be a part of your healthcare journey.
      </p>
    </div>
  );
};

export default AboutUsPage;
