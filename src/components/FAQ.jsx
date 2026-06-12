import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "./FadeUp";

const faqs = [
  { q: "How does Moneytries work?", a: "Moneytries pools your investment into a diversified portfolio of sustainable, green-energy and ESG-compliant assets. Our AI-driven algorithms rebalance daily to maximize returns while minimizing risk. You simply deposit, choose a plan, and watch your wealth grow." },
  { q: "Is my investment safe?", a: "Absolutely. All funds are held in segregated accounts with our banking partners, insured up to ₹5 Lakhs per investor. We're fully regulated by SEBI and RBI, with 256-bit AES encryption protecting all data." },
  { q: "What is the minimum investment?", a: "You can start with as little as ₹500 on our Seedling plan. There's no upper limit — our Forest legacy plan is designed for high-net-worth individuals managing ₹50 Lakhs and above." },
  { q: "How and when can I withdraw funds?", a: "Withdrawals are processed within 24–48 business hours directly to your registered bank account. There are no lock-in periods on any plan, and we charge zero withdrawal fees." },
  { q: "Are there any hidden charges?", a: "No hidden charges — ever. We operate on a simple performance-based fee model: we only earn when you earn. Our fee structure is clearly disclosed in your dashboard before you invest." },
  { q: "What returns can I realistically expect?", a: "Our plans offer APY ranging from 8.5% (Seedling) to 18.5% (Forest). Past performance isn't a guarantee of future returns, but our 5-year track record shows consistent delivery of projected rates." },
  { q: "Can I switch between plans?", a: "Yes. You can upgrade or change your investment plan at any time from your dashboard. Switches take effect at the start of the next billing cycle with no penalties." },
  { q: "How is Moneytries different from a bank FD?", a: "Bank FDs currently offer 6–7% annually. Moneytries delivers 8.5–18.5% APY through diversified sustainable investments. Unlike FDs, your money actively contributes to green projects while earning significantly more." },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.05}>
      <motion.div style={{ borderBottom: "1px solid rgba(107,61,34,0.20)", overflow: "hidden" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, textAlign: "left", minHeight: 44 }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, color: "#1A3C2A", lineHeight: 1.4 }}>{faq.q}</span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ width: 28, height: 28, borderRadius: "50%", background: open ? "#6B3D22" : "rgba(107,61,34,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, color: open ? "#FFFFFF" : "#6B3D22", transition: "background 0.2s" }}
          >+</motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontSize: 15, color: "#6B3D22", lineHeight: 1.75, paddingBottom: 22, margin: 0 }}>{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeUp>
  );
}

export default function FAQ() {
  const half = Math.ceil(faqs.length / 2);

  return (
    <section className="faq-section" style={{ background: "#E8F5EE", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1A3C2A", margin: "0 0 16px", fontWeight: 700 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#2D6A4F", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
              Everything you need to know before you plant your first seed.
            </p>
          </div>
        </FadeUp>

        <div className="faq-grid">
          <div>{faqs.slice(0, half).map((faq, i) => <FAQItem key={faq.q} faq={faq} index={i} />)}</div>
          <div>{faqs.slice(half).map((faq, i)  => <FAQItem key={faq.q} faq={faq} index={i} />)}</div>
        </div>

        {/* Still have questions bar */}
        <FadeUp delay={0.2}>
          <div
            className="faq-cta-bar"
            style={{ marginTop: 56, background: "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)", borderRadius: 16, padding: "28px 32px", border: "1px solid rgba(196,168,130,0.25)" }}
          >
            <div>
              <p style={{ fontWeight: 700, fontSize: 16, color: "#FFFFFF", margin: "0 0 4px" }}>Still have questions?</p>
              <p style={{ fontSize: 14, color: "rgba(196,168,130,0.80)", margin: 0 }}>Our support team is available 24/7 to help you get started.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#4A2E1A" }}
              whileTap={{ scale: 0.96 }}
              style={{ background: "#6B3D22", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Chat With Us
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
