import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Plans from "./components/Plans";
import TrustSecurity from "./components/TrustSecurity";
import HowItWorks from "./components/HowItWorks";
import Calculator from "./components/Calculator";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import ReferralBanner from "./components/ReferralBanner";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { FloatingChat } from "./components/ChatWidgets";
import { ScrollProgress } from "./components/UIExtras";

export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Plans />
      <TrustSecurity />
      <HowItWorks />
      <Calculator />
      <Team />
      <Testimonials />
      <Blog />
      <ReferralBanner />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
      <FloatingChat />
    </div>
  );
}
