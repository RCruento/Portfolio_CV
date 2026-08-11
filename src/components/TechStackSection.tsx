"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaPhp, FaJava, FaGit, FaDocker, FaPython } from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiPostgresql,
  SiNestjs,
  SiGraphql,
  SiFigma,
  SiPuppeteer,
  SiJest,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Bases de données" | "DevOps & Outils";
  icon: React.ReactNode;
  levelPercent: number;
  levelLabel: string;
  badge: "SOLIDE" | "PRATIQUÉ" | "NOTIONS";
}

const REALISTIC_SKILLS: TechItem[] = [
  // Frontend
  { name: "JavaScript (ES6+)", category: "Frontend", icon: <SiJavascript className="text-amber-400" />, levelPercent: 90, levelLabel: "Avancé", badge: "SOLIDE" },
  { name: "React.js", category: "Frontend", icon: <FaReact className="text-sky-400" />, levelPercent: 88, levelLabel: "Avancé", badge: "SOLIDE" },
  { name: "Next.js 16", category: "Frontend", icon: <SiNextdotjs className="text-white" />, levelPercent: 82, levelLabel: "Pratiqué", badge: "SOLIDE" },
  { name: "HTML5 / CSS3", category: "Frontend", icon: <FaHtml5 className="text-orange-500" />, levelPercent: 92, levelLabel: "Solide", badge: "SOLIDE" },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-400" />, levelPercent: 80, levelLabel: "Pratiqué", badge: "SOLIDE" },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-sky-400" />, levelPercent: 88, levelLabel: "Avancé", badge: "SOLIDE" },
  { name: "Vue.js", category: "Frontend", icon: <SiVuedotjs className="text-emerald-400" />, levelPercent: 70, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
  { name: "Bootstrap", category: "Frontend", icon: <SiBootstrap className="text-purple-400" />, levelPercent: 82, levelLabel: "Maîtrisé", badge: "SOLIDE" },

  // Backend
  { name: "Node.js", category: "Backend", icon: <FaNodeJs className="text-emerald-500" />, levelPercent: 85, levelLabel: "Avancé", badge: "SOLIDE" },
  { name: "Express.js", category: "Backend", icon: <SiExpress className="text-gray-300" />, levelPercent: 84, levelLabel: "Avancé", badge: "SOLIDE" },
  { name: "PHP", category: "Backend", icon: <FaPhp className="text-indigo-400" />, levelPercent: 80, levelLabel: "Pratiqué", badge: "SOLIDE" },
  { name: "Java", category: "Backend", icon: <FaJava className="text-red-500" />, levelPercent: 75, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
  { name: "NestJS", category: "Backend", icon: <SiNestjs className="text-rose-500" />, levelPercent: 68, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
  { name: "Python", category: "Backend", icon: <FaPython className="text-amber-400" />, levelPercent: 70, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
  { name: "C / C++", category: "Backend", icon: <SiCplusplus className="text-blue-400" />, levelPercent: 65, levelLabel: "Notions académiques", badge: "NOTIONS" },

  // Databases
  { name: "MySQL", category: "Bases de données", icon: <SiMysql className="text-blue-500" />, levelPercent: 85, levelLabel: "Solide", badge: "SOLIDE" },
  { name: "PostgreSQL", category: "Bases de données", icon: <SiPostgresql className="text-sky-500" />, levelPercent: 78, levelLabel: "Pratiqué", badge: "PRATIQUÉ" },
  { name: "MongoDB", category: "Bases de données", icon: <SiMongodb className="text-emerald-500" />, levelPercent: 75, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "DevOps & Outils", icon: <FaGit className="text-orange-500" />, levelPercent: 88, levelLabel: "Avancé", badge: "SOLIDE" },
  { name: "Puppeteer / jsPDF", category: "DevOps & Outils", icon: <SiPuppeteer className="text-emerald-400" />, levelPercent: 82, levelLabel: "Pratiqué (BASSETTI)", badge: "SOLIDE" },
  { name: "Docker", category: "DevOps & Outils", icon: <FaDocker className="text-sky-400" />, levelPercent: 68, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
  { name: "GraphQL / REST API", category: "DevOps & Outils", icon: <SiGraphql className="text-pink-500" />, levelPercent: 80, levelLabel: "Pratiqué", badge: "SOLIDE" },
  { name: "Figma", category: "DevOps & Outils", icon: <SiFigma className="text-purple-400" />, levelPercent: 75, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
  { name: "Jest / TDD", category: "DevOps & Outils", icon: <SiJest className="text-red-500" />, levelPercent: 72, levelLabel: "Intermédiaire", badge: "PRATIQUÉ" },
];

const CATEGORIES = ["Tous", "Frontend", "Backend", "Bases de données", "DevOps & Outils"] as const;

export function TechStackSection() {
  const [selectedCat, setSelectedCat] = useState<string>("Tous");

  const filteredSkills = selectedCat === "Tous" ? REALISTIC_SKILLS : REALISTIC_SKILLS.filter((s) => s.category === selectedCat);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 hud-card max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-3.5 py-1.5 text-xs font-mono-label font-bold uppercase rounded-xl transition-all cursor-pointer ${
              selectedCat === cat
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/50"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Realistic Skill Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hud-card p-4 flex flex-col gap-3 justify-between"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="text-2xl shrink-0">{skill.icon}</div>
                  <span className="font-display font-extrabold text-sm text-white">
                    {skill.name}
                  </span>
                </div>
                <span
                  className={`hud-badge text-[9px] ${
                    skill.badge === "SOLIDE"
                      ? "text-emerald-400 border-emerald-400/50 bg-emerald-400/10"
                      : skill.badge === "PRATIQUÉ"
                      ? "text-cyan-400 border-cyan-400/50 bg-cyan-400/10"
                      : "text-amber-400 border-amber-400/50 bg-amber-400/10"
                  }`}
                >
                  {skill.badge}
                </span>
              </div>

              {/* Realistic Level Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono-label text-[10px] font-bold text-muted-foreground">
                  <span>{skill.levelLabel}</span>
                  <span className="text-cyan-400">{skill.levelPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/70 border border-cyan-500/30 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.levelPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`h-full ${
                      skill.badge === "SOLIDE"
                        ? "bg-gradient-to-r from-cyan-400 to-emerald-400"
                        : skill.badge === "PRATIQUÉ"
                        ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                        : "bg-gradient-to-r from-amber-400 to-rose-500"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
