"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Building2 } from "lucide-react";

interface AcademicItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  badge: string;
  description: string;
  highlights: string[];
}

const ACADEMIC_GUILD: AcademicItem[] = [
  {
    degree: "Master 2 Technologies de l'Hypermédia",
    institution: "Université Paris 8 (IDEFI CréaTIC)",
    location: "Saint-Denis / Paris",
    period: "2023 – 2025",
    badge: "DIPLÔME NIVEAU 7",
    description: "Formation supérieure d'excellence axée sur le développement web avancé, les architectures d'applications interactives, l'ingénierie logicielle et le design d'expérience utilisateur (UX/UI).",
    highlights: [
      "Architectures Frontend (React, Next.js) & Backend (Node.js, Express, NestJS)",
      "Gestion de projets numériques complexes & méthodologies agiles",
      "Technologies hypermédias, WebGL & applications web réactives",
    ],
  },
  {
    degree: "Master 1 Management de Projets Informatiques",
    institution: "École IRIS",
    location: "Paris",
    period: "2020 – 2021",
    badge: "MANAGEMENT IT",
    description: "Spécialisation en gestion et conduite de projets systèmes d'information, gouvernance IT et méthodologies de travail collaboratif.",
    highlights: [
      "Conduite de projets agiles (Scrum, Kanban, Sprint planning)",
      "Analyse des besoins métiers & rédaction de cahiers des charges",
      "Gouvernance SI, sécurité & anglais professionnel",
    ],
  },
  {
    degree: "Licence Informatique Généraliste",
    institution: "Université de Lorraine",
    location: "Metz",
    period: "2015 – 2020",
    badge: "FONDATIONS IT",
    description: "Solide socle scientifique et technique couvrant les fondements de la science informatique, la programmation orientée objet et l'algorithmie.",
    highlights: [
      "Programmation impérative & orientée objet (Java, C, C++)",
      "Bases de données relationnelles (SQL, modélisation conceptuelle)",
      "Algorithmique avancée, structures de données & systèmes d'exploitation",
    ],
  },
];

export function AcademicTimeline() {
  return (
    <div className="relative flex flex-col gap-6 pl-4 sm:pl-6 border-l-2 border-cyan-400/40">
      {ACADEMIC_GUILD.map((item, index) => (
        <motion.div
          key={item.degree}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative hud-card p-5 flex flex-col gap-3 group hover:border-cyan-400 transition-all"
        >
          {/* Glowing Node Circle */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/50">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-400/30 pb-2">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-cyan-400 shrink-0" />
              <h4 className="font-display font-extrabold text-base text-white">
                {item.degree}
              </h4>
            </div>
            <span className="hud-badge text-amber-400 border-amber-400 bg-amber-400/10">
              {item.period}
            </span>
          </div>

          {/* Institution */}
          <div className="flex items-center gap-2 font-mono-label text-xs text-cyan-400 font-bold">
            <Building2 size={14} />
            <span>{item.institution} — {item.location}</span>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-1.5 pt-1">
            {item.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 font-mono-label text-[11px] text-white">
                <span className="text-cyan-400 font-bold">➢</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
