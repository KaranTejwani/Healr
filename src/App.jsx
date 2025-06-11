// src/App.jsx
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
              <Testimonials />
              <About />
              <Footer />
            </>
          }
        />

        {/* Signup/Login Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Doctors Listing Route */}
        <Route path="/search-results" element={<SearchResultsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
