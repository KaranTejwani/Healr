import React from 'react';

const DeliveryPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Delivery Policy</h1>
      <p className="mb-4">
        Our platform primarily delivers digital healthcare services such as doctor consultations, appointment scheduling, and diagnostic reports. Below is our detailed delivery policy for all services offered.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Appointment Confirmations</h2>
      <p className="mb-4">
        Appointment bookings are confirmed instantly through in-app notifications, SMS, or email once the payment (if any) is processed and the slot is available.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Lab Reports and Results</h2>
      <p className="mb-4">
        Diagnostic reports are delivered electronically within the expected timeframe mentioned during booking. Users will be notified via email/SMS once the report is available on their dashboard.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Online Consultations</h2>
      <p className="mb-4">
        For telemedicine appointments, links are delivered instantly upon confirmation. Users are expected to join the call at the scheduled time.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Service Limitations</h2>
      <p className="mb-4">
        We do not offer physical delivery of medicines or other offline services. Please verify service availability before proceeding with any transaction.
      </p>

      <p className="italic text-sm">For assistance, please reach out to our support team.</p>
    </div>
  );
};

export default DeliveryPolicy;
