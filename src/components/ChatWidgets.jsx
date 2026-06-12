import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../tokens";

// ─── Floating WhatsApp + Live Chat button ────────────────────────────────────
export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: C.white, borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.18)", width: 300, overflow: "hidden", border: `1px solid ${C.cardBorder}` }}
          >
            {/* Header */}
            <div style={{ background: C.forest, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.sage, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌿</div>
              <div>
                <p style={{ color: C.white, fontWeight: 700, fontSize: 14, margin: 0 }}>Moneytries Support</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: 0 }}>⬤ Online · Replies in minutes</p>
              </div>
              <button onClick={() => setOpen(false)} style={{ marginLeft: "auto", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 18, cursor: "pointer", padding: 0 }}>×</button>
            </div>

            {/* Chat bubble */}
            <div style={{ padding: 16, background: "#f7f7f7" }}>
              <div style={{ background: C.white, borderRadius: "12px 12px 12px 2px", padding: "12px 14px", marginBottom: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.6 }}>
                  👋 Hi! I'm here to help you start your investment journey. What can I assist you with?
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Plans & Pricing", "How to Invest", "Withdrawals"].map((opt) => (
                  <button key={opt} style={{ fontSize: 11, padding: "5px 12px", borderRadius: 20, border: `1px solid ${C.cardBorder}`, background: C.white, cursor: "pointer", color: C.emerald, fontWeight: 600 }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div style={{ padding: "12px 16px", borderTop: `1px solid ${C.cardBorder}`, display: "flex", gap: 8 }}>
              <input
                value={msg} onChange={(e) => setMsg(e.target.value)}
                placeholder="Type a message…"
                style={{ flex: 1, padding: "9px 12px", border: `1px solid ${C.cardBorder}`, borderRadius: 20, fontSize: 13, outline: "none", fontFamily: "inherit" }}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: 36, height: 36, borderRadius: "50%", background: C.forest, border: "none", cursor: "pointer", color: "white", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >
                →
              </motion.button>
            </div>

            {/* WhatsApp option */}
            <a
              href="https://wa.me/919876543210"
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "#f0fdf4", textDecoration: "none", borderTop: `1px solid ${C.cardBorder}` }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.032-1.386l-.36-.214-3.733.895.942-3.637-.235-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182 17.43 2.182 21.818 6.57 21.818 12c0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              <span style={{ fontSize: 12, color: "#25D366", fontWeight: 600 }}>Continue on WhatsApp</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 45 : 0 }}
        style={{ width: 56, height: 56, borderRadius: "50%", background: C.forest, border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(26,60,42,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "white" }}
      >
        {open ? "×" : "💬"}
      </motion.button>
    </div>
  );
}

// ─── Exit-intent popup ────────────────────────────────────────────────────────
export function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("exitPopupShown");
    if (shown) return;
    const handleMouseLeave = (e) => {
      if (e.clientY < 20) {
        setVisible(true);
        sessionStorage.setItem("exitPopupShown", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
        onClick={(e) => e.target === e.currentTarget && setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: C.white, borderRadius: 24, padding: "48px 40px", maxWidth: 480, width: "100%", textAlign: "center", position: "relative" }}
        >
          <button onClick={() => setVisible(false)} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.light }}>×</button>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🌿</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: C.forest, margin: "0 0 10px" }}>You're In!</h3>
              <p style={{ color: C.muted, fontSize: 15 }}>Check your inbox — your free consultation details are on their way.</p>
            </motion.div>
          ) : (
            <>
              <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: C.text, margin: "0 0 10px", fontWeight: 700 }}>Wait — Don't Miss Out!</h3>
              <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.65, marginBottom: 28 }}>
                Get a <strong style={{ color: C.forest }}>FREE 30-minute investment consultation</strong> with our certified advisors. No commitment required.
              </p>
              <div style={{ display: "flex", gap: 0, marginBottom: 14 }}>
                <input
                  type="email" placeholder="Enter your email address" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ flex: 1, padding: "13px 16px", border: `1px solid ${C.cardBorder}`, borderRadius: "10px 0 0 10px", fontSize: 14, outline: "none", fontFamily: "inherit" }}
                />
                <motion.button
                  onClick={() => email && setSubmitted(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ padding: "13px 20px", background: C.forest, color: C.white, border: "none", borderRadius: "0 10px 10px 0", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
                >
                  Claim
                </motion.button>
              </div>
              <p style={{ fontSize: 11, color: C.light }}>No spam, ever. Unsubscribe anytime.</p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
