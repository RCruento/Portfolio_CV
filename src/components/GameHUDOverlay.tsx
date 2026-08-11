"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Trophy, Zap } from "lucide-react";

export function GameHUDOverlay() {
  const [scrollHp, setScrollHp] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollHp(Math.round(progress));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-cyan-500/40 px-4 py-1.5 flex items-center justify-between text-xs font-mono-label font-bold text-white">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-rose-500">
          <Shield size={14} className="animate-pulse" />
          <span>PLAYER HP</span>
        </div>

        <div className="w-32 sm:w-48 h-2.5 rounded-full bg-black border border-rose-500/50 overflow-hidden">
          <motion.div
            animate={{ width: `${Math.max(15, scrollHp)}%` }}
            transition={{ ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-rose-500 via-yellow-400 to-emerald-400"
          />
        </div>
        <span className="text-[11px] text-cyan-400 font-extrabold">{scrollHp}%</span>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-amber-400 hidden sm:flex items-center gap-1">
          <Trophy size={14} />
          LEVEL 99 MASTER 2
        </span>
        <span className="text-emerald-400 flex items-center gap-1">
          <Zap size={14} className="animate-bounce" />
          STATUS: READY
        </span>
      </div>
    </div>
  );
}
