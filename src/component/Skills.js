import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Frontend",
      icon: "⚡",
      color: "#6366f1",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Bootstrap", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      icon: "🔧",
      color: "#8b5cf6",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "#06b6d4",
      skills: [
        { name: "MongoDB", level: "Intermediate" },
        { name: "Mongoose", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "#10b981",
      skills: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "Vercel / Netlify", level: "Intermediate" },
        { name: "Gemini API", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" },
      ],
    },
  ];

  const levelColors = {
    Advanced: { bg: "rgba(99,102,241,0.12)", text: "#a5b4fc", border: "rgba(99,102,241,0.25)" },
    Intermediate: { bg: "rgba(16,185,129,0.08)", text: "#6ee7b7", border: "rgba(16,185,129,0.2)" },
  };

  return (
    <section
      id="Skills"
      ref={ref}
      style={{
        background: "#0d0d14",
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
        {/* Heading */}
        <div style={{ marginBottom: "56px" }}>
          <span style={{
            color: "#6366f1",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
            02 — Skills
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
            What I Work With
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}>
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "28px",
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${cat.color}40`;
                e.currentTarget.style.background = `${cat.color}06`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontSize: "22px" }}>{cat.icon}</span>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.3px",
                }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 9px",
                      borderRadius: "20px",
                      background: levelColors[skill.level].bg,
                      color: levelColors[skill.level].text,
                      border: `1px solid ${levelColors[skill.level].border}`,
                      letterSpacing: "0.3px",
                    }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;