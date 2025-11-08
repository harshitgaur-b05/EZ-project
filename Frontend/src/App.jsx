import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import ContactForm from './component/ContactForm'
import HeroSection from './component/HeroSection'
import Navbar from './component/NavBar'
import AboutTeam from './component/AboutTeam'
import PortfolioHighlightReel from './component/Portfolio'
import AllServices from './component/AllServices';
import Services from './component/Services';
import fullmandal from './assets/hero/full-mandala.svg'

function AppContent({ onVFilmsViewChange }) {
  const [activePolaroid, setActivePolaroid] = useState(null);
  const [hoveredPolaroid, setHoveredPolaroid] = useState(null);
  const [isHoverActivated, setIsHoverActivated] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handlePolaroidClick = (polaroidData) => {
    setActivePolaroid(polaroidData);
    onVFilmsViewChange(true);
  };

  const handlePolaroidHover = (polaroidData) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredPolaroid(polaroidData);
      setIsHoverActivated(true);
      onVFilmsViewChange(true);
    }, 300);
  };

  const handlePolaroidHoverLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHoverActivated(false);
    setHoveredPolaroid(null);
    onVFilmsViewChange(false);
  };

  const handleBackToShowcase = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActivePolaroid(null);
    setIsHoverActivated(false);
    setHoveredPolaroid(null);
    onVFilmsViewChange(false);
  };

  const shouldShowVFilmsLanding = activePolaroid || (isHoverActivated && hoveredPolaroid);

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <motion.div
        key="showcase"
        initial={{ opacity: 1 }}
        animate={{ opacity: shouldShowVFilmsLanding ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
        onMouseLeave={handlePolaroidHoverLeave}
      >
        <AllServices
          onPolaroidClick={handlePolaroidClick}
          onPolaroidHover={handlePolaroidHover}
        />
      </motion.div>

      <AnimatePresence>
        {(activePolaroid || (isHoverActivated && hoveredPolaroid)) && (
          <motion.div
            key="vfilms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Services
              polaroidData={activePolaroid || hoveredPolaroid}
              onBackClick={handleBackToShowcase}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [isVFilmsView, setIsVFilmsView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load - adjust timing as needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds minimum display time

    // Also check if page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => setLoading(false), 500);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-100 flex items-center justify-center"
            style={{
              backgroundColor: '#FDDECF',
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23FDD0C1' opacity='1'/%3E%3C/svg%3E"),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.5'/%3E%3C/svg%3E")
              `
            }}
          >
            <motion.img
              src={fullmandal}
              alt="Loading..."
              className="w-64 h-64 opacity-40 sm:w-80 sm:h-80 md:w-96 md:h-96"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar isVFilmsView={isVFilmsView} />
            <div
              className="min-h-screen overflow-x-hidden"
              style={{
                backgroundColor: '#FDDECF',
                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23FDD0C1' opacity='1'/%3E%3C/svg%3E"),
                  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='texture'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.25' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.5'/%3E%3C/svg%3E")
                `
              }}
            >
              <div id="hero">
                <HeroSection />
              </div>
              <div id="services">
                <AppContent onVFilmsViewChange={setIsVFilmsView} />
              </div>
              <div id="stories">
                <AboutSection />
              </div>
              <div id="portfolio">
                <PortfolioHighlightReel />
              </div>
              <div id="story">
                <AboutTeam />
              </div>
              <div id="contact">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
