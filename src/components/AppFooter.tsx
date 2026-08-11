"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart, Gamepad2 } from "lucide-react";
import Link from "next/link";

export function AppFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t-2 border-border-arcade bg-surface py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <Link
            href="/"
            className="font-display font-black text-2xl tracking-tight text-foreground uppercase flex items-center justify-center md:justify-start gap-2"
          >
            <Gamepad2 size={22} className="text-rose-600" />
            <span>RAYAN <span className="text-rose-600 font-black">KOUSSA</span></span>
          </Link>
          <p className="font-mono-label text-xs font-bold text-muted-foreground uppercase">
            DÉVELOPPEUR FULL-STACK • MASTER 2 HYPERMEDIA (PARIS 8)
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/rayan-koussa-8b9a84183"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-xl arcade-card text-foreground hover:text-rose-600 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/RCruento"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-xl arcade-card text-foreground hover:text-rose-600 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:rayan.koussa@outlook.fr"
            aria-label="Email"
            className="p-3 rounded-xl arcade-card text-foreground hover:text-rose-600 transition-all"
          >
            <Mail size={18} />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="arcade-btn-red p-3 rounded-xl cursor-pointer ml-2"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t-2 border-border-arcade/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-label font-bold text-muted-foreground gap-2 uppercase">
        <span>© {new Date().getFullYear()} RAYAN KOUSSA. TOUS DROITS RÉSERVÉS.</span>
        <span className="flex items-center gap-1">
          CONÇU AVEC <Heart size={12} className="text-rose-600 fill-rose-600" /> EN NEXT.JS 16 & THREE.JS
        </span>
      </div>
    </footer>
  );
}
