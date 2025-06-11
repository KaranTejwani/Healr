import { useLocation, Navigate } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard";

const DoctorDashboardWrapper = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;

  // Redirect to login if doctor data is not found
  if (!doctor) return <Navigate to="/" replace />;

  return <DoctorDashboard doctor={doctor} />;
};

export default DoctorDashboardWrapper
