import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { ProjectsView } from "@/components/ProjectsView";

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
  };
}

export default function ProjectsPage() {
  return <ProjectsView />;
}
