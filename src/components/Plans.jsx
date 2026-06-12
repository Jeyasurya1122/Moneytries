import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "../tokens";
import FadeUp from "./FadeUp";

const plans = [
  { name: "Seedling", stage: "First Stage",   desc: "Perfect for beginners. Start small and test the fertile ground of green finance.", rate: "8.5",  featured: false, icon: "🌱" },
  { name: "Sprout",   stage: "Growth Stage",  desc: "Aggressive growth for active investors looking to accelerate their returns.",      rate: "12.2", featured: false, icon: "🌿" },
  { name: "Tree",     stage: "Maturity Stage",desc: "Stable, long-term wealth building with premium benefits and lower risk.",          rate: "15.8", featured: true,  icon: "🌳" },
  { name: "Forest",   stage: "Legacy Stage",  desc: "Comprehensive estate planning and multi-generational wealth preservation.",       rate: "18.5", featured: false, icon: "🏔️" },
];

function PlanCard({ plan }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        y: hovered ? -6 : 0,
        boxShadow: hovered
          ? "0 20px 50px rgba(107,61,34,0.25)"
          : plan.featured
            ? "0 4px 24px rgba(107,61,34,0.18)"
            : "0 2px 12px rgba(107,61,34,0.10)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: plan.featured
          ? "linear-gradient(135deg, #5C3518 0%, #7A4520 50%, #4A2810 100%)"
          : "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)",
        border: plan.featured
          ? "1.5px solid rgba(196,168,130,0.50)"
          : "1px solid rgba(196,168,130,0.20)",
        borderRadius: 16, padding: "28px 24px", cursor: "pointer",
        position: "relative", overflow: "hidden",
      }}
    >
      {plan.featured && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: 16,
          background: "radial-gradient(ellipse at top, rgba(196,168,130,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      )}
      {plan.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: C.gold, borderRadius: 6, padding: "3px 10px",
          fontSize: 10, fontWeight: 700, color: C.forest, letterSpacing: 0.8, textTransform: "uppercase",
        }}>
          Top Choice
        </div>
      )}

      <div style={{ fontSize: 36, marginBottom: 16 }}>{plan.icon}</div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>
        {plan.name}
      </h3>
      <p style={{ fontSize: 12, color: "rgba(196,168,130,0.65)", fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase", margin: "0 0 16px" }}>
        {plan.stage}
      </p>
      <p style={{ fontSize: 14, color: "rgba(196,168,130,0.85)", lineHeight: 1.6, margin: "0 0 24px", minHeight: 60 }}>
        {plan.desc}
      </p>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#C4A882" }}>
          {plan.rate}%
        </span>
        <span style={{ fontSize: 12, color: "rgba(196,168,130,0.55)", marginLeft: 6 }}>APY</span>
      </div>
      <motion.button
        whileHover={{ scale: 1.03, backgroundColor: plan.featured ? "#4A2E1A" : "rgba(196,168,130,0.20)" }}
        whileTap={{ scale: 0.97 }}
        style={{
          width: "100%", padding: "12px 0", borderRadius: 8, fontSize: 14, fontWeight: 600,
          background: plan.featured ? "#6B3D22" : "transparent",
          color: plan.featured ? "#FFFFFF" : "#C4A882",
          border: plan.featured ? "none" : "1.5px solid rgba(196,168,130,0.40)",
          cursor: "pointer", transition: "all 0.2s",
        }}
      >
        Select Plan
      </motion.button>
    </motion.div>
  );
}

export default function Plans() {
  return (
    <section
      className="plans-section"
      style={{ background: "#E8F5EE", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1A3C2A", margin: "0 0 16px", fontWeight: 700 }}>
              Investment Plans
            </h2>
            <p style={{ color: "#2D6A4F", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
              Discover the perfect stage for your capital. From small starts to vast legacies, we grow with you.
            </p>
          </div>
        </FadeUp>
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.08}>
              <PlanCard plan={plan} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
