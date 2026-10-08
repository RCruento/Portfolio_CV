import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rayankoussa.vercel.app";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  const locales = ["en", "fr"];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${base}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: `${base}/en${route.path}`,
          fr: `${base}/fr${route.path}`,
          "x-default": `${base}/en${route.path}`,
        },
      },
    }))
  );
}
