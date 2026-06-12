import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const logoBg     = "#2D6A4F";
  const logoColor  = scrolled ? "#3D2010" : "#1A3C2A";
  const btnBg      = "#6B3D22";
  const btnHoverBg = "#4A2E1A";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="navbar-wrap"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "#F5EDE0" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(107,61,34,0.18)" : "none",
        transition: "all 0.3s ease",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill={logoBg} />
          <path d="M12 5 Q8 9 8 13 Q8 17 12 19 Q16 17 16 13 Q16 9 12 5Z" fill="#FFFFFF" />
          <path d="M12 9 Q10 11 10 13 Q10 15 12 16 Q14 15 14 13 Q14 11 12 9Z" fill="#B7E4C7" />
        </svg>
        <span style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18,
          color: logoColor, letterSpacing: "-0.3px", transition: "color 0.3s",
        }}>
          Moneytries
        </span>
      </div>

      {/* CTA button – on mobile shows icon only */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <motion.button
          className="navbar-btn"
          whileHover={{ scale: 1.03, backgroundColor: btnHoverBg }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: btnBg, color: "#FFFFFF", border: "none", cursor: "pointer",
            borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600,
            transition: "background 0.3s",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}
        >
          {/* Icon always visible */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H7l5-8v4h4l-5 8z" />
          </svg>
          {/* Text hidden on mobile via CSS */}
          <span className="navbar-btn-text">Start Investing</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
