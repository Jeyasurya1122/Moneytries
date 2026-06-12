import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const contactDetails = [
  { icon: "📞", label: "Phone",    value: "+91 98765 43210",                              link: "tel:+919876543210" },
  { icon: "✉️", label: "Email",    value: "hello@moneytries.in",                          link: "mailto:hello@moneytries.in" },
  { icon: "💬", label: "WhatsApp", value: "+91 98765 43210",                              link: "https://wa.me/919876543210" },
  { icon: "📍", label: "Office",   value: "12th Floor, Maker Maxity, BKC, Mumbai 400051", link: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email) setSent(true);
  };

  return (
    <section
      className="contact-section"
      style={{ background: "#F5EDE0", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#3D2010", margin: "0 0 16px", fontWeight: 700 }}>Get in Touch</h2>
            <p style={{ color: "#6B3D22", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
              Have a question or want a free consultation? Our team is ready to help you grow.
            </p>
          </div>
        </FadeUp>

        <div className="contact-grid">
          {/* Left: contact info */}
          <div>
            <FadeUp>
              <div style={{ marginBottom: 32 }}>
                {contactDetails.map((c) => (
                  <motion.a key={c.label} href={c.link} whileHover={{ x: 4 }}
                    style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24, textDecoration: "none" }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(107,61,34,0.10)", border: "1px solid rgba(107,61,34,0.20)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#6B3D22", margin: "0 0 3px" }}>{c.label}</p>
                      <p style={{ fontSize: 14, color: "#3D2010", margin: 0, lineHeight: 1.5 }}>{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <motion.a href="https://wa.me/919876543210"
                whileHover={{ scale: 1.03, boxShadow: "0 12px 36px rgba(37,211,102,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{ display: "flex", alignItems: "center", gap: 12, background: "#25D366", color: "white", textDecoration: "none", borderRadius: 14, padding: "16px 24px", fontWeight: 700, fontSize: 15 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.292-1.508A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.032-1.386l-.36-.214-3.733.895.942-3.637-.235-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182 17.43 2.182 21.818 6.57 21.818 12c0 5.43-4.388 9.818-9.818 9.818z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>
            </FadeUp>
          </div>

          {/* Right: contact form */}
          <FadeUp delay={0.1}>
            <div style={{ background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)", borderRadius: 20, padding: "36px", border: "1px solid rgba(82,183,136,0.25)", boxShadow: "0 4px 32px rgba(26,60,42,0.15)" }}>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🌱</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#74C69D", marginBottom: 10 }}>Message Received!</h3>
                  <p style={{ color: "rgba(183,228,199,0.80)", fontSize: 15 }}>Our team will reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#FFFFFF", margin: "0 0 6px", fontWeight: 700 }}>Send Us a Message</h3>
                  <p style={{ fontSize: 14, color: "rgba(183,228,199,0.65)", marginBottom: 28 }}>Fill in the form and we'll get back to you within 24 hours.</p>

                  {/* Name + Email row — stacks on mobile via CSS class */}
                  <div className="contact-form-name-row">
                    {[
                      { placeholder: "Your Name",     key: "name",  type: "text" },
                      { placeholder: "Email Address", key: "email", type: "email" },
                    ].map((f) => (
                      <input key={f.key} type={f.type} placeholder={f.placeholder} value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ padding: "12px 14px", border: "1px solid rgba(82,183,136,0.30)", borderRadius: 10, fontSize: 14, outline: "none", width: "100%", fontFamily: "inherit", background: "#FFFFFF", color: "#1A3C2A" }}
                      />
                    ))}
                  </div>

                  <input type="tel" placeholder="Phone Number (optional)" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{ width: "100%", padding: "12px 14px", border: "1px solid rgba(82,183,136,0.30)", borderRadius: 10, fontSize: 14, outline: "none", marginBottom: 16, fontFamily: "inherit", background: "#FFFFFF", color: "#1A3C2A", boxSizing: "border-box" }}
                  />
                  <textarea placeholder="Your message or question…" value={form.message} rows={4}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 14px", border: "1px solid rgba(82,183,136,0.30)", borderRadius: 10, fontSize: 14, outline: "none", resize: "none", fontFamily: "inherit", background: "#FFFFFF", color: "#1A3C2A", boxSizing: "border-box", marginBottom: 20 }}
                  />
                  <motion.button onClick={handleSubmit}
                    whileHover={{ scale: 1.02, backgroundColor: "#52B788" }}
                    whileTap={{ scale: 0.97 }}
                    style={{ width: "100%", padding: "14px", background: "#2D6A4F", color: "#FFFFFF", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}
                  >Send Message 🌿</motion.button>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
