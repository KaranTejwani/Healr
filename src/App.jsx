import HeroSection from "./components/HeroSection";
import AppNavbar from "./components/Navbar";
import "./App.css";
import HealthServices from "./components/HealthServices";
import DoctorsList from "./components/DoctorsList";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <HealthServices />
      <DoctorsList />
      <About />
      <Footer />
    </>
  );
}

export default App;
