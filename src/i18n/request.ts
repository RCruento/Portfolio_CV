import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";
import { dictionaries } from "./dictionary";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: dictionaries[locale as Locale],
  };
});
