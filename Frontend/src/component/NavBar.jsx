import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import Logo from "../assets/logo.svg";

// Import your SVG files
import MenuIconSVG from '../assets/navbar/navicon-close.svg';
import CloseIconSVG from '../assets/navbar/navicon-open.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    { name: 'Their Stories', href: '#stories' },
    { name: 'Our Story', href: '#story' },
    { name: 'Varnan', href: '#varnan' }
  ];

  return (
    <nav className="max-w-7xl mx-auto h-[70px] relative bg-white rounded-full shadow-lg overflow-hidden">
      {/* Logo - Left side */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50">
        <img 
          src={Logo} 
          alt="V Films Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Menu Toggle Button with SVG Images */}
      <motion.button
        className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer z-60 p-2 w-10 h-10 flex items-center justify-center"
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
      <motion.div
        className="absolute top-0 right-0 w-full h-full bg-white/95 backdrop-blur-md flex items-center justify-end pr-20 gap-8 rounded-full"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-800 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-orange-50 hover:text-orange-500 transition-all hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="bg-linear-to-r from-orange-500 to-orange-400 text-white px-7 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all hover:scale-105 hover:-translate-y-0.5"
          onClick={() => setIsOpen(false)}
        >
          Let's Talk
          <Mail size={16} />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
