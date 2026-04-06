import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("error:All fields are required.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        "service_2rnaw4a",
        "template_03z80su",
        { name, email, message },
        "UZKBD2E78nEFXVQhc"
      );
      setStatus("success:Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error:Failed to send. Please try again.");
    }
    setLoading(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.5)",
    marginBottom: "8px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  };

  return (
    <section
      id="Contact"
      ref={ref}
      style={{
        background: "#0d0d14",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.7s ease",
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <span style={{
            color: "#6366f1",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
            04 — Contact
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
            Let's Work Together
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            marginTop: "12px",
            lineHeight: 1.7,
          }}>
            I'm open to internships, freelance projects, and collaborations. Drop me a message!
          </p>
        </div>

        {/* Form */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          padding: "40px",
        }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-grid">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{ ...inputStyle, color: "#fff" }}
                  onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{ ...inputStyle, color: "#fff" }}
                  onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                style={{ ...inputStyle, color: "#fff", resize: "vertical" }}
                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>

            {status && (
              <div style={{
                padding: "12px 16px",
                borderRadius: "8px",
                background: status.startsWith("success")
                  ? "rgba(34,197,94,0.1)"
                  : "rgba(239,68,68,0.1)",
                border: `1px solid ${status.startsWith("success") ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                color: status.startsWith("success") ? "#86efac" : "#fca5a5",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
              }}>
                {status.split(":")[1]}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading
                  ? "rgba(99,102,241,0.4)"
                  : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "10px",
                border: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : "0 4px 20px rgba(99,102,241,0.3)",
                transition: "all 0.2s",
                alignSelf: "flex-start",
              }}
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>

        {/* Quick links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}>
          {[
            { label: "naushink2709@gmail.com", href: "mailto:naushink2709@gmail.com" },
            { label: "LinkedIn", href: "https://linkedin.com/in/naushink27" },
            { label: "GitHub", href: "https://github.com/Naushink27" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
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
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </section>
  );
};

export default Contact;