import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Check for vertical scroll
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md" // Background becomes white with shadow when scrolled
          : "bg-[url('https://devman-react.vercel.app/img/hero/1.jpg')] bg-cover bg-center"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          MY<span className="text-red-400">Portfolio</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-red-400 font-mono font-bold">
            Home
          </a>
          <a href="#about" className="hover:text-red-400 font-mono font-bold">
            About
          </a>
          <a href="#Skills" className="hover:text-red-400 font-mono font-bold">
            Skills
          </a>
          <a href="#Projects" className="hover:text-red-400 font-mono font-bold">
            Projects
          </a>
          <a href="#Contact" className="hover:text-red-400 font-mono font-bold">
           Contact
          </a>
        </nav>

        {/* Download CV Button */}
        <button className="hidden md:block bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
  <a href="https://drive.google.com/file/d/1HDjObWW1RECIePSt2oECXiwvAJso5Z1N/view?usp=sharing" download="My_Resume" className="text-white">
    Download CV
  </a>
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
            <a
              href="#home"
              className="hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#Skills"
              className="hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#Projects"
              className="hover:text-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
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
