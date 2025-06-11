import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import DeliveryPolicyPage from "./components/DeliveryPolicyPage";
import RefundPolicyPage from "./components/RefundPolicyPage";
import PaymentTermsPage from "./components/PaymentTermsPage";
import ContactUsPage from "./components/ContactUsPage";

import ConditionsList from "./components/ConditionsList";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorsCityWise from "./components/DoctorsCityWise";
function App() {
  return (
    <Router>
      <AppNavbar />
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
        // {/* Signup/Login Routes */}
        // <Route path="/signup" element={<Signup />} />
        // <Route path="/login" element={<Login />} />
        // {/* Doctors Listing Route */}
        // <Route path="/search-results" element={<SearchResultsPage />} />
        {/* New Footer Page Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/delivery-policy" element={<DeliveryPolicyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/payment-terms" element={<PaymentTermsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
    // <DoctorDashboard />
  );
}

export default App;
