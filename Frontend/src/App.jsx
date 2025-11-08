import { useState, useEffect } from 'react';
import './App.css'
import AboutSection from './component/AboutSection/AboutSection'
import ContactForm from './component/ContactForm'
import HeroSection from './component/HeroSection'
import Navbar from './component/NavBar'
import Aboutus from './component/Aboutus'
import PortfolioHighlightReel from './component/Portfolio'


function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Check if form was submitted in a previous session
  useEffect(() => {
    const submitted = sessionStorage.getItem('formSubmitted');
    if (submitted === 'true') {
      setFormSubmitted(true);
    }
  }, []);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    // Store form submission status in session storage
    sessionStorage.setItem('formSubmitted', 'true');
  };

  // Function to reset form submission state
  const resetFormState = () => {
    setFormSubmitted(false);
    sessionStorage.removeItem('formSubmitted');
  };

  return (
    <>
      {!formSubmitted ? (
        // Show ContactForm first
        <>
         <Navbar />
        <ContactForm onSubmitSuccess={handleFormSubmit} />
        </>
      ) : (
        // After form submission, show Navbar and other components
        <>
         
          <div 
            className="min-h-screen" 
            style={{
              backgroundColor: '#FFFFFF',
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23FDD0C1' opacity='1'/%3E%3C/svg%3E"),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.5'/%3E%3C/svg%3E")
              `
            }}
          >
            
            <HeroSection />
            <AboutSection />
            <PortfolioHighlightReel/>
            <Aboutus/>
          </div>
        </>
      )}
    </>
  )
}


export default App
