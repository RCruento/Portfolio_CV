import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { HomeView } from "@/components/HomeView";

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
    title: {
      absolute: dict.meta.title,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `https://rayankoussa.vercel.app/${locale}`,
      languages: {
        en: "https://rayankoussa.vercel.app/en",
        fr: "https://rayankoussa.vercel.app/fr",
        "x-default": "https://rayankoussa.vercel.app/en",
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `https://rayankoussa.vercel.app/${locale}`,
    },
  };
}

export default function HomePage() {
  return <HomeView />;
}
