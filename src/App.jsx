// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HealthServices from "./components/HealthServices";
import DoctorsList from "./components/DoctorsList";
import ReviewsSlider from "./components/ReviewsSlider";
import Footer from "./components/Footer";
import About from "./components/About";
import Signup from "./components/Signup"; // Create this file
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HealthServices />
              <DoctorsList />
              <ReviewsSlider />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
