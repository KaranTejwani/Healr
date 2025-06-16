import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaUserMd, FaClinicMedical, FaHeartbeat, FaChartLine, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1 px-4 py-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-700 mb-6"
        >
          About Healr
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 leading-8 mb-6"
        >
          Healr is Pakistan’s innovative digital healthcare platform designed to connect patients with top-tier medical professionals and diagnostic services. Our goal is to bridge the gap between accessible healthcare and those who need it most.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            className="bg-white shadow rounded-2xl p-6 flex items-start gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <FaUserMd className="text-indigo-600 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">Verified Doctors</h2>
              <p className="text-gray-600">
                View detailed profiles, specialties, and qualifications to choose the right professional.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded-2xl p-6 flex items-start gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <FaClinicMedical className="text-indigo-600 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">Lab & Surgery Listings</h2>
              <p className="text-gray-600">
                Browse diagnostic tests and procedures with complete transparency and online booking.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded-2xl p-6 flex items-start gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <FaHeartbeat className="text-indigo-600 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">Patient-first Platform</h2>
              <p className="text-gray-600">
                Book appointments, access digital prescriptions, and manage your health easily online.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded-2xl p-6 flex items-start gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <FaChartLine className="text-indigo-600 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">Empowering Doctors</h2>
              <p className="text-gray-600">
                Clinics and doctors can manage their patients, appointments, and reach more people.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 leading-8 mb-8"
        >
          Healr exists to make quality healthcare accessible to every Pakistani. From smart filtering of doctors to convenient lab booking and prescription management, we’re building a future where healthcare works for everyone.
        </motion.p>

        <div className="bg-indigo-100 rounded-xl p-6 text-center">
          <FaUsers className="text-indigo-600 text-4xl mx-auto mb-2" />
          <h3 className="text-2xl font-semibold text-indigo-800">Join the Healr Movement</h3>
          <p className="text-gray-700 mt-2 mb-4">
            Whether you're a patient or a provider, Healr is your partner in transforming healthcare.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;