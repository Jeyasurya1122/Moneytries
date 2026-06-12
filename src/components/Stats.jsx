import FadeUp from "./FadeUp";
import Counter from "./Counter";

const stats = [
  { label: "Total Invested",  value: 1200000000, prefix: "$", suffix: "" },
  { label: "Active Investors",value: 47000,       prefix: "",  suffix: "+" },
  { label: "Average APY",     value: 15,          prefix: "",  suffix: "%" },
  { label: "Countries",       value: 38,          prefix: "",  suffix: "" },
];

export default function Stats() {
  return (
    <section className="stats-section" style={{ background: "#F5EDE0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          className="stats-bar"
          style={{
            background: "linear-gradient(135deg, #1A3C2A 0%, #2D6A4F 50%, #1B4332 100%)",
            borderRadius: 20,
            display: "grid",
            border: "1px solid rgba(45,106,79,0.30)",
          }}
        >
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <div
                  className="stats-value"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#FFFFFF" }}
                >
                  {s.prefix}
                  <Counter to={s.value} />
                  {s.suffix}
                </div>
                <p style={{ color: "rgba(183,228,199,0.70)", fontSize: 14, margin: "8px 0 0", textTransform: "uppercase", letterSpacing: 1 }}>
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
