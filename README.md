# 🎮 Rayan Koussa — Cyber Arcade Portfolio & 3D Interactive Engine

> **Full-Stack Software Engineer & Creative Developer Portfolio**  
> Crafted by **Rayan Koussa** (M.S. in Hypermedia Technologies, Université Paris 8).  
> Live Production URL: [https://rayankoussa.vercel.app](https://rayankoussa.vercel.app)

---

## 🌟 Overview & Core Engineering Highlights

- **🌐 Full Internationalization (i18n)**:
  - English by default with instantaneous locale switching (EN / FR).
  - Built with `next-intl` App Router, self-referencing canonical tags, and dynamic hreflang alternates.

- **🎮 Cyber Game Engine HUD Interface**:
  - **Player HP Scroll Bar**: Real-time reading progression bar integrated directly into the HUD.
  - **Dark Obsidian Aesthetics**: Cyber-futuristic typography (`Space Grotesk`, `JetBrains Mono`) with accessible contrast (> 7:1, WCAG AAA).
  - **Vector Iconography**: Lightweight, crisp SVG icons (`Lucide Icons`, `React Icons`) with accessible screen-reader attributes.

- **👾 Space Invaders Arcade Arena 2D Canvas**:
  - Native HTML5 2D Canvas engine with pixel-perfect mouse and touch tracking.
  - Progressive endless waves (invader acceleration, bunker shielding, alien laser drops).
  - Lazy-loaded dynamically to preserve initial page load performance.

- **🌌 Ambient 3D Three.js Vector Core**:
  - Interactive WebGL wireframe geometry scene reacting to cursor movements.
  - Optimized with `requestIdleCallback` lazy execution to eliminate main-thread blocking.

- **⚡ Lighthouse & Core Web Vitals Optimization**:
  - Fast Contentful Paint (FCP) < 0.5s & zero layout shifts (CLS: 0).
  - Low Total Blocking Time (TBT) via async chunking.
  - Native `llms.txt` integration for AI agents and WebMCP crawlers.

- **📊 Telemetry & Insights**:
  - Built-in `@vercel/analytics` and `@vercel/speed-insights` tracking real-time traffic and Web Vitals.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router, Turbopack) & React 19
- **Languages**: TypeScript (Strict typing, ES2022 target)
- **Internationalization**: `next-intl`
- **Styling & Animations**: Tailwind CSS v4, Vanilla CSS Custom Properties, Framer Motion
- **3D & Graphics**: Three.js, HTML5 2D Canvas
- **Telemetry**: Vercel Analytics, Vercel Speed Insights, Plausible Analytics

---

## 🚀 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/RCruento/Portfolio_CV.git
cd Portfolio_CV

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in English (or `/fr` for French).

### Production Build & Linting

```bash
# Type check and build optimized bundle
npm run build

# Run ESLint validation
npm run lint
```

---

## 📬 Contact & Networks

- **LinkedIn**: [Rayan Koussa](https://www.linkedin.com/in/rayan-koussa/)
- **GitHub**: [RCruento](https://github.com/RCruento)
- **Email**: [rayan.koussa@outlook.fr](mailto:rayan.koussa@outlook.fr)
- **Location**: Île-de-France, France
