"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import { type Locale } from "@/i18n/routing";
import { getDictionary, type TranslationDictionary } from "@/i18n/dictionary";
import { usePathname, useRouter } from "next/navigation";

interface LanguageContextType {
  locale: Locale;
  t: TranslationDictionary;
  switchLocale: (nextLocale: Locale) => void;
  isPending: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    // Set cookie for next-intl and persistence
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    localStorage.setItem("preferred_locale", nextLocale);

    setLocale(nextLocale);

    // Compute new pathname by replacing the locale prefix (/en/ -> /fr/ or /en -> /fr)
    let newPath = pathname;
    if (pathname.startsWith(`/${locale}`)) {
      newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    } else {
      newPath = `/${nextLocale}${pathname === "/" ? "" : pathname}`;
    }

    startTransition(() => {
      router.push(newPath);
      router.refresh();
    });
  };

  const t = getDictionary(locale);

  return (
    <LanguageContext.Provider value={{ locale, t, switchLocale, isPending }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
