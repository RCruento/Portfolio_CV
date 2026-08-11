"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Download, Briefcase, GraduationCap, Play, Gamepad2, Trophy, Zap, CheckCircle2, UserCheck, Heart, MapPin, Building2 } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { TechStackSection } from "@/components/TechStackSection";
import { ArcadeMiniGame } from "@/components/ArcadeMiniGame";
import { CustomCursor } from "@/components/CustomCursor";
import { GameHUDOverlay } from "@/components/GameHUDOverlay";
import Hobbies from "@/components/Hobbies";
import { fireConfetti } from "@/lib/confetti";

const ROLES = [
  "DÉVELOPPEUR FULL-STACK",
  "MASTER 2 HYPERMEDIA (PARIS 8)",
  "REACT • NODE.JS • PHP • PYTHON • JAVA",
  "AUTO-ENTREPRENEUR & FREELANCE",
];

const STATS = [
  { label: "EXPÉRIENCE EN ENTREPRISE & FREELANCE", value: "2+ Ans", icon: Briefcase },
  { label: "MASTER 2 FORMATION D'EXCELLENCE", value: "Paris 8", icon: GraduationCap },
  { label: "PROJETS WEB & LOGICIELS LIVRÉS", value: "10+", icon: Trophy },
];

const EXPERIENCES = [
  {
    title: "QUEST 4 — Développeur Full-Stack (Auto-entrepreneur)",
    company: "Indépendant",
    location: "Île-de-France",
    period: "03/2025 – Aujourd'hui",
    desc: "Développeur Full-Stack indépendant. Consolidation technique, création de maquettes pour sites vitrines, création, maintenance et évolution de projets web modernes (React, Next.js, Node.js) en autonomie complète.",
    bullets: [
      "Création de maquettes UX/UI et intégration de sites vitrines réactifs",
      "Développement et maintenance d'applications React / Next.js / Node.js",
      "Veille technologique continue et gestion autonome de projets de A à Z",
    ],
    tags: ["React", "Next.js", "Node.js", "JavaScript", "UX/UI", "Autonomie"],
  },
  {
    title: "QUEST 3 — Développeur Intégrateur (Stage Fin M2)",
    company: "BASSETTI",
    location: "Paris (~200 salariés)",
    period: "09/2024 – 02/2025",
    desc: "Développement de modules métier personnalisés intégrés à la plateforme client B2B. Migration logicielle avec garantie de rétrocompatibilité, rédaction de tests unitaires, débogage en environnement iso-production, gestion SVN et génération automatisée de documents interactifs.",
    bullets: [
      "Développement de modules métiers B2B sur-mesure (React, Node.js, TS)",
      "Génération automatisée de documents interactifs avec Puppeteer & jsPDF",
      "Tests unitaires, débogage iso-production et versionnement SVN",
    ],
    tags: ["React", "TypeScript", "Node.js", "Puppeteer", "jsPDF", "SVN", "Tests Unitaires"],
  },
  {
    title: "QUEST 2 — Développeur Web Indépendant (Freelance)",
    company: "Indépendant",
    location: "Île-de-France",
    period: "08/2021 – 08/2023",
    desc: "Conception et développement d'applications web sur-mesure pour PME (sites vitrines, solutions e-commerce PHP/React). Optimisation et modélisation de bases de données MySQL et PostgreSQL, intégration d'APIs REST tierces et suivi autonome du cahier des charges.",
    bullets: [
      "Développement d'applications et sites e-commerce sur-mesure (PHP, React)",
      "Modélisation et optimisation de bases de données MySQL & PostgreSQL",
      "Intégration d'APIs REST tierces & gestion complète de la relation client",
    ],
    tags: ["PHP", "React", "MySQL", "PostgreSQL", "API REST", "Relation Client"],
  },
  {
    title: "QUEST 1 — Développeur Full-Stack (Stage Master 1)",
    company: "Beo-France SAS",
    location: "Taverny (~10 salariés)",
    period: "02/2021 – 07/2021",
    desc: "Maintenance évolutive et corrective du site web d'entreprise (WordPress, PHP, MySQL) avec intégration de nouvelles fonctionnalités e-commerce et déploiement d'une stratégie d'acquisition globale (SEO, SEA, SMO).",
    bullets: [
      "Maintenance évolutive et corrective du site WordPress (PHP/MySQL)",
      "Intégration de fonctionnalités e-commerce et optimisation des parcours",
      "Stratégie SEO/SEA/SMO générant +15% de trafic organique en 5 mois",
    ],
    tags: ["WordPress", "PHP", "MySQL", "SEO (+15%)", "SEA/SMO", "E-commerce"],
  },
];

