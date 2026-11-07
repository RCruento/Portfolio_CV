"use client";

import { useState } from "react";
import { Gamepad2, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "./LanguageProvider";

const ArcadeMiniGame = dynamic(
  () => import("@/components/ArcadeMiniGame").then((mod) => mod.ArcadeMiniGame),
  { ssr: false }
);

export function ArcadeModalLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-rose-600 text-white border border-rose-500/40 hover:border-rose-400 shadow-xl shadow-rose-950/40 backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Ouvrir le mini-jeu Arcade"
      >
        <span className="p-1 rounded-full bg-rose-500/20 text-rose-400 group-hover:text-white transition-colors">
          <Gamepad2 size={18} />
        </span>
        <span className="font-mono-label text-xs font-black tracking-wider uppercase">
          {t.arcade.badge || "Arcade"}
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </button>

      {/* Arcade Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-950 border-2 border-rose-500/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-rose-500/30 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-2 text-rose-400 font-mono-label font-black text-sm">
                <Gamepad2 size={20} />
                <span>{t.arcade.title || "RETRO SPACE INVADERS"}</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-600 border border-slate-700 transition cursor-pointer"
                aria-label="Fermer le jeu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-3 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/60">
              <ArcadeMiniGame />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
