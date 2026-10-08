import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import AppNavbar from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { ThreeCanvasBackground } from "@/components/ThreeCanvasBackground";
import { ThemeProvider as AppThemeProvider } from "@/components/AppThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { routing, type Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL("https://rayankoussa.vercel.app"),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
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
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `https://rayankoussa.vercel.app/${locale}`,
      siteName: "Portfolio Rayan Koussa",
      images: [
        {
          url: "/RK.jpg",
          width: 800,
          height: 600,
          alt: dict.meta.ogImageAlt,
          type: "image/jpeg",
        },
      ],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.twitterDescription,
      images: ["/RK.jpg"],
      creator: "@rayankoussa",
    },
    verification: {
      google: "LiwGlKjCRi705INfmXEvEVi6otaW7wYjP-1oiC36oZE",
    },
  };
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;
  const dict = getDictionary(locale);

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://rayankoussa.vercel.app/#person",
      name: "Rayan Koussa",
      givenName: "Rayan",
      familyName: "Koussa",
      url: `https://rayankoussa.vercel.app/${locale}`,
      image: "https://rayankoussa.vercel.app/RK.jpg",
      jobTitle: dict.meta.personJobTitle,
      worksFor: {
        "@type": "Organization",
        name: dict.meta.personOrg,
      },
      description: dict.meta.personDescription,
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
        "https://www.linkedin.com/in/rayan-koussa/",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "Three.js",
        "TypeScript",
        "Node.js",
        "Go",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "PHP",
        "Java",
        "Web Security",
        "REST APIs",
        "High Frequency Trading",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://rayankoussa.vercel.app/#website",
      url: `https://rayankoussa.vercel.app/${locale}`,
      name: "Portfolio Rayan Koussa",
      description: dict.meta.description,
      publisher: {
        "@id": "https://rayankoussa.vercel.app/#person",
      },
      inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    },
  ];

  return (
    <html lang={locale} suppressHydrationWarning>
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
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <LanguageProvider initialLocale={locale}>
          <AppThemeProvider>
            {/* Ambient 3D WebGL Background */}
            <ThreeCanvasBackground />

            <AppNavbar />
            <main className="pt-20 flex-1 relative z-10">{children}</main>
            <AppFooter />
          </AppThemeProvider>
        </LanguageProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
