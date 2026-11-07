"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project, ProjectSize } from "@/components/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";

interface ProjectBaseData {
  image?: string;
  video?: string;
  gallery?: string[];
  stacks: string[];
  github?: string;
  link?: string;
  size: ProjectSize;
  private?: boolean;
}

const PROJECT_BASE_CONFIGS: ProjectBaseData[] = [
  // 1. Career Finder Helper AI
  {
    size: "large",
    image: "/projects/career-finder-helper/cover.png",
    video: "/projects/career-finder-helper/demo_30s.webm",
    gallery: [
      "/projects/career-finder-helper/kanban.png",
      "/projects/career-finder-helper/explorer.png",
      "/projects/career-finder-helper/modal.png",
    ],
    stacks: ["Python", "FastAPI", "React 19", "TypeScript", "SQLite (Local-First)", "Chrome Extension", "BYOK AI"],
    link: "https://rcruento.lemonsqueezy.com",
    private: true,
  },
  // 2. MBTI Explorer
  {
    size: "medium",
    image: "https://mmj.azureedge.net/media/90903e37-919a-48a5-a93c-e39fe08b4386.webp",
    stacks: ["ReactJS", "Node.js", "Express", "MySQL", "REST API"],
  },
  // 3. KuCoinBot v10
  {
    size: "medium",
    private: true,
    stacks: ["Go", "React", "WebSocket", "Kelly Sizing"],
  },
  // 3. Super Arcade 3D Portfolio
  {
    size: "small",
    image: "/RK.jpg",
    stacks: ["Next.js 16", "TypeScript", "Tailwind CSS", "Three.js", "React 19"],
    github: "https://github.com/RCruento/Portfolio_CV",
    link: "https://rayankoussa.vercel.app",
  },
  // 4. HTML Semantic Indexing Engine
  {
    size: "small",
    image:
      "https://cujas.hypotheses.org/files/2022/07/Illustration_Lindexation-une-piste-pour-ameliorer-la-visibilite-de-ses-publications.jpg",
    stacks: ["HTML", "PHP", "Bootstrap", "MySQL", "TF-IDF"],
    github: "https://github.com/RCruento/indexation-PHP",
  },
  // 5. Hearthstone Java Tactical Game
  {
    size: "small",
    image: "https://d39zum0jwvcigt.cloudfront.net/_next/static/images/default-4fff3c606c794dc03a915b9071f562d3.jpg",
    stacks: ["Java", "OOP", "Game Logic"],
    github: "https://github.com/RCruento/HearthStoneJava",
  },
  // 6. PACMAN Java Engine
  {
    size: "small",
    image:
      "https://www.radiofrance.fr/pikapi/images/cce35344-1aa1-4345-b1f0-364440059de9/1200x680?webp=false",
    stacks: ["Java", "2D Canvas", "60 FPS Engine"],
    github: "https://github.com/RCruento/PacMan_Java",
  },
  // 7. PACMAN C++ AI & Graph Algorithms
  {
    size: "small",
    stacks: ["C++", "Dijkstra", "A* Algorithm", "Graph Theory"],
    github: "https://github.com/RCruento/Pacman_IA_Graphe",
  },
  // 8. Interactive Directory & Avatar Showcase
  {
    size: "small",
    image: "https://www.web-creatif.net/wp-content/uploads/2009/03/trombinoscope-avatar.png",
    stacks: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    github: "https://github.com/RCruento/Trombinoscope",
  },
  // 9. Multi-Threaded Client / Server Architecture
  {
    size: "small",
    image: "https://www.geonov.fr/fig/client-server/client-server-2-tiers-small.png",
    stacks: ["C++", "Java", "TCP/IP Sockets", "Multi-Threading"],
  },
  // 10. Oracle PL/SQL Stock Portfolio Manager
  {
    size: "small",
    stacks: ["Oracle PL/SQL", "SQL", "Triggers", "ACID Transactions"],
  },
];

export function ProjectsView() {
  const { t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const localizedItems = t.projectsPage.items;
  const categories = t.projectsPage.categories;

  // Merge base configs with localized titles & descriptions
  const projects: Project[] = localizedItems.map((item, idx) => {
    const config = PROJECT_BASE_CONFIGS[idx] || {
      size: "small",
      stacks: ["TypeScript"],
    };
    return {
      title: item.title,
      category: item.category,
      description: item.description,
      size: config.size,
      image: config.image,
      video: config.video,
      gallery: config.gallery,
      stacks: config.stacks,
      github: config.github,
      link: config.link,
      private: config.private,
      altText: item.title,
    };
  });

  const filteredProjects =
    activeCategoryIndex === 0
      ? projects
      : projects.filter((p) => {
          // Robust matching across categories
          const cat = (p.category || "").toUpperCase();
          if (activeCategoryIndex === 1) return cat.includes("WEB");
          if (activeCategoryIndex === 2) return cat.includes("HFT") || cat.includes("TRADING");
          if (activeCategoryIndex === 3) return cat.includes("GAME") || cat.includes("JEU");
          if (activeCategoryIndex === 4) return cat.includes("SYSTEM") || cat.includes("RÉSEAU") || cat.includes("DATA") || cat.includes("BASE");
          return true;
        });

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 mb-20 flex flex-col gap-10 pt-16">
      {/* Header Title */}
      <div className="flex flex-col items-center text-center gap-3 border-b border-cyan-400/40 pb-6">
        <span className="hud-badge text-cyan-400 border-cyan-400/50 bg-cyan-400/10">
          {t.projectsPage.badge} ({projects.length} {t.projectsPage.totalProjectsSuffix})
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          {t.projectsPage.title}
        </h1>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 hud-card max-w-3xl mx-auto">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => setActiveCategoryIndex(idx)}
            className={`px-4 py-2 text-xs font-mono-label font-bold uppercase rounded-xl transition-all cursor-pointer border ${
              activeCategoryIndex === idx
                ? "hud-btn-primary shadow-lg shadow-rose-500/40"
                : "border-transparent text-slate-400 hover:text-white hover:bg-slate-800/60"
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
