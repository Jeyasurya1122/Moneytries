import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../tokens";

// ─── Scroll progress bar at top ──────────────────────────────────────────────
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: "rgba(0,0,0,0.05)" }}>
      <motion.div
        style={{ height: "100%", background: `linear-gradient(90deg, ${C.sage}, ${C.gold})`, transformOrigin: "left" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

// ─── Mobile sticky bottom CTA ────────────────────────────────────────────────
export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 500,
            background: C.white, borderTop: `1px solid ${C.cardBorder}`,
            padding: "14px 20px", display: "flex", gap: 12,
            boxShadow: "0 -8px 32px rgba(0,0,0,0.10)",
          }}
          className="mobile-sticky-cta"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{ flex: 1, padding: "13px", background: C.forest, color: C.white, border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
          >
            Start Investing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{ flex: 1, padding: "13px", background: "transparent", color: C.forest, border: `1.5px solid ${C.cardBorder}`, borderRadius: 10, fontWeight: 600, fontSize: 14, cursor: "pointer" }}
          >
            Free Consultation
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
