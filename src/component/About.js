import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      category: "Languages",
      skills: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Firebase"],
    },
    {
      category: "Database",
      skills: ["MongoDB"],
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#0a0a0f",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.7s ease",
        }}
      >
        {/* Section label */}
        <div style={{ marginBottom: "48px" }}>
          <span style={{
            color: "#6366f1",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
            01 — About
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            color: "#fff",
            marginTop: "8px",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
          }}>
            Who I Am
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}>
          {/* Left: Text */}
          <div>
            <p style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              lineHeight: 1.85,
              marginBottom: "20px",
            }}>
              Hi, I'm <span style={{ color: "#fff", fontWeight: 600 }}>Naushin Khan</span> — a 3rd year B.Tech student
              specializing in Computer Science and Engineering at SSGB. I build
              full-stack web applications using the MERN stack.
            </p>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              lineHeight: 1.85,
              marginBottom: "32px",
            }}>
              I started as a frontend developer and have been consistently pushing into backend territory — 
              building REST APIs, integrating databases, and deploying full-stack apps. I love turning ideas 
              into real, working products.
            </p>

            {/* Education card */}
            <div style={{
              background: "rgba(99,102,241,0.06)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "12px",
              padding: "20px 24px",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px",
                background: "rgba(99,102,241,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", flexShrink: 0,
              }}>
                🎓
              </div>
              <div>
                <div style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>
                  B.Tech — Computer Science & Engineering
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
                  SSGB University · 2022 – 2026
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "24px",
            }}>
              Tech Stack
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <div style={{
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}>
                    {group.category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.75)",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          fontWeight: 500,
                          padding: "6px 14px",
                          borderRadius: "6px",
                          transition: "all 0.2s",
                          cursor: "default",
                        }}
                        onMouseEnter={e => {
                          e.target.style.background = "rgba(99,102,241,0.15)";
                          e.target.style.borderColor = "rgba(99,102,241,0.4)";
                          e.target.style.color = "#a5b4fc";
                        }}
                        onMouseLeave={e => {
                          e.target.style.background = "rgba(255,255,255,0.05)";
                          e.target.style.borderColor = "rgba(255,255,255,0.1)";
                          e.target.style.color = "rgba(255,255,255,0.75)";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default About;