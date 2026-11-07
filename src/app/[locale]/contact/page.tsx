import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { ContactView } from "@/components/ContactView";
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
    twitter: {
      card: "summary_large_image",
      title: `${dict.meta.contactTitle} | Rayan Koussa`,
      description: dict.meta.contactDescription,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (routing.locales.includes(rawLocale as Locale)
    ? rawLocale
    : routing.defaultLocale) as Locale;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rayan Koussa",
    url: `https://rayankoussa.vercel.app/${locale}/contact`,
    mainEntity: {
      "@type": "Person",
      name: "Rayan Koussa",
      email: "mailto:rayan.koussa@outlook.fr",
      url: "https://rayankoussa.vercel.app",
    },
  };

  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactView />
    </>
  );
}
