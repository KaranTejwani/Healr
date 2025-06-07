import HeroSection from "./components/HeroSection";
import AppNavbar from "./components/Navbar";
import "./App.css";
import HealthServices from "./components/HealthServices";
import DoctorsList from "./components/DoctorsList";

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <HealthServices />
      <DoctorsList />
    </>
  );
}

export default App;
