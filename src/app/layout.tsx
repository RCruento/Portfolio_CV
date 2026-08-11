import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { ThreeCanvasBackground } from "@/components/ThreeCanvasBackground";
import { ThemeProvider as AppThemeProvider } from "@/components/AppThemeProvider";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayankoussa.vercel.app"),
  title: {
    default: "Rayan Koussa – Développeur Full-Stack Junior | Portfolio Interactive 3D",
    template: "%s | Rayan Koussa",
  },
  description:
    "Portfolio interactif 3D de Rayan Koussa, développeur full-stack junior. Spécialisé en React, Next.js, Motion, Three.js, TypeScript, Node.js, Go, PHP, MySQL.",
  keywords: [
    "Rayan Koussa",
    "développeur web",
    "full-stack junior",
    "développeur React",
    "Next.js 16",
    "Three.js",
    "Framer Motion",
    "TypeScript",
    "Node.js",
    "PHP",
    "MySQL",
    "Go",
    "Paris 8 Hypermédia",
    "portfolio",
  ],
  authors: [{ name: "Rayan Koussa", url: "https://rayankoussa.vercel.app" }],
  creator: "Rayan Koussa",
  publisher: "Rayan Koussa",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://rayankoussa.vercel.app",
  },
  openGraph: {
    title: "Rayan Koussa – Développeur Full-Stack Junior | Portfolio",
    description:
      "Développeur full-stack polyvalent. Compétences en Three.js, React, Next.js, Node.js, Go, MySQL et plus. Découvrez mes projets.",
    url: "https://rayankoussa.vercel.app",
    siteName: "Portfolio Rayan Koussa",
    images: [
      {
        url: "/RK.jpg",
        width: 800,
        height: 600,
        alt: "Rayan Koussa – Développeur Full-Stack Junior",
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Koussa – Développeur Full-Stack Junior",
    description: "Développeur full-stack junior : Three.js, React, Motion, Node.js, PHP, Go.",
    images: ["/RK.jpg"],
    creator: "@rayankoussa",
  },
  verification: {
    google: "LiwGlKjCRi705INfmXEvEVi6otaW7wYjP-1oiC36oZE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://rayankoussa.vercel.app/#person",
      name: "Rayan Koussa",
      givenName: "Rayan",
      familyName: "Koussa",
      url: "https://rayankoussa.vercel.app",
      image: "https://rayankoussa.vercel.app/RK.jpg",
      jobTitle: "Développeur Full-Stack Junior",
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Recherche Opportunité",
      },
      description:
        "Développeur full-stack junior diplômé du Master 2 Technologies de l'Hypermédia (Université Paris 8). Spécialisé en React, Next.js, Three.js, Motion, TypeScript, Node.js et Go.",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Université Paris 8",
          url: "https://www.univ-paris8.fr",
        },
        {
          "@type": "EducationalOrganization",
          name: "Université de Lorraine",
          url: "https://www.univ-lorraine.fr",
        },
      ],
      sameAs: [
        "https://github.com/RCruento",
        "https://linkedin.com/in/rayan-koussa-8b9a84183",
      ],
      knowsAbout: [
        "Next.js", "React", "Three.js", "Motion", "TypeScript", "Node.js", "Express",
        "Go", "MySQL", "MongoDB", "Tailwind CSS", "PHP", "Java", "Web Security",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://rayankoussa.vercel.app/#website",
      url: "https://rayankoussa.vercel.app",
      name: "Portfolio Rayan Koussa",
      description: "Portfolio de Rayan Koussa, Développeur Full-Stack Junior.",
      publisher: {
        "@id": "https://rayankoussa.vercel.app/#person",
      },
      inLanguage: "fr-FR",
    },
  ];

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030712" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* Flash prevention */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");document.documentElement.classList.toggle("dark",t==="dark"||(!t&&true));}catch(e){}})();`,
          }}
        />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />

        <Script
          async
          defer
          data-domain="rayankoussa.vercel.app"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <AppThemeProvider>
          {/* Ambient 3D WebGL Background */}
          <ThreeCanvasBackground />

          <AppNavbar />
          <main className="pt-20 flex-1 relative z-10">{children}</main>
          <AppFooter />
        </AppThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
