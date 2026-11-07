import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { ProjectsView } from "@/components/ProjectsView";
import Script from "next/script";

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
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
    alternates: {
      canonical: `https://rayankoussa.vercel.app/${locale}/projects`,
      languages: {
        en: "https://rayankoussa.vercel.app/en/projects",
        fr: "https://rayankoussa.vercel.app/fr/projects",
        "x-default": "https://rayankoussa.vercel.app/en/projects",
      },
    },
    openGraph: {
      title: `${dict.meta.projectsTitle} | Rayan Koussa`,
      description: dict.meta.projectsDescription,
      url: `https://rayankoussa.vercel.app/${locale}/projects`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.meta.projectsTitle} | Rayan Koussa`,
      description: dict.meta.projectsDescription,
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Career Finder Helper AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Windows, macOS, Linux",
          description:
            "Local-First desktop ETL ingestion and job matching AI system with AES-256 BYOK encryption.",
          url: `https://rayankoussa.vercel.app/${locale}/projects`,
          author: {
            "@type": "Person",
            name: "Rayan Koussa",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "MBTI Explorer",
          applicationCategory: "WebApplication",
          description: "Personality-driven location discovery platform built with React, Node.js, and MySQL.",
          url: `https://rayankoussa.vercel.app/${locale}/projects`,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "KuCoinBot v10",
          applicationCategory: "FinanceApplication",
          description: "High-frequency cryptocurrency scalping engine in Go with fractional Kelly sizing.",
          url: `https://rayankoussa.vercel.app/${locale}/projects`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsView />
    </>
  );
}
