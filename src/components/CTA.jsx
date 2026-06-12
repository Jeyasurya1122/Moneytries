import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

export default function CTA() {
  return (
    <section className="cta-section" style={{ background: "#E8F5EE", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div
            className="cta-box"
            style={{
              background: "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)",
              borderRadius: 24,
              border: "1px solid rgba(196,168,130,0.25)",
              boxShadow: "0 8px 48px rgba(107,61,34,0.18)",
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Decorative rings */}
            <svg style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} width="600" height="420" viewBox="0 0 600 420" fill="none">
              <ellipse cx="300" cy="210" rx="280" ry="190" stroke="#C4A882" strokeWidth="1" strokeDasharray="8 16" opacity="0.10" />
              <ellipse cx="300" cy="210" rx="200" ry="140" stroke="#C4A882" strokeWidth="0.8" opacity="0.07" />
            </svg>

            <h2
              className="cta-h2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF", margin: "0 0 20px", fontWeight: 700, lineHeight: 1.1, position: "relative", zIndex: 1 }}
            >
              Plant Your Future Today
            </h2>
            <p style={{ color: "rgba(196,168,130,0.85)", fontSize: 18, lineHeight: 1.65, marginBottom: 48, position: "relative", zIndex: 1 }}>
              Every massive forest began with a single seed. Your journey to sustainable wealth starts with one smart decision.
            </p>
            <div className="cta-btns" style={{ position: "relative", zIndex: 1 }}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#4A2E1A" }}
                whileTap={{ scale: 0.96 }}
                style={{ background: "#6B3D22", color: "#FFFFFF", border: "none", cursor: "pointer", borderRadius: 10, padding: "16px 36px", fontSize: 16, fontWeight: 700 }}
              >Start Now</motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#C4A882", color: "#C4A882" }}
                whileTap={{ scale: 0.96 }}
                style={{ background: "transparent", color: "rgba(196,168,130,0.85)", border: "2px solid rgba(196,168,130,0.35)", cursor: "pointer", borderRadius: 10, padding: "16px 36px", fontSize: 16, fontWeight: 600, transition: "all 0.2s" }}
              >Talk to an Advisor</motion.button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
