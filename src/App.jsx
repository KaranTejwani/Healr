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
function App() {
  const [patient, setPatient] = useState(null);
  const [cart, setCart] = useState([]);

  // Load patient from localStorage and listen to changes
  useEffect(() => {
    const storedPatient = localStorage.getItem("patient");
    if (storedPatient) {
      try {
        setPatient(JSON.parse(storedPatient));
      } catch (e) {
        console.error("Invalid patient JSON in localStorage", e);
      }
    }

    // Sync state across tabs/windows
    const handleStorageChange = () => {
      const updatedPatient = localStorage.getItem("patient");
      if (updatedPatient) {
        setPatient(JSON.parse(updatedPatient));
      } else {
        setPatient(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      {/* ✅ Pass login state to Navbar only */}
      <AppNavbar patient={patient} setPatient={setPatient} />
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
        <Route path="/surgery" element={<SurgerySection />} />
        <Route path="/medicine" element={<DrugSearchPage />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        {/* Signup/Login Routes */}
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Pass setPatient to login so it updates instantly */}
        <Route path="/login" element={<Login setPatient={setPatient} />} />

        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/dashboard" element={<DoctorDashboardWrapper />} />

        {/* Footer Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/payment-terms" element={<PaymentTermsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
