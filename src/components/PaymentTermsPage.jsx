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

const PaymentTermsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Terms</h1>
      <p style={styles.paragraph}>
        These terms govern all transactions made through our platform. We ensure secure payment processing and full transparency in billing.
      </p>

      <h2 style={styles.subheading}>1. Accepted Payment Methods</h2>
      <p style={styles.paragraph}>
        We accept credit/debit cards, digital wallets, bank transfers, and any other method visible on the payment page. All payments are processed through secure gateways.
      </p>

      <h2 style={styles.subheading}>2. Payment Confirmation</h2>
      <p style={styles.paragraph}>
        A confirmation email/SMS is sent immediately upon successful transaction. Users can also view the receipt in their profile dashboard.
      </p>

      <h2 style={styles.subheading}>3. Pricing Policy</h2>
      <p style={styles.paragraph}>
        Service prices are clearly mentioned on the website. The platform is not responsible for any price difference quoted offline by clinics or doctors.
      </p>

      <h2 style={styles.subheading}>4. Failed Transactions</h2>
      <p style={styles.paragraph}>
        In case of a failed payment, no amount will be deducted. If an amount is debited but the service is not booked, it will be auto-refunded within 3–5 business days.
      </p>

      <p style={styles.note}>
        We recommend saving the transaction ID for future reference.
      </p>
    </div>
  );
};

export default PaymentTermsPage;
