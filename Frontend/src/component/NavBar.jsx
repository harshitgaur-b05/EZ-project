import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

export default function GlassmorphismNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-500 via-purple-600 to-pink-500">
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#FFFBFB] bg-opacity-35 backdrop-blur-lg border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="text-gray-800 font-semibold text-lg">Logo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#services" className="text-gray-800 font-medium hover:text-[#F15D2B] transition-colors relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15D2B] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#stories" className="text-gray-800 font-medium hover:text-[#F15D2B] transition-colors relative group">
                Their Stories
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15D2B] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#our-story" className="text-gray-800 font-medium hover:text-[#F15D2B] transition-colors relative group">
                Our Story
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15D2B] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#varnan" className="text-gray-800 font-medium hover:text-[#F15D2B] transition-colors relative group">
                Varnan
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15D2B] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Let's Talk Button - Desktop */}
            <button className="hidden md:flex items-center gap-2 bg-[#F15D2B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d94d1f] transition-all hover:shadow-lg hover:-translate-y-0.5">
              Let's Talk
              <Mail className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#FFFBFB] bg-opacity-95 backdrop-blur-lg z-40 transform transition-transform duration-700 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          <a
            href="#services"
            className="text-3xl font-semibold text-gray-800 hover:text-[#F15D2B] transition-colors"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#stories"
            className="text-3xl font-semibold text-gray-800 hover:text-[#F15D2B] transition-colors"
            onClick={toggleMenu}
          >
            Their Stories
          </a>
          <a
            href="#our-story"
            className="text-3xl font-semibold text-gray-800 hover:text-[#F15D2B] transition-colors"
            onClick={toggleMenu}
          >
            Our Story
          </a>
          <a
            href="#varnan"
            className="text-3xl font-semibold text-gray-800 hover:text-[#F15D2B] transition-colors"
            onClick={toggleMenu}
          >
            Varnan
          </a>
          <button className="flex items-center gap-3 bg-[#F15D2B] text-white px-8 py-4 rounded-full font-semibold text-xl hover:bg-[#d94d1f] transition-all hover:shadow-lg mt-4">
            Let's Talk
            <Mail className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Demo Content */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Glassmorphism Navbar
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Smooth right-to-left slide animation with visible content
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Click the menu button to see the smooth slide animation. The navigation links are visible throughout the entire animation as the panel slides from right to left.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Feature {item}
              </h3>
              <p className="text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}