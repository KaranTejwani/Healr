import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">
        We strive to ensure a smooth and satisfying experience for our users. However, in certain situations, you may be eligible for a refund. This policy explains how refunds work on our platform.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Eligibility for Refund</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>If a doctor cancels the appointment unexpectedly.</li>
        <li>If the user cancels at least 24 hours before the scheduled time.</li>
        <li>In the case of technical failures or duplicate payments.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2. Refund Process</h2>
      <p className="mb-4">
        Once a refund is approved, it will be processed within 5–7 business days to the original payment method. Users will be notified via email or SMS.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Non-Refundable Situations</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Late cancellations (less than 24 hours before appointment).</li>
        <li>No-shows or missed appointments.</li>
        <li>Refund requests without valid reason or documentation.</li>
      </ul>

      <p className="italic text-sm">Note: We reserve the right to make final decisions on refunds.</p>
    </div>
  );
};

export default RefundPolicy;
