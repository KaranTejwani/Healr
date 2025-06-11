import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">
        By using our platform, you agree to comply with these terms and conditions. Please read them carefully before proceeding.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Provide accurate personal and medical information.</li>
        <li>Use the platform for lawful and legitimate healthcare purposes only.</li>
        <li>Respect the time and availability of medical professionals.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2. Doctor Listings</h2>
      <p className="mb-4">
        We do not recommend or endorse any specific doctor. All listings are provided based on data available and user reviews.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Platform Limitations</h2>
      <p className="mb-4">
        We are a technology platform and do not practice medicine. Consultations and medical advice are provided solely by registered healthcare professionals.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or delete any account involved in misuse, fraud, or abuse of services.
      </p>

      <p className="italic text-sm">These terms are subject to change. Last updated: [Date]</p>
    </div>
  );
};

export default TermsOfUse;
