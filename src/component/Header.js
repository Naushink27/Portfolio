import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          MY<span className="text-red-400">Portfolio</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-red-400">
            Home
          </a>
          <a href="#about" className="hover:text-red-400">
            About
          </a>
          <a href="#Skills" className="hover:text-red-400">
            Skills
          </a>
          <a href="#Projects" className="hover:text-red-400">
            Projects
          </a>
         
        </nav>

        {/* Download CV Button */}
        <button className="hidden md:block bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
          Download CV
        </button>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="hover:text-red-400" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="hover:text-red-400" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#portfolio" className="hover:text-red-400" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#services" className="hover:text-red-400" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#contact" className="hover:text-red-400" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <button
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
