"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Gamepad2, Music, Palette, UtensilsCrossed, ExternalLink, Instagram } from "lucide-react";

interface GameItem {
  name: string;
  logo: string;
  link?: string;
  tag: string;
}

const GAMES: GameItem[] = [
  {
    name: "League of Legends (Cruento#Ray)",
    logo: "/games/Lol.png",
    link: "https://www.op.gg/summoners/euw/Cruento-Ray",
    tag: "OP.GG Profile",
  },
  {
    name: "Sekiro: Shadows Die Twice",
    logo: "/games/Sekiro.png",
    tag: "Action RPG",
  },
  {
    name: "Elden Ring",
    logo: "/games/Elden.png",
    tag: "Soulsborne",
  },
  {
    name: "Teamfight Tactics",
    logo: "/games/TFT.png",
    tag: "Auto Battler",
  },
];

const CREATIVE_PASSIONS = [
  { name: "Guitare", desc: "Acoustique & Électrique", icon: Music, color: "from-amber-500 to-rose-500" },
  { name: "Dessin", desc: "Digital Art & Sketching", icon: Palette, color: "from-purple-500 to-indigo-500" },
  { name: "Cuisine", desc: "Gastronomie & Patisserie", icon: UtensilsCrossed, color: "from-emerald-500 to-teal-500" },
];

export default function Hobbies() {
  const [showInsta, setShowInsta] = useState(true);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-10">
      <div className="text-center flex flex-col items-center gap-2">
        <span className="font-mono-label text-xs tracking-widest text-rose-500 uppercase font-semibold">
          Passions & Inspiration
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
          Loisirs & Centres d&apos;intérêt
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Photographie Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 glass-card p-6 rounded-3xl flex flex-col gap-5 border border-border-subtle"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
                <Camera size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Photographie</h3>
                <p className="font-mono-label text-xs text-muted-foreground">Capture visuelle & argentique</p>
              </div>
            </div>

            <button
              onClick={() => setShowInsta(!showInsta)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-label bg-rose-500/10 text-rose-500 font-semibold border border-rose-500/20 hover:bg-rose-500 hover:text-white transition-all"
            >
              <Instagram size={13} />
              {showInsta ? "Masquer" : "Afficher"} Feed
            </button>
          </div>

          {showInsta && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full overflow-hidden rounded-2xl border border-border-subtle bg-black/40"
            >
              <iframe
                src="https://www.instagram.com/rayan.koussa/embed/"
                title="Feed Instagram Photographie"
                className="w-full h-[360px] border-none"
                allow="encrypted-media"
                loading="lazy"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Jeux Vidéo Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 glass-card p-6 rounded-3xl flex flex-col gap-5 border border-border-subtle"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <Gamepad2 size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground">Jeux Vidéo</h3>
              <p className="font-mono-label text-xs text-muted-foreground">Compétition & eSport</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GAMES.map((game) => (
              <div
                key={game.name}
                className="p-3 rounded-2xl bg-surface/60 border border-border-subtle hover:border-rose-500/40 flex items-center gap-3 transition-all group"
              >
                <div className="relative w-9 h-9 shrink-0 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
                  <Image
                    src={game.logo}
                    alt={game.name}
                    width={36}
                    height={36}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  {game.link ? (
                    <a
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-xs text-foreground hover:text-rose-500 transition-colors truncate flex items-center gap-1"
                    >
                      <span className="truncate">{game.name}</span>
                      <ExternalLink size={10} className="shrink-0 text-rose-500" />
                    </a>
                  ) : (
                    <span className="font-display font-semibold text-xs text-foreground truncate">
                      {game.name}
                    </span>
                  )}
                  <span className="font-mono-label text-[10px] text-muted-foreground">{game.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Creative Passions Cards */}
        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CREATIVE_PASSIONS.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-border-subtle"
              >
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md shrink-0`}>
                  <IconComp size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-foreground">{item.name}</span>
                  <span className="font-mono-label text-xs text-muted-foreground">{item.desc}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
