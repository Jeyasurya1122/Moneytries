import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

export default function Calculator() {
  const [investment, setInvestment] = useState(5000);
  const [years, setYears] = useState(5);
  const rate = 0.158;
  const future = Math.round(investment * Math.pow(1 + rate, years));
  const bars = Array.from({ length: years }, (_, i) => Math.round(investment * Math.pow(1 + rate, i + 1)));
  const maxBar = Math.max(...bars);

  return (
    <section className="calc-section" style={{ background: "#F5EDE0" }}>
      <div className="calc-grid">
        <FadeUp>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#3D2010", margin: "0 0 16px", fontWeight: 700 }}>Calculate Your Future</h2>
            <p style={{ color: "#6B3D22", fontSize: 16, lineHeight: 1.6, marginBottom: 48 }}>
              See how small seeds today can become a massive forest in the years to come.
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: "#6B3D22", textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 600 }}>Initial Investment</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#3D2010" }}>${investment.toLocaleString()}</span>
              </div>
              <input
                type="range" min={1000} max={100000} step={500} value={investment}
                onChange={(e) => setInvestment(+e.target.value)}
                style={{ width: "100%", accentColor: "#2D6A4F", height: 4, cursor: "pointer" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: "#6B3D22", textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 600 }}>Growth Duration</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#3D2010" }}>{years} Years</span>
              </div>
              <input
                type="range" min={1} max={20} step={1} value={years}
                onChange={(e) => setYears(+e.target.value)}
                style={{ width: "100%", accentColor: "#2D6A4F", height: 4, cursor: "pointer" }}
              />
            </div>
          </div>
        </FadeUp>

        {/* Result box */}
        <FadeUp delay={0.2}>
          <div style={{
            background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)",
            borderRadius: 20, padding: 32, border: "1px solid rgba(82,183,136,0.25)",
          }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: "rgba(183,228,199,0.60)", marginBottom: 8 }}>Estimated Balance</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: "#FFFFFF" }}>
                ${future.toLocaleString()}
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#74C69D", marginBottom: 32 }}>
              +${(future - investment).toLocaleString()} ({Math.round(((future - investment) / investment) * 100)}% total return)
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100, marginBottom: 24 }}>
              {bars.map((b, i) => (
                <motion.div
                  key={i}
                  animate={{ height: `${Math.max(10, (b / maxBar) * 100)}%` }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  style={{ flex: 1, background: `rgba(82,183,136,${0.3 + (i / bars.length) * 0.7})`, borderRadius: "4px 4px 0 0", minHeight: 8 }}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#52B788" }}
              whileTap={{ scale: 0.97 }}
              style={{ width: "100%", padding: "14px", borderRadius: 10, background: "#2D6A4F", border: "none", color: "#FFFFFF", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
            >
              Lock In This Strategy
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
