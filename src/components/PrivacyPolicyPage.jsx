import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our platform.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect both personal and non-personal information such as your name, contact number, email, date of birth, location, medical history, appointment records, and more. This data helps us provide personalized healthcare services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To schedule appointments and send confirmations</li>
        <li>To communicate important updates and notifications</li>
        <li>To improve platform usability and service quality</li>
        <li>For internal analytics and reporting</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not sell or rent your data to third parties. We may share limited information with verified doctors, clinics, or diagnostic centers solely for appointment or service fulfillment purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
      <p className="mb-4">
        Your data is stored securely using encryption protocols and industry-standard security practices. We take full measures to prevent unauthorized access or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, although it may affect certain features.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. User Consent</h2>
      <p className="mb-4">
        By using our services, you consent to the terms of this Privacy Policy. You may request to delete or update your data anytime by contacting us.
      </p>

      <p className="italic text-sm">Last updated: [Date]</p>
    </div>
  );
};

export default PrivacyPolicy;
