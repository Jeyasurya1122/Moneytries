import { motion } from "framer-motion";

const cols = [
  { title: "Company",    links: ["About Us", "Sustainability Report", "Privacy Policy", "Terms of Service"] },
  { title: "Newsletter", links: [], newsletter: true },
];

export default function Footer() {
  return (
    <footer
      className="footer-wrap"
      style={{ background: "#F5EDE0", borderTop: "1px solid rgba(107,61,34,0.18)" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="footer-grid" style={{ marginBottom: 48 }}>

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#2D6A4F" />
                <path d="M12 5 Q8 9 8 13 Q8 17 12 19 Q16 17 16 13 Q16 9 12 5Z" fill="#FFFFFF" />
              </svg>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: "#3D2010" }}>Moneytries</span>
            </div>
            <p style={{ fontSize: 13, color: "#6B3D22", lineHeight: 1.7, maxWidth: 240 }}>
              Pioneering the intersection of sustainable growth and premium asset management. From your roots to the stars.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#3D2010", textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>{c.title}</h4>
              {c.newsletter ? (
                <div style={{ display: "flex", gap: 0 }}>
                  <input
                    type="email" placeholder="Enter your email"
                    style={{ flex: 1, padding: "10px 14px", border: "1px solid rgba(107,61,34,0.25)", borderRadius: "8px 0 0 8px", fontSize: 13, outline: "none", background: "#FFFFFF", color: "#3D2010", minHeight: 44 }}
                  />
                  <button style={{ padding: "10px 14px", background: "#2D6A4F", color: "#FFFFFF", border: "none", borderRadius: "0 8px 8px 0", cursor: "pointer", fontSize: 16, fontWeight: 700, minHeight: 44 }}>→</button>
                </div>
              ) : (
                c.links.map((l) => (
                  <a key={l} href="#"
                    style={{ display: "block", fontSize: 13, color: "#6B3D22", textDecoration: "none", marginBottom: 12, transition: "color 0.2s", minHeight: 30, lineHeight: "30px" }}
                    onMouseEnter={(e) => (e.target.style.color = "#3D2010")}
                    onMouseLeave={(e) => (e.target.style.color = "#6B3D22")}
                  >{l}</a>
                ))
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(107,61,34,0.15)", paddingTop: 24 }}>
          <p style={{ fontSize: 12, color: "rgba(107,61,34,0.55)", margin: 0 }}>© 2024 Moneytries. Plant Hard Money. Grow Your Future.</p>
          <p style={{ fontSize: 12, color: "rgba(107,61,34,0.55)", margin: 0 }}>Designed by <span style={{ fontWeight: 700, color: "#2D6A4F" }}>Techfrenz Tech Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
