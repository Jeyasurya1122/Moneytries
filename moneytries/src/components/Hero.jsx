import { motion } from "framer-motion";
import { C } from "../tokens";

function TreeIllustration() {
  return (
    <svg viewBox="0 0 320 280" width="320" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground pot */}
      <ellipse cx="160" cy="240" rx="50" ry="12" fill="#D4C5A9" opacity="0.5" />
      <rect x="134" y="218" width="52" height="28" rx="6" fill="#C4A882" />
      <rect x="128" y="214" width="64" height="10" rx="4" fill="#B8956C" />
      {/* Trunk */}
      <motion.path
        d="M160 215 C158 190 154 165 156 140 C158 120 162 100 160 80"
        stroke="#8B6F47" strokeWidth="8" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Main branches */}
      {[
        "M158 160 C140 150 120 145 100 148",
        "M160 140 C178 130 198 128 215 132",
        "M157 120 C142 108 128 102 115 98",
        "M163 110 C175 95 188 88 200 84",
      ].map((d, i) => (
        <motion.path
          key={i} d={d} stroke="#8B6F47" strokeWidth={5 - i * 0.8} strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: "easeOut" }}
        />
      ))}
      {/* Leaf clusters */}
      {[
        { cx: 95,  cy: 138, r: 26, c: "#74C69D" },
        { cx: 218, cy: 122, r: 28, c: "#95D5B2" },
        { cx: 108, cy: 90,  r: 22, c: "#52B788" },
        { cx: 204, cy: 76,  r: 24, c: "#74C69D" },
        { cx: 158, cy: 68,  r: 20, c: "#40916C" },
        { cx: 142, cy: 82,  r: 18, c: "#52B788" },
        { cx: 176, cy: 78,  r: 16, c: "#B7E4C7" },
      ].map((l, i) => (
        <motion.circle
          key={i} cx={l.cx} cy={l.cy} r={l.r} fill={l.c} opacity={0.92}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.92 }}
          transition={{ duration: 0.5, delay: 1.0 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: `${l.cx}px ${l.cy}px` }}
        />
      ))}
      {/* Floating coins */}
      {[
        { x: 60,  y: 80,  delay: 1.5 },
        { x: 240, y: 100, delay: 1.7 },
        { x: 78,  y: 140, delay: 1.9 },
        { x: 250, y: 60,  delay: 1.6 },
      ].map((coin, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: coin.delay, duration: 0.4 },
            y: { delay: coin.delay, duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <circle cx={coin.x} cy={coin.y} r={10} fill="#F4D03F" />
          <circle cx={coin.x} cy={coin.y} r={8}  fill="#F7DC6F" />
          <text x={coin.x} y={coin.y + 4} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#B7950B">$</text>
        </motion.g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        background: "#E8F5EE",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Decorative SVGs */}
      <svg style={{ position: "absolute", top: -120, right: -120, pointerEvents: "none" }} width="560" height="560" viewBox="0 0 560 560" fill="none">
        <circle cx="280" cy="280" r="260" stroke="#6B3D22" strokeWidth="1.5" strokeDasharray="8 14" opacity="0.08" />
        <circle cx="280" cy="280" r="200" stroke="#6B3D22" strokeWidth="1"   opacity="0.06" />
        <circle cx="280" cy="280" r="140" stroke="#6B3D22" strokeWidth="0.8" opacity="0.06" />
      </svg>
      <svg style={{ position: "absolute", bottom: -80, left: -80, pointerEvents: "none" }} width="380" height="380" viewBox="0 0 380 380" fill="none">
        <circle cx="190" cy="190" r="170" stroke="#6B3D22" strokeWidth="1.2" strokeDasharray="6 12" opacity="0.07" />
        <circle cx="190" cy="190" r="110" stroke="#6B3D22" strokeWidth="0.8" opacity="0.06" />
      </svg>
      <svg style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }} width="220" height="220" viewBox="0 0 220 220" fill="none">
        <polygon points="0,0 220,0 0,220" fill="#6B3D22" opacity="0.04" />
        <polygon points="0,0 140,0 0,140" fill="#6B3D22" opacity="0.06" />
      </svg>
      <svg style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none" }} width="200" height="200" viewBox="0 0 200 200" fill="none">
        <polygon points="200,200 0,200 200,0" fill="#6B3D22" opacity="0.05" />
      </svg>

      {/* Content grid */}
      <div
        className="hero-grid"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Left: text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(107,61,34,0.10)", border: "1px solid rgba(107,61,34,0.22)",
              borderRadius: 20, padding: "6px 14px", marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: 1.2, fontWeight: 600, color: "#6B3D22", textTransform: "uppercase" }}>⬤ AI Security Rated Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1, color: "#1A3C2A", margin: "0 0 8px", fontWeight: 700 }}
          >
            Grow Your Wealth
          </motion.h1>
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1, color: "#2D6A4F", margin: "0 0 24px", fontWeight: 700 }}
          >
            Naturally.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            style={{ fontSize: 17, lineHeight: 1.65, color: "#2D6A4F", maxWidth: 420, marginBottom: 36 }}
          >
            Secure, sustainable, and smart investment opportunities designed to help your future flourish. Join a legacy of green prosperity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            style={{ display: "flex", gap: 12, marginBottom: 40 }}
          >
            <motion.button
              className="hero-btn"
              whileHover={{ scale: 1.04, backgroundColor: "#4A2E1A" }}
              whileTap={{ scale: 0.96 }}
              style={{ background: "#6B3D22", color: "#FFFFFF", border: "none", cursor: "pointer", borderRadius: 8, padding: "13px 26px", fontSize: 15, fontWeight: 700 }}
            >
              Start Investing
            </motion.button>
            <motion.button
              className="hero-btn"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(107,61,34,0.10)", borderColor: "#6B3D22", color: "#1A3C2A" }}
              whileTap={{ scale: 0.96 }}
              style={{ background: "transparent", color: "#2D6A4F", border: "1.5px solid rgba(107,61,34,0.35)", cursor: "pointer", borderRadius: 8, padding: "13px 26px", fontSize: 15, fontWeight: 500, transition: "all 0.2s" }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <div style={{ display: "flex" }}>
              {["#2D6A4F", "#52B788", "#1A3C2A", "#40916C"].map((c, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: "2px solid rgba(255,255,255,0.60)", marginLeft: i ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, color: "#FFFFFF", fontWeight: 700 }}>{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: "#2D6A4F" }}>
              <strong style={{ color: "#1A3C2A" }}>Over $1B+</strong> active investors growing with us.
            </span>
          </motion.div>
        </div>

        {/* Right: illustration (hidden on mobile via CSS) */}
        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{
            background: "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)",
            borderRadius: 24, padding: 40,
            border: "1px solid rgba(196,168,130,0.25)",
            boxShadow: "0 8px 40px rgba(107,61,34,0.20), inset 0 1px 0 rgba(196,168,130,0.15)",
            width: "100%", maxWidth: 420, minHeight: 340,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}>
            <TreeIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
