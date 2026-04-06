import React from "react";

const Footer = () => {
  return (
    <footer style={{
      background: "#0a0a0f",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "32px 24px",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "18px",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.5px",
        }}>
          NK<span style={{
            display: "inline-block",
            width: "5px", height: "5px",
            borderRadius: "50%",
            background: "#6366f1",
            marginLeft: "2px",
            verticalAlign: "middle",
            marginBottom: "2px",
          }} />
        </span>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          color: "rgba(255,255,255,0.3)",
        }}>
          © 2026 Naushin Khan. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "GitHub", href: "https://github.com/Naushink27" },
            { label: "LinkedIn", href: "https://linkedin.com/in/naushink27" },
            { label: "Email", href: "mailto:naushink2709@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#6366f1"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;