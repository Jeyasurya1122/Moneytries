import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../tokens";
import FadeUp from "./FadeUp";

export default function ReferralBanner() {
  const [copied, setCopied] = useState(false);
  const code = "GROW2025";

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="referral-section"
      style={{ background: "#F5EDE0", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="referral-grid">

          {/* Left: referral pitch */}
          <FadeUp>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(212,168,83,0.20)", border: "1px solid rgba(212,168,83,0.35)", borderRadius: 20, padding: "6px 14px", marginBottom: 20 }}>
                <span style={{ fontSize: 10, letterSpacing: 1.2, fontWeight: 600, color: C.gold, textTransform: "uppercase" }}>🎁 Refer &amp; Earn</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, color: "#3D2010", margin: "0 0 16px", fontWeight: 700, lineHeight: 1.2 }}>
                Grow Together,<br />Earn Together
              </h2>
              <p style={{ color: "#6B3D22", fontSize: 16, lineHeight: 1.65, marginBottom: 32, maxWidth: 420 }}>
                Invite a friend to Moneytries and both of you get a <strong style={{ color: C.gold }}>₹500 bonus</strong> credited instantly when they make their first investment. No limit on referrals.
              </p>
              <div className="referral-steps-grid">
                {[
                  { icon: "🔗", label: "Share your link", step: "01" },
                  { icon: "👤", label: "Friend signs up",  step: "02" },
                  { icon: "💸", label: "Both earn ₹500",   step: "03" },
                ].map((s) => (
                  <div key={s.step} style={{ textAlign: "center", background: "rgba(107,61,34,0.08)", border: "1px solid rgba(107,61,34,0.18)", borderRadius: 12, padding: "16px 12px" }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                    <div style={{ fontSize: 10, color: "#6B3D22", fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>STEP {s.step}</div>
                    <div style={{ fontSize: 12, color: "#3D2010", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right: referral code card */}
          <FadeUp delay={0.15}>
            <div style={{ background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)", borderRadius: 20, padding: 32, border: "1px solid rgba(82,183,136,0.25)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#FFFFFF", margin: "0 0 6px" }}>Your Referral Code</h3>
              <p style={{ fontSize: 13, color: "rgba(183,228,199,0.60)", marginBottom: 24 }}>Share this code or your unique link to start earning.</p>

              <div style={{ display: "flex", gap: 0, marginBottom: 20 }}>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(183,228,199,0.20)", borderRadius: "10px 0 0 10px", padding: "14px 18px", fontFamily: "monospace", fontSize: 20, fontWeight: 700, color: C.gold, letterSpacing: 3, display: "flex", alignItems: "center" }}>
                  {code}
                </div>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: C.gold, color: C.forest, border: "none", borderRadius: "0 10px 10px 0", padding: "14px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 80 }}
                >
                  <AnimatePresence mode="wait">
                    {copied
                      ? <motion.span key="copied" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>✓ Copied!</motion.span>
                      : <motion.span key="copy"   initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Copy</motion.span>
                    }
                  </AnimatePresence>
                </motion.button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
                {[
                  { value: "0",    label: "Referrals" },
                  { value: "₹0",   label: "Earned" },
                  { value: "₹500", label: "Per Refer" },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(183,228,199,0.15)", borderRadius: 10, padding: "12px", textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#74C69D" }}>{stat.value}</div>
                    <div style={{ fontSize: 11, color: "rgba(183,228,199,0.55)", marginTop: 2 }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#52B788" }}
                whileTap={{ scale: 0.97 }}
                style={{ width: "100%", padding: "13px", background: "#2D6A4F", color: "#FFFFFF", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}
              >
                Share Your Referral Link 🌿
              </motion.button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
