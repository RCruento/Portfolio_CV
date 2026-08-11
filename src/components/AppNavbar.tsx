"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "STAGE 1 / ACCUEIL" },
  { href: "/projects", label: "STAGE 2 / PROJETS" },
  { href: "/contact", label: "STAGE 3 / CONTACT" },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-[28px] left-0 w-full z-40 bg-surface/90 backdrop-blur-md border-b border-cyan-400/40 py-2.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-black text-lg sm:text-xl tracking-tight text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/50">
            <Gamepad2 size={18} />
          </div>
          <span className="font-mono-label text-white">
            RAYAN<span className="text-cyan-400 font-black">.GAME</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono-label text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-xl transition-all border",
                  isActive
                    ? "bg-rose-500/20 text-rose-400 border-rose-500 shadow-lg shadow-rose-500/30 font-black"
                    : "border-transparent text-muted-foreground hover:text-white hover:border-cyan-400/40"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Sheet Trigger */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-xl border border-rose-500 bg-black/60 text-white" aria-label="Menu">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-black border-l-2 border-rose-500 p-6 flex flex-col gap-6">
              <SheetTitle className="font-mono-label text-rose-500 font-black text-xl border-b-2 border-rose-500 pb-2">
                NAVIGATION GAME
              </SheetTitle>
              <div className="flex flex-col gap-3 mt-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl font-mono-label text-xs font-bold uppercase tracking-wider text-left border border-cyan-400/40",
                        isActive ? "bg-rose-500 text-white" : "text-white hover:bg-rose-500/20"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
