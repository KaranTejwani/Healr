import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorDashboard = ({ doctorId }) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/doctors/${doctorId}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.error("Error fetching doctor data:", err));
  }, [doctorId]);

  if (!doctor) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 border-r">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">my<span className="text-black">Practice</span></h1>
        <nav className="space-y-4">
          <button className="w-full text-left bg-orange-500 text-white px-4 py-2 rounded">Appointments</button>
          <button className="w-full text-left text-gray-700 hover:text-indigo-600">Revenue Report</button>
          <button className="w-full text-left text-gray-700 hover:text-indigo-600">Patients</button>
          <button className="w-full text-left text-gray-700 hover:text-indigo-600">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Welcome, {doctor.Name} 👋</h2>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="font-semibold">{doctor.Name}</p>
              <p className="text-sm text-gray-500">Doctor</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap gap-3 items-center">
          <input type="date" className="border rounded px-3 py-2" />
          <select className="border rounded px-3 py-2">
            <option>All Appointments</option>
          </select>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">Add Prescription</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Add Patient</button>
        </div>

        {/* Table */}
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-left">
            <thead className="text-sm text-gray-600 border-b">
              <tr>
                <th className="py-2">MR #</th>
                <th>Patient</th>
                <th>Appt Time</th>
                <th>Type</th>
                <th>Arrived</th>
                <th>Checked</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-sm text-gray-500">
                <td colSpan="7" className="py-4">
                  No appointments found. If you have applied any filters, try to remove or change them.
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <div>
              Rows per page:{" "}
              <select className="border ml-1 rounded px-1 py-0.5">
                <option>10</option>
                <option>25</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 cursor-not-allowed">&lt;</button>
              <button className="text-gray-400 cursor-not-allowed">&gt;</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
