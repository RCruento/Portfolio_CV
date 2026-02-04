import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import { ThemeProvider as AppThemeProvider } from "@/components/AppThemeProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayankoussa.vercel.app"),
  title: "Rayan Koussa – Développeur Full-Stack Junior | Portfolio",
  description:
    "Portfolio de Rayan Koussa, développeur full-stack junior. Compétences en React, Next.js, TypeScript, Node.js, PHP, MySQL. Backend et frontend.",
  keywords: ["développeur web", "full-stack", "junior", "React", "TypeScript", "Node.js", "PHP", "MySQL", "portfolio"],
  authors: [{ name: "Rayan Koussa", url: "https://rayankoussa.vercel.app" }],
  creator: "Rayan Koussa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://rayankoussa.vercel.app",
  },
  openGraph: {
    title: "Rayan Koussa – Développeur Full-Stack Junior",
    description:
      "Développeur full-stack junior polyvalent. Compétences en React, Next.js, Node.js, PHP, MySQL et plus. Découvrez mes projets.",
    url: "https://rayankoussa.vercel.app",
    siteName: "Portfolio Rayan Koussa",
    images: [
      {
        url: "/RK.jpg",
        width: 800,
        height: 600,
        alt: "Rayan Koussa – Développeur Full-Stack",
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Koussa – Développeur Full-Stack Junior",
    description:
      "Développeur full-stack junior : React, Node.js, PHP, MySQL. Backend et frontend.",
    images: ["/RK.jpg"],
    creator: "@rayankoussa",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://rayankoussa.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="LiwGlKjCRi705INfmXEvEVi6otaW7wYjP-1oiC36oZE" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rayan Koussa",
              url: "https://rayankoussa.vercel.app",
              image: "https://rayankoussa.vercel.app/RK.jpg",
              jobTitle: "Développeur Full-Stack Junior",
              sameAs: [
                "https://github.com/RCruento",
                "https://linkedin.com/in/rayan-koussa",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MySQL",
                "MongoDB",
                "Tailwind CSS",
              ],
            }),
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppThemeProvider>
          <AppNavbar />
          <div className="pt-16">{children}</div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
