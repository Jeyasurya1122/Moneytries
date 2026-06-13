import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const steps = [
  { n: "1", title: "Plant Your Deposit",  body: "Choose your initial capital and select a plan that aligns with your financial goals and risk profile." },
  { n: "2", title: "Nurture with Tech",   body: "Our AI-driven algorithms and ethical investment experts manage your portfolio daily to maximize growth." },
  { n: "3", title: "Harvest Returns",     body: "Watch your wealth compound. Withdraw your profits anytime or reinvest to expand your financial forest." },
];

const why = [
  { icon: "🌿", title: "100% Ethical",     body: "We only invest in sustainable, green-energy and socially responsible businesses." },
  { icon: "🛡️", title: "Asset Protection", body: "Your money, always in safe hands. Protected, preserved, and always yours." },
  { icon: "📈", title: "Investment Growth",  body: "Watch your money grow with every passing day. Smart investments, stronger returns." },
  { icon: "⚡", title: "Fast Transaction",   body: "Every transaction, done in seconds. Fast, secure, and always on time." },
];

export default function HowItWorks() {
  return (
    <section
      className="hiw-section"
      style={{ background: "#E8F5EE", position: "relative", overflow: "hidden" }}
    >
      <div className="hiw-grid" style={{ position: "relative", zIndex: 1 }}>

        {/* How It Works */}
        <div>
          <FadeUp>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#1A3C2A", margin: "0 0 40px", fontWeight: 700 }}>
              How It Works
            </h2>
          </FadeUp>
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#6B3D22", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0, marginTop: 2 }}>
                  {s.n}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: "#1A3C2A", margin: "0 0 8px", fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#2D6A4F", lineHeight: 1.65, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Why Moneytries */}
        <div>
          <FadeUp>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#1A3C2A", margin: "0 0 40px", fontWeight: 700 }}>
              Why Moneytries?
            </h2>
          </FadeUp>
          <div className="hiw-why-grid">
            {why.map((w, i) => (
              <FadeUp key={w.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(107,61,34,0.22)" }}
                  style={{
                    background: "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)",
                    borderRadius: 14, padding: "22px 20px",
                    border: "1px solid rgba(196,168,130,0.20)",
                  }}
                >
                  <span style={{ fontSize: 26, marginBottom: 12, display: "block" }}>{w.icon}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", margin: "0 0 8px" }}>{w.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(196,168,130,0.85)", lineHeight: 1.6, margin: 0 }}>{w.body}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