const SOFT_SKILLS = [
  "Travail en équipe",
  "Veille technologique",
  "Autonomie complète",
  "Rigueur & méthode",
];

const VOLUNTEERING = [
  { role: "Bénévole engagé", org: "Linkee", period: "2021 – 2023" },
  { role: "Bénévole sur le terrain", org: "Restos du Cœur", period: "2018 – 2019" },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    fireConfetti();
  };

  return (
    <div className="flex flex-col items-center w-full gap-16 pb-20 overflow-x-hidden pt-12">
      <CustomCursor />
      <GameHUDOverlay />

      {/* ── 1. HERO SECTION & PLAYER CARD ─────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-4 pt-8 sm:pt-12 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
        {/* Left Column Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-xl"
        >
          {/* Role Ticker */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hud-card text-xs font-mono-label text-cyan-400 font-extrabold shadow-lg shadow-cyan-500/30"
            >
              <Gamepad2 size={16} className="text-rose-500 animate-bounce" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <span className="hud-badge text-amber-400 border-amber-400 bg-amber-400/10">
              PLAYER 1 • READY
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
            RAYAN <span className="text-rose-500 font-black">KOUSSA</span>
          </h1>

          {/* Bio from CV */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Développeur Full-Stack, diplômé d&apos;un <strong className="text-cyan-400 font-bold">Master 2 en Technologies de l&apos;Hypermédia (Paris 8, IDEFI CréaTIC)</strong>.
            Maîtrise de l&apos;ensemble du cycle de développement web, de la conception d&apos;interfaces React/Next.js jusqu&apos;aux APIs REST Node.js, bases SQL/NoSQL et environnements Linux.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            <Link href="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto hud-btn-primary px-6 py-4 rounded-2xl text-xs font-mono-label font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play size={16} className="fill-white" />
                EXPLORER LES PROJETS
              </motion.button>
            </Link>

            <a href="/CV_Rayan_KOUSSA.pdf" download target="_blank" rel="noopener noreferrer" onClick={handleDownloadCV} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto hud-btn-cyan px-6 py-4 rounded-2xl text-xs font-mono-label font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={16} />
                TÉLÉCHARGER CV (PDF)
              </motion.button>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://linkedin.com/in/rayan-koussa-8b9a84183"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-2xl hud-card text-muted-foreground hover:text-cyan-400 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/RCruento"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-2xl hud-card text-muted-foreground hover:text-cyan-400 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <span className="font-mono-label text-xs text-muted-foreground ml-2 font-bold flex items-center gap-1">
              <MapPin size={14} className="text-rose-500" />
              Cergy, 95000 — Île-de-France
            </span>
          </div>
        </motion.div>

        {/* Right Clean Player Gaming Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-sm hud-card p-6 flex flex-col items-center gap-5 text-center bg-black/90 border-2 border-cyan-400 shadow-2xl"
        >
          <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-yellow-400 to-cyan-400 shadow-2xl shadow-rose-500/50">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black">
              <Image src="/RK.jpg" alt="Rayan Koussa" fill sizes="144px" className="object-cover" priority />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-display font-black text-xl text-white">RAYAN KOUSSA</h3>
            <span className="font-mono-label text-xs text-cyan-400 font-bold uppercase">PLAYER 1 • FULL-STACK DEVELOPER</span>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 pt-2 border-t border-cyan-400/30 font-mono-label text-[11px]">
            <div className="p-2 rounded-lg bg-black/60 border border-rose-500/40 text-left">
              <span className="text-muted-foreground block text-[9px]">FORMATION</span>
              <span className="text-white font-bold">M2 PARIS 8</span>
            </div>
            <div className="p-2 rounded-lg bg-black/60 border border-emerald-400/40 text-left">
              <span className="text-muted-foreground block text-[9px]">STATUT</span>
              <span className="text-emerald-400 font-bold">DISPONIBLE</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. DEDICATED ARCADE MINI-GAME SECTION ───────────────── */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center flex flex-col items-center gap-2 mb-4">
          <span className="hud-badge text-cyan-400 border-cyan-400 flex items-center gap-1.5">
            <Gamepad2 size={16} className="text-rose-500" />
            ZONE DE JEU INTERACTIVE • ARENA MULTI-VAGUES
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            SPACE INVADERS ARCADE GAME
          </h2>
        </div>

        <ArcadeMiniGame />
      </section>

      {/* ── 3. STATS & METRICS ──────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map((stat, i) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="hud-card p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500 flex items-center justify-center shrink-0">
                  <IconComp size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </span>
                  <span className="font-mono-label text-xs text-cyan-400 font-bold uppercase">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 4. SKILL ARSENAL (FROM CV) ─────────────────────────── */}
      <section id="skills" className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-8 scroll-mt-24">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="hud-badge text-cyan-400 border-cyan-400">
            COMPÉTENCES TECHNIQUES & POWER-UPS
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
            ARSENAL TECHNIQUE & OUTILS
          </h2>
        </div>

        <TechStackSection />
      </section>

      {/* ── 5. FORMATION & EXPÉRIENCE PROFESSIONNELLE (FIDÈLE AU CV) ── */}
      <section id="quests" className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24">
        {/* Formation */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-3">
            <Trophy size={20} className="text-amber-400" />
            <h3 className="font-display font-black text-xl text-white">
              GUILDE ACADÉMIQUE / FORMATION
            </h3>
          </div>
          <AcademicTimeline />
        </div>

        {/* Expérience Pro */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-3">
            <Zap size={20} className="text-rose-500" />
            <h3 className="font-display font-black text-xl text-white">
              QUEST LOG / EXPÉRIENCE PRO
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="hud-card p-5 flex flex-col gap-3 group hover:border-rose-500 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-500/30 pb-2">
                  <h4 className="font-display font-extrabold text-base text-white">
                    {exp.title}
                  </h4>
                  <span className="hud-badge text-amber-400 border-amber-400 bg-amber-400/10">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono-label text-xs text-cyan-400 font-bold">
                  <Building2 size={14} />
                  <span>{exp.company} — {exp.location}</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {exp.desc}
                </p>

                <div className="flex flex-col gap-1 pt-1">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 font-mono-label text-[11px] text-white">
                      <span className="text-rose-500 font-bold">➢</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-rose-500/20">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-black/60 text-muted-foreground text-[10px] font-mono-label border border-rose-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SOFT SKILLS & ENGAGEMENTS BÉNÉVOLES ──────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Soft Skills */}
        <div className="hud-card p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-2">
            <UserCheck size={20} className="text-emerald-400" />
            <h3 className="font-display font-black text-lg text-white">
              SOFT SKILLS & QUALITÉS
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {SOFT_SKILLS.map((skill) => (
              <div key={skill} className="flex items-center gap-2 p-2.5 rounded-xl bg-black/60 border border-emerald-400/40 font-mono-label text-xs font-bold text-white">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engagements Associatifs */}
        <div className="hud-card p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-2">
            <Heart size={20} className="text-rose-500" />
            <h3 className="font-display font-black text-lg text-white">
              ENGAGEMENTS ASSOCIATIFS
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {VOLUNTEERING.map((v) => (
              <div key={v.org} className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-rose-500/40">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-white">{v.org}</span>
                  <span className="font-mono-label text-xs text-muted-foreground">{v.role}</span>
                </div>
                <span className="hud-badge">{v.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LANGUES ─────────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4">
        <div className="hud-card p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center sm:text-left">
            <span className="hud-badge text-cyan-400 border-cyan-400">LANGUAGE PACKS</span>
            <h3 className="font-display font-black text-lg text-white mt-1">
              COMPÉTENCES LINGUISTIQUES
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {[
              { code: "FR", label: "Français", level: "NATIF" },
              { code: "GB", label: "Anglais", level: "C1 — EF SET 68/100" },
              { code: "DZ", label: "Arabe", level: "NATIF" },
            ].map(({ code, label, level }) => (
              <div key={code} className="flex items-center gap-3 p-3 rounded-xl bg-black/60 border border-cyan-400/50">
                <ReactCountryFlag countryCode={code} svg style={{ width: "2em", height: "2em" }} />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xs text-white uppercase">{label}</span>
                  <span className="font-mono-label text-[10px] text-amber-400 font-bold">{level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. HOBBIES & PASSIONS ──────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4">
        <Hobbies />
      </section>
    </div>
  );
}
