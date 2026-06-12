import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const team = [
  {
    name: "Arjun Mehta", role: "Founder & CEO",
    bio: "Former Goldman Sachs VP with 15 years in sustainable finance. Passionate about democratising ethical investing for every Indian.",
    initials: "AM", color: "#2D6A4F", linkedin: "#", tag: "🏆 Forbes 30 Under 30",
  },
  {
    name: "Priya Nair", role: "Chief Investment Officer",
    bio: "Ex-BlackRock ESG portfolio manager. Manages ₹500Cr+ across green bonds, renewable energy, and sustainable REITs.",
    initials: "PN", color: "#52B788", linkedin: "#", tag: "📊 CFA Charterholder",
  },
  {
    name: "Rohan Desai", role: "Head of Technology",
    bio: "Built AI-driven risk engines at Zerodha. Leads our platform infrastructure ensuring 99.9% uptime and bank-grade security.",
    initials: "RD", color: "#D4A853", linkedin: "#", tag: "⚡ IIT Bombay Alumnus",
  },
  {
    name: "Sneha Kapoor", role: "Customer Success Lead",
    bio: "Dedicated to every investor's journey. Sneha's team ensures you always have a real person to speak to, any hour of the day.",
    initials: "SK", color: "#5B9BD5", linkedin: "#", tag: "💬 5★ Support Rating",
  },
];

export default function Team() {
  return (
    <section
      className="team-section"
      style={{ background: "#E8F5EE", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1A3C2A", margin: "0 0 16px", fontWeight: 700 }}>
              The People Behind Your Growth
            </h2>
            <p style={{ color: "#2D6A4F", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              A team of seasoned finance professionals, technologists, and customer advocates united by one mission.
            </p>
          </div>
        </FadeUp>

        <div className="team-grid">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(107,61,34,0.22)" }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)",
                  borderRadius: 20, overflow: "hidden",
                  border: "1px solid rgba(196,168,130,0.22)",
                }}
              >
                <div style={{ background: "linear-gradient(135deg, rgba(196,168,130,0.12), rgba(196,168,130,0.22))", padding: "36px 24px 24px", textAlign: "center", position: "relative" }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: member.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 26, fontWeight: 700, color: "white", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}>
                    {member.initials}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px" }}>{member.name}</h3>
                  <p style={{ fontSize: 12, color: "rgba(196,168,130,0.75)", margin: "0 0 12px", fontWeight: 500 }}>{member.role}</p>
                  <div style={{ display: "inline-block", background: "rgba(196,168,130,0.15)", border: "1px solid rgba(196,168,130,0.30)", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, color: "#C4A882" }}>
                    {member.tag}
                  </div>
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <p style={{ fontSize: 13, color: "rgba(196,168,130,0.85)", lineHeight: 1.7, margin: "0 0 16px" }}>{member.bio}</p>
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.04 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#C4A882", textDecoration: "none", fontWeight: 600, background: "rgba(196,168,130,0.12)", border: "1px solid rgba(196,168,130,0.25)", padding: "6px 14px", borderRadius: 20 }}
                  >
                    <span>💼</span> LinkedIn Profile
                  </motion.a>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
