import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import IdeasPage from "./pages/IdeasPage";
import WorkPage from "./pages/WorkPage";
import ServicePage from "./pages/ServicePage";
import CareersPage from "./pages/CareersPage";
import "./App.css";
import logo from "./assets/site-logo.png";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div>
      <div className="header-bg">
        <header className={`${!showHeader ? "header-hidden" : ""} ${isScrolled ? "header-scrolled" : ""}`}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <Navbar />
        </header>
      </div>

      <main>
        <Routes>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </main>
    </div>
  );
}
