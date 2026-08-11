"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "MBTI Explorer",
    size: "large",
    category: "FULL-STACK WEB",
    image: "https://mmj.azureedge.net/media/90903e37-919a-48a5-a93c-e39fe08b4386.webp",
    altText: "Application MBTI Explorer",
    description:
      "Application interactive de découverte de lieux selon son profil psychologique MBTI. Gestion d'utilisateurs, quiz interactif et recommandations personnalisées.",
    stacks: ["ReactJS", "Node.js", "Express", "MySQL", "API"],
  },
  {
    title: "KuCoinBot v10",
    size: "medium",
    category: "HFT / ALGO TRADING",
    private: true,
    description:
      "Bot de scalping haute fréquence développé en Go. Moteur de scoring 4 couches temps réel, position sizing Kelly fractionnaire et dashboard WebSocket.",
    stacks: ["Go", "React", "WebSocket"],
  },
  {
    title: "Portfolio Super Arcade",
    size: "small",
    category: "FULL-STACK WEB",
    image: "/RK.jpg",
    altText: "Portfolio de Rayan Koussa",
    description: "Portfolio personnel conçu en style Super Arcade Light avec Next.js 16, Three.js 3D WebGL Vector Core et Framer Motion.",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/RCruento/Portfolio_CV",
    link: "https://rayankoussa.vercel.app",
  },
  {
    title: "Moteur d'Indexation HTML",
    size: "small",
    category: "WEB & DATA",
    image:
      "https://cujas.hypotheses.org/files/2022/07/Illustration_Lindexation-une-piste-pour-ameliorer-la-visibilite-de-ses-publications.jpg",
    altText: "Illustration indexation HTML",
    description: "Moteur d'indexation sémantique de documents HTML et système de recherche d'information rapide avec pondération TF-IDF.",
    stacks: ["HTML", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/RCruento/indexation-PHP",
  },
  {
    title: "Jeu Hearthstone Java",
    size: "small",
    category: "JEUX",
    image: "https://d39zum0jwvcigt.cloudfront.net/_next/static/images/default-4fff3c606c794dc03a915b9071f562d3.jpg",
    altText: "Jeu Hearthstone Java",
    description: "Jeu de cartes tactique au tour par tour pour 2 joueurs inspiré de Hearthstone. Gestion de deck, mana et sorts.",
    stacks: ["Java"],
    github: "https://github.com/RCruento/HearthStoneJava",
  },
  {
    title: "PACMAN Java Engine",
    size: "small",
    category: "JEUX",
    image:
      "https://www.radiofrance.fr/pikapi/images/cce35344-1aa1-4345-b1f0-364440059de9/1200x680?webp=false",
    altText: "PACMAN Java",
    description: "Implémentation complète du jeu d'arcade classique PACMAN en Java avec moteur d'animation 60 FPS et gestion de score.",
    stacks: ["Java"],
    github: "https://github.com/RCruento/PacMan_Java",
  },
  {
    title: "PACMAN C++ IA & Graphes",
    size: "small",
    category: "JEUX & IA",
    description: "Simulation du jeu PACMAN en C++ intégrant des algorithmes de recherche sur graphes (Dijkstra, A*) pour l'intelligence artificielle.",
    stacks: ["C++"],
    github: "https://github.com/RCruento/Pacman_IA_Graphe",
  },
  {
    title: "Trombinoscope Interactif",
    size: "small",
    category: "FULL-STACK WEB",
    image: "https://www.web-creatif.net/wp-content/uploads/2009/03/trombinoscope-avatar.png",
    altText: "Trombinoscope JavaScript",
    description: "Application web d'annuaire interactif pour la gestion et la visualisation dynamique de fiches trombinoscope.",
    stacks: ["JavaScript", "HTML"],
    github: "https://github.com/RCruento/Trombinoscope",
  },
  {
    title: "Client / Serveur Réseau",
    size: "small",
    category: "RÉSEAU",
    image: "https://www.geonov.fr/fig/client-server/client-server-2-tiers-small.png",
    altText: "Architecture client/serveur 2 tiers",
    description: "Projet réseau implémentant un protocole de communication client/serveur multi-threads en C++ et Java avec sockets TCP/IP.",
    stacks: ["C++", "Java"],
  },
  {
    title: "Gestion PL/SQL Oracle",
    size: "small",
    category: "BASES DE DONNÉES",
    description: "Système de gestion et d'automatisation des opérations d'achats/ventes d'actions boursières développé avec PL/SQL Oracle.",
    stacks: ["SQL", "MySQL"],
  },
];

const CATEGORIES = ["Tous", "FULL-STACK WEB", "HFT / ALGO TRADING", "JEUX", "RÉSEAU / DATA"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => {
          if (activeCategory === "JEUX") return p.category?.includes("JEUX");
          if (activeCategory === "RÉSEAU / DATA") return p.category?.includes("RÉSEAU") || p.category?.includes("BASES") || p.category?.includes("DATA");
          return p.category === activeCategory;
        });

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 mb-20 flex flex-col gap-10 pt-16">
      {/* Header Title */}
      <div className="flex flex-col items-center text-center gap-3 border-b-2 border-border-arcade pb-6">
        <span className="arcade-badge">
          SELECTIONNER UNE CATÉGORIE ({projects.length} PROJETS)
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-foreground uppercase tracking-tight">
          PROJETS & RÉALISATIONS
        </h1>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 brutal-card max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono-label font-bold uppercase rounded-xl transition-all cursor-pointer border-2 ${
              activeCategory === cat
                ? "bg-rose-600 text-white border-black shadow-[3px_3px_0px_0px_#000]"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div key={project.title} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
