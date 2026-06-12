import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

const posts = [
  { tag: "Beginner Guide",     tagColor: "#52B788", title: "The Complete Beginner's Guide to Sustainable Investing", excerpt: "New to investing? We break down everything you need to know about ESG funds, green bonds, and how to start with as little as ₹500.", readTime: "5 min read", date: "Jun 2025", emoji: "🌱" },
  { tag: "Financial Tips",     tagColor: "#D4A853", title: "How Compounding Works — And Why Starting Early Changes Everything", excerpt: "The 8th wonder of the world, as Einstein called it. We show with real numbers why even ₹1,000/month at age 25 beats ₹10,000/month at age 35.", readTime: "7 min read", date: "May 2025", emoji: "📈" },
  { tag: "Market Update",      tagColor: "#5B9BD5", title: "Monthly Market Insights: Green Energy Stocks Surge 22%", excerpt: "India's renewable sector saw a record-breaking quarter. Here's what it means for your Moneytries portfolio and what we expect in Q3.", readTime: "4 min read", date: "Apr 2025", emoji: "⚡" },
  { tag: "Financial Planning", tagColor: "#E8A45A", title: "7 Financial Planning Mistakes Every Indian Makes in Their 30s", excerpt: "From ignoring inflation to over-investing in gold — our certified advisors reveal the seven most common wealth-building mistakes, and how to avoid them.", readTime: "6 min read", date: "Mar 2025", emoji: "🏦" },
  { tag: "Tax Guide",          tagColor: "#7BC8A4", title: "How to Maximise Tax Benefits on Your Investments in FY 2025", excerpt: "A practical guide to 80C, 80D, ELSS, and capital gains optimisation strategies that can save you up to ₹1.5 Lakhs every financial year.", readTime: "8 min read", date: "Feb 2025", emoji: "💰" },
  { tag: "Case Study",         tagColor: "#2D6A4F", title: "From ₹5,000 to ₹2.4 Lakhs: Sita's 3-Year Moneytries Story", excerpt: "A school teacher from Pune started her investment journey with a ₹5,000 Seedling plan. Here's how consistent investing transformed her financial future.", readTime: "3 min read", date: "Jan 2025", emoji: "🌳" },
];

export default function Blog() {
  return (
    <section
      className="blog-section"
      style={{ background: "#E8F5EE", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeUp>
          <div className="blog-header">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1A3C2A", margin: "0 0 12px", fontWeight: 700 }}>Financial Insights</h2>
              <p style={{ color: "#2D6A4F", fontSize: 16, maxWidth: 440 }}>Expert guides, market updates, and real investor stories — straight from our team.</p>
            </div>
            <motion.a href="#" whileHover={{ scale: 1.04 }}
              style={{ fontSize: 14, fontWeight: 600, color: "#6B3D22", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, border: "1.5px solid rgba(107,61,34,0.40)", borderRadius: 10, padding: "10px 20px", whiteSpace: "nowrap", flexShrink: 0, minHeight: 44 }}
            >View All Articles →</motion.a>
          </div>
        </FadeUp>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <FadeUp key={post.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(107,61,34,0.22)" }}
                transition={{ duration: 0.3 }}
                style={{ background: "linear-gradient(135deg, #4A2E1A 0%, #6B3D22 50%, #3D2010 100%)", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(196,168,130,0.22)", cursor: "pointer", height: "100%" }}
              >
                <div style={{ background: "linear-gradient(135deg, rgba(196,168,130,0.10), rgba(196,168,130,0.20))", padding: "28px 24px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 40 }}>{post.emoji}</span>
                  <div style={{ background: post.tagColor, color: "white", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>
                    {post.tag}
                  </div>
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px", lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(196,168,130,0.85)", lineHeight: 1.7, margin: "0 0 20px" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "rgba(196,168,130,0.55)" }}>{post.date} · {post.readTime}</span>
                    <span style={{ fontSize: 13, color: "#C4A882", fontWeight: 600 }}>Read →</span>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
