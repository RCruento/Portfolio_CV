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
  metadataBase: new URL("https://rayankoussa.fr"),
  title: "Rayan Koussa – Portfolio développeur web",
  description:
    "Portfolio de Rayan Koussa, développeur full-stack Next.js, TypeScript, Tailwind CSS, animations, dark mode, projets, contact.",
  openGraph: {
    title: "Rayan Koussa – Portfolio développeur web",
    description:
      "Portfolio  de Rayan Koussa, développeur full-stack Next.js, TypeScript, Tailwind CSS, animations, dark mode, projets, contact.",
    url: "https://rayankoussa.fr",
    siteName: "Portfolio Rayan Koussa",
    images: [
      {
        url: "/RK.jpg",
        width: 800,
        height: 600,
        alt: "Rayan Koussa – Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Koussa – Portfolio développeur web",
    description:
      "Portfolio moderne de Rayan Koussa, développeur full-stack Next.js, TypeScript, Tailwind CSS, animations, dark mode, projets, contact.",
    images: ["/RK.jpg"],
    creator: "@rayankoussa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          defer
          data-domain="rayankoussa.fr"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
