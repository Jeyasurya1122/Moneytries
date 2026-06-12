import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "../tokens";
import FadeUp from "./FadeUp";

const testimonials = [
  { name: "Sarah Jenkins",   role: "First-Time Investor", text: "Moneytries transformed my approach to sustainable growth. My money contributes to sustainable projects while earning double-digit returns. It's incredibly fulfilling.", rating: 5, initials: "SJ", color: "#7BC8A4" },
  { name: "David Chan",      role: "Serial Investor",     text: "The transparency is what sold me. I can see exactly where my money is being planted and the real-time growth visualizations are addictive to watch.", rating: 5, initials: "DC", color: "#5B9BD5" },
  { name: "Marcus & Elena",  role: "Family Investors",    text: "We started with a small 'seed' to budget for our daughter's college fund. Five years on, it's matured beyond our expectations. Truly a natural way to build wealth.", rating: 5, initials: "ME", color: "#E8A45A" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="testimonials-section"
      style={{ background: "#F5EDE0", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div className="testimonials-header">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#3D2010", margin: "0 0 12px", fontWeight: 700 }}>Investor Success</h2>
              <p style={{ color: "#6B3D22", fontSize: 15 }}>Real stories from the people growing their legacy with us.</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button
                onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                style={{ width: 44, height: 44, borderRadius: "50%", background: "transparent", border: "1.5px solid rgba(107,61,34,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B3D22", fontSize: 18 }}
              >‹</button>
              <button
                onClick={() => setActive((prev) => Math.min(testimonials.length - 1, prev + 1))}
                style={{ width: 44, height: 44, borderRadius: "50%", background: "transparent", border: "1.5px solid rgba(107,61,34,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B3D22", fontSize: 18 }}
              >›</button>
            </div>
          </div>
        </FadeUp>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(26,60,42,0.18)" }}
                style={{
                  background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)",
                  borderRadius: 16, padding: "28px 24px",
                  border: "1px solid rgba(82,183,136,0.25)",
                }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "white", flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: "#FFFFFF", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "rgba(183,228,199,0.65)", margin: 0 }}>{t.role}</p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#B7E4C7", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", gap: 3 }}>
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j} style={{ color: C.gold, fontSize: 14 }}>{s}</span>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
