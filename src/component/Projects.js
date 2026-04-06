import React, { useEffect, useRef, useState } from "react";
import NetflixGPT from "../Assets/NetflixGPT.png";
import Devtinder from "../Assets/Devtinder.png";
import TODO from "../Assets/TODO.png";
import Weather from "../Assets/Weather.png";
import Currency from "../Assets/Currency.png";
import GoRail from "../Assets/GoRail.png";
import HealthCare from "../Assets/HealthCare.png";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 0,
      title: "GoRail",
      description: "Train booking platform with real-time seat availability, route search, and booking management.",
      image: GoRail,
      link: "https://go-rail.vercel.app",
      github: "https://github.com/Naushink27",
      tags: ["React", "Node.js", "MongoDB"],
      featured: true,
    },
    {
      id: 1,
      title: "HealthCare",
      description: "Patients book appointments with doctors; doctors manage their schedules and patient records.",
      image: HealthCare,
      link: "https://healthcare-frontend-lake.vercel.app",
      github: "https://github.com/Naushink27",
      tags: ["React", "Express", "MongoDB"],
      featured: true,
    },
    {
      id: 2,
      title: "DevTinder",
      description: "Tinder-style app for developers to connect, collaborate, and network with each other.",
      image: Devtinder,
      link: "https://devtinder-web-if8h.vercel.app",
      github: "https://github.com/Naushink27",
      tags: ["React", "Node.js", "MongoDB"],
      featured: true,
    },
    {
      id: 3,
      title: "Netflix GPT",
      description: "Movie streaming UI with AI-powered movie suggestions using the Gemini API.",
      image: NetflixGPT,
      link: "https://net-flix-gpt-jet.vercel.app/",
      github: "https://github.com/Naushink27",
      tags: ["React", "Firebase", "Gemini API"],
      featured: false,
    },
    {
      id: 4,
      title: "Todo App",
      description: "Clean and minimal task manager to organize and track your daily tasks.",
      image: TODO,
      link: "https://naushink27.github.io/TO-DO-LIST/",
      github: "https://github.com/Naushink27",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
    },
    {
      id: 5,
      title: "Weather App",
      description: "Real-time weather details for any searched city using OpenWeather API.",
      image: Weather,
      link: "https://naushink27.github.io/Weather-FInal/",
      github: "https://github.com/Naushink27",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
    },
    {
      id: 6,
      title: "Currency Converter",
      description: "Live currency conversion between 150+ currencies with up-to-date exchange rates.",
      image: Currency,
      link: "https://naushink27.github.io/Currency-Converter/",
      github: "https://github.com/Naushink27",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
    },
  ];

  const tagColors = {
    "React": "#61dafb",
    "Node.js": "#68a063",
    "MongoDB": "#47a248",
    "Express": "#ffffff",
    "Firebase": "#ffca28",
    "Gemini API": "#4285f4",
    "HTML": "#e34c26",
    "CSS": "#264de4",
    "JavaScript": "#f7df1e",
  };

  return (
    <section
      id="Projects"
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
            03 — Projects
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
            What I've Built
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              tagColors={tagColors}
              delay={i * 0.06}
              visible={visible}
            />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project, tagColors, delay, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}s`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "190px" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Overlay on hover */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,15,0.7)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            Live Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        </div>

        {project.featured && (
          <span style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(99,102,241,0.9)",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: "20px",
            backdropFilter: "blur(4px)",
          }}>
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "18px",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "8px",
          letterSpacing: "-0.3px",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          marginBottom: "16px",
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: tagColors[tag] || "rgba(255,255,255,0.6)",
                background: `${tagColors[tag] || "#ffffff"}12`,
                border: `1px solid ${tagColors[tag] || "#ffffff"}25`,
                padding: "3px 10px",
                borderRadius: "5px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#6366f1",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Live Demo ↗
          </a>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;