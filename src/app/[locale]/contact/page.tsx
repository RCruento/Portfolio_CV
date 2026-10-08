import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { ContactView } from "@/components/ContactView";

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
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    alternates: {
      canonical: `https://rayankoussa.vercel.app/${locale}/contact`,
      languages: {
        en: "https://rayankoussa.vercel.app/en/contact",
        fr: "https://rayankoussa.vercel.app/fr/contact",
        "x-default": "https://rayankoussa.vercel.app/en/contact",
      },
    },
    openGraph: {
      title: `${dict.meta.contactTitle} | Rayan Koussa`,
      description: dict.meta.contactDescription,
      url: `https://rayankoussa.vercel.app/${locale}/contact`,
    },
  };
}

export default function ContactPage() {
  return <ContactView />;
}
