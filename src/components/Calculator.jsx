import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const plans = [
  {
    name: "Seedling",
    stage: "Plan 1",
    icon: "🌱",
    offerAmount: 4000,
    minHold: null,
    dailyRate: 0.0005, // 0.05% per day
  },
  {
    name: "Sprout",
    stage: "Plan 2",
    icon: "🌿",
    offerAmount: 6000,
    minHold: 90,
    dailyRate: 0.001, // 0.10% per day
  },
  {
    name: "Tree",
    stage: "Plan 3",
    icon: "🌳",
    offerAmount: 8000,
    minHold: 180,
    featured: true,
    dailyRate: 0.0015, // 0.15% per day
  },
  {
    name: "Forest",
    stage: "Plan 4",
    icon: "🏔️",
    offerAmount: 12000,
    minHold: 365,
    dailyRate: 0.002, // 0.20% per day
  },
];

export default function Calculator() {
  const [amount, setAmount] = useState("");
  const [days, setDays] = useState("");

  const parsedAmount = parseFloat(amount) || 0;
  const parsedDays = parseInt(days) || 0;
  const hasResult = parsedAmount > 0 && parsedDays > 0;

  const earnings = parsedAmount * plans[0].dailyRate * parsedDays;
  const total = parsedAmount + earnings;

  return (
    <section className="calc-section" style={{ background: "#F5EDE0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#3D2010", margin: "0 0 16px", fontWeight: 700 }}>
              Calculate Your Earnings
            </h2>
            <p style={{ color: "#6B3D22", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              Enter your investment amount and number of days to see your estimated earnings across all plans.
            </p>
          </div>
        </FadeUp>

        {/* Input Row */}
        <FadeUp delay={0.1}>
          <div style={{
            display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center",
            marginBottom: 40,
          }}>
            {/* Amount Input */}
            <div style={{
              background: "#fff", borderRadius: 14, padding: "20px 24px",
              border: "1.5px solid rgba(107,61,34,0.18)", flex: "1", minWidth: 240, maxWidth: 340,
              boxShadow: "0 2px 12px rgba(107,61,34,0.08)",
            }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#6B3D22", textTransform: "uppercase", letterSpacing: 0.8, display: "block", marginBottom: 10 }}>
                Investment Amount (₹)
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#3D2010" }}>₹</span>
                <input
                  type="number"
                  min={0}
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    flex: 1, border: "none", outline: "none", fontSize: 22,
                    fontWeight: 700, color: "#1A3C2A", background: "transparent",
                    fontFamily: "'Playfair Display', serif",
                  }}
                />
              </div>
            </div>

            {/* Days Input */}
            <div style={{
              background: "#fff", borderRadius: 14, padding: "20px 24px",
              border: "1.5px solid rgba(107,61,34,0.18)", flex: "1", minWidth: 240, maxWidth: 340,
              boxShadow: "0 2px 12px rgba(107,61,34,0.08)",
            }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#6B3D22", textTransform: "uppercase", letterSpacing: 0.8, display: "block", marginBottom: 10 }}>
                Number of Days
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="number"
                  min={1}
                  placeholder="Enter days"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  style={{
                    flex: 1, border: "none", outline: "none", fontSize: 22,
                    fontWeight: 700, color: "#1A3C2A", background: "transparent",
                    fontFamily: "'Playfair Display', serif",
                  }}
                />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#6B3D22" }}>days</span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Plan Cards Result */}
        {hasResult && (
          <FadeUp delay={0.15}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              marginBottom: 32,
            }}
            className="calc-plans-grid"
            >
              {plans.map((plan) => {
                const planEarnings = parsedAmount * plan.dailyRate * parsedDays;
                const planTotal = parsedAmount + planEarnings;
                const belowMinHold = plan.minHold && parsedDays < plan.minHold;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)",
                      borderRadius: 16,
                      padding: "24px 20px",
                      border: "1px solid rgba(82,183,136,0.25)",
                      position: "relative",
                    }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{plan.icon}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: plan.featured ? "rgba(183,228,199,0.65)" : "rgba(183,228,199,0.60)", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>
                      {plan.stage}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
                      {plan.name}
                    </div>

                    {belowMinHold && (
                      <div style={{
                        background: "rgba(255,200,100,0.15)", border: "1px solid rgba(255,200,100,0.35)",
                        borderRadius: 8, padding: "6px 10px", marginBottom: 14,
                        fontSize: 11, color: "#FFD080", lineHeight: 1.5,
                      }}>
                        ⚠️ Min hold: {plan.minHold} days
                      </div>
                    )}

                    <div style={{ background: "rgba(0,0,0,0.20)", borderRadius: 10, padding: "14px 14px", marginBottom: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: plan.featured ? "rgba(183,228,199,0.65)" : "rgba(183,228,199,0.65)" }}>Investment</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>₹{parsedAmount.toLocaleString()}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: plan.featured ? "rgba(183,228,199,0.65)" : "rgba(183,228,199,0.65)" }}>Earnings ({parsedDays}d)</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#74C69D" }}>
                          +₹{planEarnings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: plan.featured ? "rgba(183,228,199,0.80)" : "rgba(183,228,199,0.80)" }}>Total Amount</span>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
                          ₹{planTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>

                    <div style={{ fontSize: 11, color: plan.featured ? "rgba(183,228,199,0.50)" : "rgba(183,228,199,0.50)", textAlign: "center" }}>
                      {(plan.dailyRate * 100).toFixed(2)}% per day
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </FadeUp>
        )}

        {/* Placeholder when no input */}
        {!hasResult && (
          <FadeUp delay={0.2}>
            <div style={{
              textAlign: "center", padding: "48px 24px",
              background: "rgba(107,61,34,0.06)", borderRadius: 16,
              border: "1.5px dashed rgba(107,61,34,0.20)",
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🧮</div>
              <p style={{ color: "#6B3D22", fontSize: 15 }}>Enter your investment amount and number of days above to see your earnings.</p>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
