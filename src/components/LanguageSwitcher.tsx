"use client";

import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, switchLocale, isPending } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center p-1 rounded-xl bg-black/60 border border-cyan-400/40 shadow-sm",
        className
      )}
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-2 pr-1 text-cyan-400/80 hidden sm:block">
        <Globe size={13} />
      </div>

      <button
        type="button"
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={cn(
          "px-2.5 py-1 rounded-lg font-mono-label text-[11px] font-extrabold transition-all cursor-pointer",
          locale === "en"
            ? "bg-rose-500 text-white shadow-md shadow-rose-500/50"
            : "text-muted-foreground hover:text-white"
        )}
        aria-pressed={locale === "en"}
        title="Switch to English"
      >
        EN
      </button>

      <span className="text-cyan-400/30 text-xs px-0.5 select-none">•</span>

      <button
        type="button"
        onClick={() => switchLocale("fr")}
        disabled={isPending}
        className={cn(
          "px-2.5 py-1 rounded-lg font-mono-label text-[11px] font-extrabold transition-all cursor-pointer",
          locale === "fr"
            ? "bg-rose-500 text-white shadow-md shadow-rose-500/50"
            : "text-muted-foreground hover:text-white"
        )}
        aria-pressed={locale === "fr"}
        title="Passer en Français"
      >
        FR
      </button>
    </div>
  );
}
