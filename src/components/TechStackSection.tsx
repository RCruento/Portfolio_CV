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
import { useLanguage } from "./LanguageProvider";

type SkillCategory = "frontend" | "backend" | "databases" | "devops";
type BadgeLevel = "solid" | "practiced" | "notions";

interface TechItem {
  name: string;
  category: SkillCategory;
  icon: React.ReactNode;
  levelPercent: number;
  badge: BadgeLevel;
}

const REALISTIC_SKILLS: TechItem[] = [
  // Frontend
  { name: "JavaScript (ES6+)", category: "frontend", icon: <SiJavascript className="text-amber-400" />, levelPercent: 90, badge: "solid" },
  { name: "React.js", category: "frontend", icon: <FaReact className="text-sky-400" />, levelPercent: 88, badge: "solid" },
  { name: "Next.js 16", category: "frontend", icon: <SiNextdotjs className="text-white" />, levelPercent: 82, badge: "solid" },
  { name: "HTML5 / CSS3", category: "frontend", icon: <FaHtml5 className="text-orange-500" />, levelPercent: 92, badge: "solid" },
  { name: "TypeScript", category: "frontend", icon: <SiTypescript className="text-blue-400" />, levelPercent: 80, badge: "solid" },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-sky-400" />, levelPercent: 88, badge: "solid" },
  { name: "Vue.js", category: "frontend", icon: <SiVuedotjs className="text-emerald-400" />, levelPercent: 70, badge: "practiced" },
  { name: "Bootstrap", category: "frontend", icon: <SiBootstrap className="text-purple-400" />, levelPercent: 82, badge: "solid" },

  // Backend
  { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-emerald-500" />, levelPercent: 85, badge: "solid" },
  { name: "Express.js", category: "backend", icon: <SiExpress className="text-gray-300" />, levelPercent: 84, badge: "solid" },
  { name: "PHP", category: "backend", icon: <FaPhp className="text-indigo-400" />, levelPercent: 80, badge: "solid" },
  { name: "Java", category: "backend", icon: <FaJava className="text-red-500" />, levelPercent: 75, badge: "practiced" },
  { name: "NestJS", category: "backend", icon: <SiNestjs className="text-rose-500" />, levelPercent: 68, badge: "practiced" },
  { name: "Python", category: "backend", icon: <FaPython className="text-amber-400" />, levelPercent: 70, badge: "practiced" },
  { name: "C / C++", category: "backend", icon: <SiCplusplus className="text-blue-400" />, levelPercent: 65, badge: "notions" },

  // Databases
  { name: "MySQL", category: "databases", icon: <SiMysql className="text-blue-500" />, levelPercent: 85, badge: "solid" },
  { name: "PostgreSQL", category: "databases", icon: <SiPostgresql className="text-sky-500" />, levelPercent: 78, badge: "practiced" },
  { name: "MongoDB", category: "databases", icon: <SiMongodb className="text-emerald-500" />, levelPercent: 75, badge: "practiced" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "devops", icon: <FaGit className="text-orange-500" />, levelPercent: 88, badge: "solid" },
  { name: "Puppeteer / jsPDF", category: "devops", icon: <SiPuppeteer className="text-emerald-400" />, levelPercent: 82, badge: "solid" },
  { name: "Docker", category: "devops", icon: <FaDocker className="text-sky-400" />, levelPercent: 68, badge: "practiced" },
  { name: "GraphQL / REST API", category: "devops", icon: <SiGraphql className="text-pink-500" />, levelPercent: 80, badge: "solid" },
  { name: "Figma", category: "devops", icon: <SiFigma className="text-purple-400" />, levelPercent: 75, badge: "practiced" },
  { name: "Jest / TDD", category: "devops", icon: <SiJest className="text-red-500" />, levelPercent: 72, badge: "practiced" },
];

export function TechStackSection() {
  const { t } = useLanguage();
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);

  const categoryMap: Array<{ id: "all" | SkillCategory; label: string }> = [
    { id: "all", label: t.skills.categories[0] },
    { id: "frontend", label: t.skills.categories[1] },
    { id: "backend", label: t.skills.categories[2] },
    { id: "databases", label: t.skills.categories[3] },
    { id: "devops", label: t.skills.categories[4] },
  ];

  const currentCategory = categoryMap[selectedCatIndex] || categoryMap[0];

  const filteredSkills =
    currentCategory.id === "all"
      ? REALISTIC_SKILLS
      : REALISTIC_SKILLS.filter((s) => s.category === currentCategory.id);

  const getLevelLabel = (percent: number, badge: BadgeLevel) => {
    if (badge === "notions") return t.skills.levels.academic;
    if (percent >= 85) return t.skills.levels.advanced;
    if (percent >= 80) return t.skills.levels.solid;
    if (percent >= 75) return t.skills.levels.proficient;
    return t.skills.levels.intermediate;
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 hud-card max-w-3xl mx-auto">
        {categoryMap.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCatIndex(idx)}
            className={`px-3.5 py-1.5 text-xs font-mono-label font-bold uppercase rounded-xl transition-all cursor-pointer ${
              selectedCatIndex === idx
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/50"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Realistic Skill Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const badgeLabel = t.skills.badges[skill.badge];
            const levelLabel = getLevelLabel(skill.levelPercent, skill.badge);

            return (
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
                      skill.badge === "solid"
                        ? "text-emerald-400 border-emerald-400/50 bg-emerald-400/10"
                        : skill.badge === "practiced"
                        ? "text-cyan-400 border-cyan-400/50 bg-cyan-400/10"
                        : "text-amber-400 border-amber-400/50 bg-amber-400/10"
                    }`}
                  >
                    {badgeLabel}
                  </span>
                </div>

                {/* Level Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono-label text-[10px] font-bold text-muted-foreground">
                    <span>{levelLabel}</span>
                    <span className="text-cyan-400">{skill.levelPercent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/70 border border-cyan-500/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.levelPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className={`h-full ${
                        skill.badge === "solid"
                          ? "bg-gradient-to-r from-cyan-400 to-emerald-400"
                          : skill.badge === "practiced"
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                          : "bg-gradient-to-r from-amber-400 to-rose-500"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
