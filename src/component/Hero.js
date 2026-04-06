import React, { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const roles = ["Full Stack Developer", "React Enthusiast", "Problem Solver", "CS Student @ SSGB"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;
    if (!deleting) {
      if (charIndex < current.length) {
        timer = setTimeout(() => {
          setTypedText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
      } else {
        timer = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
      } else {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "15%", left: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "10%",
        width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
          flexWrap: "wrap",
        }}
      >
        {/* Left */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "20px",
              padding: "6px 14px",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#a5b4fc", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              Open to Internships
            </span>
          </div>

          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", fontFamily: "'DM Sans', sans-serif", marginBottom: "8px", letterSpacing: "2px", textTransform: "uppercase" }}>
            Hello, I'm
          </p>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.05,
            marginBottom: "16px",
            letterSpacing: "-2px",
          }}>
            Naushin<br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>Khan</span>
          </h1>

          <div style={{ height: "36px", marginBottom: "24px", display: "flex", alignItems: "center" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "#6366f1",
              fontWeight: 600,
            }}>
              {typedText}
              <span style={{ borderRight: "2px solid #6366f1", marginLeft: "2px", animation: "blink 1s infinite" }} />
            </span>
          </div>

          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "15px",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.7,
            maxWidth: "440px",
            marginBottom: "36px",
          }}>
            3rd year B.Tech CSE student building full-stack web apps with the MERN stack. 
            Passionate about clean code, great UX, and solving real-world problems.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#Projects"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "8px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = "translateY(0)"}
            >
              View Projects →
            </a>
            <a
              href="#Contact"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                padding: "13px 28px",
                borderRadius: "8px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.target.style.borderColor = "rgba(99,102,241,0.5)"; e.target.style.color = "#6366f1"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "rgba(255,255,255,0.8)"; }}
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
            {[
              { label: "GitHub", href: "https://github.com/Naushink27" },
              { label: "LinkedIn", href: "https://linkedin.com/in/naushink27" },
              { label: "Email", href: "mailto:naushink2709@gmail.com" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={e => e.target.style.color = "#6366f1"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — stats card */}
        <div style={{ flex: "0 0 auto" }}>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "32px",
            backdropFilter: "blur(10px)",
            minWidth: "240px",
          }}>
            {[
              { number: "7+", label: "Projects Built" },
              { number: "3rd", label: "Year B.Tech CSE" },
              { number: "MERN", label: "Stack" },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: "20px 0",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#6366f1",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.5px",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.3)} }
      `}</style>
    </section>
  );
};

export default Hero;