import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        We value your feedback, suggestions, and inquiries. Our support team is available 7 days a week to assist you with appointments, accounts, or general questions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Support Channels</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Email:</strong> support@yourplatform.com</li>
        <li><strong>Phone:</strong> +92-xxx-xxxxxxx</li>
        <li><strong>Live Chat:</strong> Available in the bottom-right corner during working hours</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Office Address</h2>
      <p className="mb-4">
        1st Floor, TechPark Building,<br />
        Karachi, Sindh, Pakistan<br />
        Zip Code: 74000
      </p>

      <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
      <p className="mb-4">
        Monday – Saturday: 9:00 AM – 6:00 PM<br />
        Sunday: Closed
      </p>

      <p>
        For collaboration or business opportunities, please write to us at <a href="mailto:partnerships@yourplatform.com" className="text-blue-600">partnerships@yourplatform.com</a>.
      </p>
    </div>
  );
};

export default ContactUs;
