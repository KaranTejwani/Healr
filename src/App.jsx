import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HealthServices from "./components/HealthServices";
import DoctorsList from "./components/DoctorsList";
import Footer from "./components/Footer";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Testimonials from "./components/Testimonials";
import SearchResultsPage from "./components/SearchResultsPage";
import DoctorDashboardWrapper from "./components/DoctorDashboardWrapper";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import DeliveryPolicyPage from "./components/DeliveryPolicyPage";
import RefundPolicyPage from "./components/RefundPolicyPage";
import PaymentTermsPage from "./components/PaymentTermsPage";
import ContactUsPage from "./components/ContactUsPage";
import ConditionsList from "./components/ConditionsList";
import DoctorsCityWise from "./components/DoctorsCityWise";
import SurgerySection from "./components/Surgeries";
import CartPage from "./components/Cartpage";
import DrugSearchPage from "./components/DrugCard";
import BookAppointment from "./components/BookAppointment";
import InClinicAppointments from "./components/InClinicAppointments";
import LaboratoryTests from "./components/LaboratoryTests";
// import AddPrescription from "./components/AddPrescription";
function App() {
  const [patient, setPatient] = useState(null);

  const [cart, setCart] = useState([]);
  const [doctor, setDoctor] = useState(null); // ✅ Doctor login state

  // Load patient and doctor from localStorage and listen to changes
  useEffect(() => {
    const storedPatient = localStorage.getItem("patient");
    const storedDoctor = localStorage.getItem("doctor");

    if (storedPatient) {
      try {
        setPatient(JSON.parse(storedPatient));
      } catch (e) {
        console.error("Invalid patient JSON in localStorage", e);
      }
    }

    if (storedDoctor) {
      try {
        setDoctor(JSON.parse(storedDoctor));
      } catch (e) {
        console.error("Invalid doctor JSON in localStorage", e);
      }
    }

    // Sync login state across tabs
    const handleStorageChange = () => {
      const updatedPatient = localStorage.getItem("patient");
      const updatedDoctor = localStorage.getItem("doctor");

      setPatient(updatedPatient ? JSON.parse(updatedPatient) : null);
      setDoctor(updatedDoctor ? JSON.parse(updatedDoctor) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      {/* ✅ Send both patient and doctor state to Navbar */}
      <AppNavbar
        patient={patient}
        setPatient={setPatient}
        doctor={doctor}
        setDoctor={setDoctor}
      />
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HealthServices />
              <DoctorsList />
              <ConditionsList />
              <Testimonials />
              <About />
              <DoctorsCityWise />
              <Footer />
            </>
          }
        />
        <Route
          path="/in-clinic-appointment"
          element={<InClinicAppointments />}
        />
        <Route path="/labs" element={<LaboratoryTests />} />
        <Route path="/surgery" element={<SurgerySection />} />
        <Route path="/medicine" element={<DrugSearchPage />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />

        {/* Signup/Login Routes */}
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Pass both setters for role-based login */}
        <Route
          path="/login"
          element={<Login setPatient={setPatient} setDoctor={setDoctor} />}
        />

        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/dashboard" element={<DoctorDashboardWrapper />} />
        {/* <Route path="/add-prescription" element={<AddPrescription />} /> */}

        {/* Footer Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/payment-terms" element={<PaymentTermsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route
          path="/book-appointment/:doctorId"
          element={<BookAppointment />}
        />
        <Route
          path="/book-appointment/:doctorId"
          element={<BookAppointment />}
        />
      </Routes>
    </Router>
  );
}

export default App;
