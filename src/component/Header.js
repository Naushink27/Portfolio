import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "Skills", "Projects", "Contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 80 && top > -300) {
            setActiveSection(id.toLowerCase());
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#Skills", id: "skills" },
    { label: "Projects", href: "#Projects", id: "projects" },
    { label: "Contact", href: "#Contact", id: "contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        background: isScrolled
          ? "rgba(10, 10, 15, 0.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(99,102,241,0.15)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "22px",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            NK
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#6366f1",
                marginLeft: "3px",
                verticalAlign: "middle",
                marginBottom: "2px",
              }}
            />
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                color:
                  activeSection === link.id ? "#6366f1" : "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                padding: "6px 14px",
                borderRadius: "20px",
                transition: "all 0.2s",
                background:
                  activeSection === link.id
                    ? "rgba(99,102,241,0.12)"
                    : "transparent",
                letterSpacing: "0.3px",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="/Naushin_Khan_Resume.pdf"
          download="Naushin_Khan_Resume"
          className="hidden-mobile"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
            transition: "all 0.2s",
            letterSpacing: "0.3px",
          }}
        >
          Download CV ↓
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "24px",
            padding: "4px",
          }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            background: "rgba(10,10,15,0.98)",
            borderTop: "1px solid rgba(99,102,241,0.2)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "12px 0",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Naushin_Khan_Resume.pdf"
            download="Naushin_Khan_Resume"
            style={{
              display: "block",
              marginTop: "16px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            Download CV
          </a>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;