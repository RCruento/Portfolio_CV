import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rayankoussa.vercel.app"),
  title: {
    default: "Rayan Koussa – Full-Stack Software Engineer | 3D Interactive Portfolio",
    template: "%s | Rayan Koussa",
  },
  description:
    "Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Go & Three.js. Building scalable web apps and interactive 3D experiences.",
  keywords: [
    "Rayan Koussa",
    "Full-Stack Software Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Three.js",
    "TypeScript",
    "Go",
    "Node.js",
    "WebGL",
    "Interactive Portfolio",
  ],
  authors: [{ name: "Rayan Koussa", url: "https://rayankoussa.vercel.app" }],
  creator: "Rayan Koussa",
  publisher: "Rayan Koussa",
  openGraph: {
    title: "Rayan Koussa – Full-Stack Software Engineer | 3D Interactive Portfolio",
    description:
      "Full-Stack Software Engineer (M.S. Hypermedia). Building high-performance web applications, real-time distributed systems, and interactive 3D WebGL experiences with Next.js, React, TypeScript, Go & Three.js.",
    url: "https://rayankoussa.vercel.app",
    siteName: "Rayan Koussa Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/RK.jpg",
        width: 800,
        height: 600,
        alt: "Rayan Koussa – Full-Stack Software Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Koussa – Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Go, Three.js, and real-time distributed systems.",
    images: ["/RK.jpg"],
    creator: "@rayankoussa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
