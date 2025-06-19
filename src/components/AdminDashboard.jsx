import React, { useEffect, useState } from 'react';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Doctor Verification');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchDoctors = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/doctorAccounts/admin/all');
    const data = await res.json();
    setDoctors(data);
    setLoading(false);
  };

  useEffect(() => {
    if (activeSection === 'Doctor Verification') {
      fetchDoctors();
    }
  }, [activeSection]);

  const handleVerify = async (doctorId, currentStatus) => {
    await fetch(`http://localhost:5000/api/doctorAccounts/admin/verify/${doctorId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verified: !currentStatus }),
    });
    fetchDoctors();
  };

  const sidebarOptions = [
    'Doctor Verification',
    'Manage Users',
    'Manage Appointments',
    'Reports',
    'Settings',
  ];

  const filteredDoctors = doctors.filter(doc => {
    const q = search.toLowerCase();
    return (
      doc.name?.toLowerCase().includes(q) ||
      doc.email?.toLowerCase().includes(q) ||
      doc.profile?.specialization?.join(', ').toLowerCase().includes(q)
    );
  });

  const renderContent = () => {
    if (activeSection !== 'Doctor Verification') {
      return <h2>{activeSection} <span style={{ fontWeight: 400, fontSize: '0.9rem' }}>Coming soon...</span></h2>;
    }

    return (
      <div>
        <h2>Doctor Verification</h2>
        <p>Review and verify doctors. Only verified doctors appear in search results.</p>
        <input
          type="text"
          placeholder="Search doctors by name, email, or specialization..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
          style={{ marginBottom: '1rem', width: '100%', maxWidth: 350 }}
        />
        {loading ? (
          <p>Loading doctors...</p>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Specialization</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doc) => (
                  <tr key={doc._id}>
                    <td>
                      {doc.profile?.profilePicture ? (
                        <img src={doc.profile.profilePicture} alt="Profile" className={styles.profilePic} />
                      ) : (
                        <div className={styles.placeholder}>
                          {doc.name?.[0] || '?'}
                        </div>
                      )}
                    </td>
                    <td>{doc.name}</td>
                    <td className={styles.emailCell} title={doc.email}>{doc.email}</td>
                    <td>{doc.profile?.specialization?.join(', ')}</td>
                    <td>
                      {doc.profile?.verified ? (
                        <span className={styles.statusVerified}>Verified</span>
                      ) : (
                        <span className={styles.statusUnverified}>Not Verified</span>
                      )}
                    </td>
                    <td className={styles.actionCell}>
                      <button
                        onClick={() => handleVerify(doc._id, doc.profile?.verified)}
                        className={doc.profile?.verified ? styles.unverifyBtn : styles.verifyBtn}
                      >
                        {doc.profile?.verified ? '❌ Unverify' : '✅ Verify'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Admin <span className={styles.textWarning}>Dashboard</span>
        </div>
        <nav className={styles.nav}>
          {sidebarOptions.map((option) => (
            <button
              key={option}
              className={`${styles.navButton} ${activeSection === option ? styles.active : ''}`}
              onClick={() => setActiveSection(option)}
            >
              {option}
            </button>
          ))}
        </nav>
      </aside>
      <main className={styles.main}>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
