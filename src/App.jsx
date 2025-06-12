import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import DrugGrid from "./components/DrugCard";
import DrugSearchPage from "./components/DrugCard";
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
        <Route path="/surgery" element={<SurgerySection />} />
        <Route path="/medicine" element={<DrugSearchPage />} />
        {/* Signup/Login Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Doctors Listing Route */}
        <Route path="/search-results" element={<SearchResultsPage />} />

        {/* Doctor Dashboard with state */}
        {/* <Route path="/dashboard" element={<DoctorDashboardWrapper />} /> */}

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
