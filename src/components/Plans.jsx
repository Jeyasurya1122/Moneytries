import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const plans = [
  {
    name: "Seedling",
    stage: "Plan 1",
    desc: "Perfect for beginners. Start small and grow your wealth with zero lock-in.",
    icon: "🌱",
    featured: false,
    offerAmount: 4000,
    originalAmount: 3000,
    minHold: null,
    withdrawal: "Withdraw anytime",
  },
  {
    name: "Sprout",
    stage: "Plan 2",
    desc: "Grow steadily with a short commitment period and flexible exit.",
    icon: "🌿",
    featured: false,
    offerAmount: 6000,
    originalAmount: 5000,
    minHold: "3 months minimum hold",
    withdrawal: "Withdraw anytime",
  },
  {
    name: "Tree",
    stage: "Plan 3",
    desc: "Stable mid-term investment with premium returns and strong growth.",
    icon: "🌳",
    featured: true,
    offerAmount: 8000,
    originalAmount: 7000,
    minHold: "6 months minimum hold",
    withdrawal: "Withdraw anytime",
  },
  {
    name: "Forest",
    stage: "Plan 4",
    desc: "Maximum returns for long-term investors building generational wealth.",
    icon: "🏔️",
    featured: false,
    offerAmount: 12000,
    originalAmount: 10000,
    minHold: "12 months minimum hold",
    withdrawal: "Withdraw anytime",
  },
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
        height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column",
      }}
    >
      {plan.featured && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: 16,
          background: "radial-gradient(ellipse at top, rgba(196,168,130,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      )}


      <div style={{ fontSize: 36, marginBottom: 16 }}>{plan.icon}</div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>
        {plan.name}
      </h3>
      <p style={{ fontSize: 12, color: "rgba(196,168,130,0.65)", fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase", margin: "0 0 16px" }}>
        {plan.stage}
      </p>
      <p style={{ fontSize: 14, color: "rgba(196,168,130,0.85)", lineHeight: 1.6, margin: "0 0 20px", flexGrow: 1 }}>
        {plan.desc}
      </p>

      {/* Pricing */}
      <div style={{ marginBottom: 16, padding: "14px 16px", background: "rgba(0,0,0,0.18)", borderRadius: 10 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: "#C4A882" }}>
            ₹{plan.offerAmount.toLocaleString()}/-
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, background: "#C4A882", color: "#3D2010", borderRadius: 4, padding: "2px 7px", letterSpacing: 0.5 }}>
            OFFER
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 13, color: "rgba(196,168,130,0.50)", textDecoration: "line-through" }}>
            ₹{plan.originalAmount.toLocaleString()}/-
          </span>
          <span style={{ fontSize: 11, color: "rgba(196,168,130,0.50)" }}>without offer</span>
        </div>
      </div>

      {/* Hold & Withdrawal Info */}
      <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 6 }}>
        {plan.minHold && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(196,168,130,0.80)" }}>
            <span>⏳</span> {plan.minHold}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(196,168,130,0.80)" }}>
          <span>✅</span> {plan.withdrawal}
        </div>
      </div>

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
