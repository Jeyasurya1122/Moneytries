import { motion } from "framer-motion";
import FadeUp from "./FadeUp";
import Counter from "./Counter";

const badges = [
  { icon: "🔒", title: "SSL Secured",           desc: "256-bit TLS encryption on every connection" },
  { icon: "🛡️", title: "Data Privacy",           desc: "Your personal information is never shared or sold to third parties" },
  { icon: "✅", title: "Regulatory Compliance",   desc: "Fully compliant with applicable financial and data protection regulations" },
  { icon: "💳", title: "Customer Protection",     desc: "Dedicated support team to resolve disputes and protect your interests" },
  { icon: "🔐", title: "2FA Authentication",      desc: "Two-factor login protection on all accounts" },
  { icon: "📋", title: "Transparent Operations",  desc: "Clear terms and full visibility into every transaction" },
];

const milestones = [
  { value: 10000, suffix: "+",    label: "Happy Customers" },
  { value: 99,    suffix: ".9%",  label: "Uptime Guaranteed" },
  { value: 256,   suffix: "-bit", label: "Encryption Standard" },
  { value: 24,    suffix: "/7",   label: "Support Available" },
];

export default function TrustSecurity() {
  return (
    <section className="trust-section" style={{ background: "#F5EDE0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(45,106,79,0.12)", border: "1px solid rgba(45,106,79,0.25)",
              borderRadius: 20, padding: "6px 14px", marginBottom: 20,
            }}>
              <span style={{ fontSize: 10, letterSpacing: 1.2, fontWeight: 600, color: "#2D6A4F", textTransform: "uppercase" }}>⬤ Bank-Grade Security</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#3D2010", margin: "0 0 16px", fontWeight: 700 }}>
              Your Money is Safe With Us
            </h2>
            <p style={{ color: "#6B3D22", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              We employ the highest industry standards to protect your investments and personal data at every step.
            </p>
          </div>
        </FadeUp>

        {/* Security badges grid */}
        <div className="trust-badges-grid">
          {badges.map((b, i) => (
            <FadeUp key={b.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(26,60,42,0.20)" }}
                style={{
                  background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)",
                  borderRadius: 16, padding: "28px 24px",
                  border: "1px solid rgba(82,183,136,0.25)",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(116,198,157,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px" }}>{b.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(183,228,199,0.75)", lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Stats bar */}
        <FadeUp>
          <div
            className="trust-stats-bar"
            style={{
              background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)",
              border: "1px solid rgba(82,183,136,0.25)",
              borderRadius: 20,
            }}
          >
            {milestones.map((m) => (
              <div key={m.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#74C69D" }}>
                  <Counter to={m.value} />{m.suffix}
                </div>
                <p style={{ color: "rgba(183,228,199,0.65)", fontSize: 13, margin: "6px 0 0", textTransform: "uppercase", letterSpacing: 1 }}>{m.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
