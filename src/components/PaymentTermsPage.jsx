import React from 'react';

const PaymentTerms = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Payment Terms</h1>
      <p className="mb-4">
        These terms govern all transactions made through our platform. We ensure secure payment processing and full transparency in billing.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Accepted Payment Methods</h2>
      <p className="mb-4">
        We accept credit/debit cards, digital wallets, bank transfers, and any other method visible on the payment page. All payments are processed through secure gateways.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Payment Confirmation</h2>
      <p className="mb-4">
        A confirmation email/SMS is sent immediately upon successful transaction. Users can also view the receipt in their profile dashboard.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Pricing Policy</h2>
      <p className="mb-4">
        Service prices are clearly mentioned on the website. The platform is not responsible for any price difference quoted offline by clinics or doctors.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Failed Transactions</h2>
      <p className="mb-4">
        In case of a failed payment, no amount will be deducted. If an amount is debited but the service is not booked, it will be auto-refunded within 3–5 business days.
      </p>

      <p className="italic text-sm">We recommend saving the transaction ID for future reference.</p>
    </div>
  );
};

export default PaymentTerms;
