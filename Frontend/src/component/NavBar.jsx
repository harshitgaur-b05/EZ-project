import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import Logo from "../assets/logo.svg";

// Import your SVG files
import MenuIconSVG from '../assets/navbar/navicon-close.svg';
import CloseIconSVG from '../assets/navbar/navicon-open.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Reusable function to scroll to a section with offset for fixed navbar
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -5; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Show logo when hero section is in view (top of page)
        setShowLogo(heroRect.bottom > 50); // Show logo if hero section is still visible
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Story', href: '#story' },
    { name: 'Their Stories', href: '#stories' },
    {name: 'Vernan', href: '#hero'}
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-white/25 z-50">
      {/* Logo - Left side - only show when on hero section */}
      {!showLogo && (
        <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50">
          <img 
            src={Logo} 
            alt="V Films Logo" 
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </div>
      )}

      {/* Menu Toggle Button with SVG Images */}
      <motion.button
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 cursor-pointer z-60 p-2 w-10 h-10 flex items-center justify-center"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        {/* Menu Icon (Hamburger) */}
        <motion.img
          src={MenuIconSVG}
          alt="Menu"
          initial={false}
          animate={{ 
            rotate: isOpen ? 90 : 0,
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
          className="absolute w-10 h-10"
        />
        
        {/* Close Icon (X) */}
        <motion.img
          src={CloseIconSVG}
          alt="Close"
          initial={false}
          animate={{ 
            rotate: isOpen ? 0 : -90,
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          className="absolute w-10 h-10"
        />
      </motion.button>

      {/* Sliding Glass Menu - Desktop & Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background */}
            <motion.div
              className="absolute top-0 right-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div
              className="absolute top-0 right-0 w-full lg:w-full h-auto lg:h-full flex flex-col lg:flex-row items-center justify-center lg:justify-end py-10 lg:py-0 lg:pr-20 gap-6 sm:gap-8 bg-white lg:bg-transparent"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 text-base sm:text-sm font-medium px-6 sm:px-5 py-3 sm:py-2.5 rounded-full hover:bg-orange-50 hover:text-orange-500 transition-all hover:scale-105 w-full sm:w-auto text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const sectionId = link.href.substring(1); // Remove the '#' from the href
                    scrollToSection(sectionId);
                  }}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 sm:px-7 py-3.5 sm:py-3 rounded-full text-base sm:text-sm font-medium flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all hover:scale-105 hover:-translate-y-0.5 w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  scrollToSection('contact');
                }}
              >
                Let's Talk
                <Mail size={16} />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;