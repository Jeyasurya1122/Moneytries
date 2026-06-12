# Moneytries – React Vite App (v2 Enhanced)

A premium green investment landing page built with React + Vite + Framer Motion.

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

3. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
moneytries/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── tokens.js
    └── components/
        ├── Navbar.jsx          – Sticky nav with scroll effect
        ├── Hero.jsx            – Hero + animated money tree
        ├── Stats.jsx           – Animated stats bar
        ├── Plans.jsx           – 4 investment plan cards
        ├── TrustSecurity.jsx   – ★ NEW: Security badges + trust stats
        ├── HowItWorks.jsx      – Steps + Why Moneytries grid
        ├── Calculator.jsx      – Interactive ROI calculator
        ├── Team.jsx            – ★ NEW: Team member cards
        ├── Testimonials.jsx    – Customer reviews
        ├── Blog.jsx            – ★ NEW: Financial insights articles
        ├── ReferralBanner.jsx  – ★ NEW: Refer & earn with copy code
        ├── FAQ.jsx             – ★ NEW: Accordion FAQ (2 columns)
        ├── Contact.jsx         – ★ NEW: Contact form + WhatsApp CTA + map
        ├── CTA.jsx             – Final call to action
        ├── Footer.jsx          – Footer with newsletter
        ├── ChatWidgets.jsx     – ★ NEW: Floating live chat + exit popup
        ├── UIExtras.jsx        – ★ NEW: Scroll progress bar + mobile sticky CTA
        ├── Counter.jsx         – Animated number counter
        └── FadeUp.jsx          – Scroll-triggered fade animation
```

## New Features Added (v2)

| Feature | Component |
|---|---|
| Trust & Security badges | TrustSecurity.jsx |
| FAQ accordion (2-col) | FAQ.jsx |
| Team section with bios | Team.jsx |
| Blog / insights cards | Blog.jsx |
| Refer & Earn banner | ReferralBanner.jsx |
| Contact form + WhatsApp | Contact.jsx |
| Floating live chat widget | ChatWidgets.jsx |
| Exit-intent email popup | ChatWidgets.jsx |
| Scroll progress indicator | UIExtras.jsx |
| Mobile sticky CTA bar | UIExtras.jsx |

## Dependencies
- **React 18** – UI library
- **Vite 5** – Build tool
- **Framer Motion 11** – Animations
