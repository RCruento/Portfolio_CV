"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Download,
  Briefcase,
  GraduationCap,
  Play,
  Gamepad2,
  Trophy,
  Zap,
  CheckCircle2,
  UserCheck,
  Heart,
  MapPin,
  Building2,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { TechStackSection } from "@/components/TechStackSection";
import { ArcadeMiniGame } from "@/components/ArcadeMiniGame";
import { CustomCursor } from "@/components/CustomCursor";
import { GameHUDOverlay } from "@/components/GameHUDOverlay";
import Hobbies from "@/components/Hobbies";
import { fireConfetti } from "@/lib/confetti";
import { useLanguage } from "@/components/LanguageProvider";

export function HomeView() {
  const { t, locale } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = t.hero.roles;

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  const handleDownloadCV = () => {
    fireConfetti();
  };

  const statIcons = [Briefcase, GraduationCap, Trophy];

  const cvHref = locale === "en" ? "/CV_Rayan_KOUSSA_EN.pdf" : "/CV_Rayan_KOUSSA.pdf";

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
                  key={roles[roleIndex % roles.length]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[roleIndex % roles.length]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <span className="hud-badge text-amber-400 border-amber-400 bg-amber-400/10">
              {t.hero.playerReady}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
            {t.hero.fullNameFirst} <span className="text-rose-500 font-black">{t.hero.fullNameLast}</span>
          </h1>

          {/* Bio from CV */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t.hero.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            <Link href={`/${locale}/projects`} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto hud-btn-primary px-6 py-4 rounded-2xl text-xs font-mono-label font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play size={16} className="fill-white" />
                {t.hero.exploreProjects}
              </motion.button>
            </Link>

            <a
              href={cvHref}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto hud-btn-cyan px-6 py-4 rounded-2xl text-xs font-mono-label font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={16} />
                {t.hero.downloadCv}
              </motion.button>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/rayan-koussa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-2xl hud-card text-muted-foreground hover:text-cyan-400 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/RCruento"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-2xl hud-card text-muted-foreground hover:text-cyan-400 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <span className="font-mono-label text-xs text-muted-foreground ml-2 font-bold flex items-center gap-1">
              <MapPin size={14} className="text-rose-500" />
              {t.hero.location}
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
            <h3 className="font-display font-black text-xl text-white">
              {t.hero.fullNameFirst} {t.hero.fullNameLast}
            </h3>
            <span className="font-mono-label text-xs text-cyan-400 font-bold uppercase">
              {t.hero.playerCard.playerTitle}
            </span>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 pt-2 border-t border-cyan-400/30 font-mono-label text-[11px]">
            <div className="p-2 rounded-lg bg-black/60 border border-rose-500/40 text-left">
              <span className="text-muted-foreground block text-[9px]">
                {t.hero.playerCard.degreeLabel}
              </span>
              <span className="text-white font-bold">
                {t.hero.playerCard.degreeValue}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-black/60 border border-emerald-400/40 text-left">
              <span className="text-muted-foreground block text-[9px]">
                {t.hero.playerCard.statusLabel}
              </span>
              <span className="text-emerald-400 font-bold">
                {t.hero.playerCard.statusValue}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. DEDICATED ARCADE MINI-GAME SECTION ───────────────── */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center flex flex-col items-center gap-2 mb-4">
          <span className="hud-badge text-cyan-400 border-cyan-400 flex items-center gap-1.5">
            <Gamepad2 size={16} className="text-rose-500" />
            {t.arcade.badge}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            {t.arcade.title}
          </h2>
        </div>

        <ArcadeMiniGame />
      </section>

      {/* ── 3. STATS & METRICS ──────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.stats.map((stat, i) => {
            const IconComp = statIcons[i] || Trophy;
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

      {/* ── 4. SKILL ARSENAL ────────────────────────────────────── */}
      <section id="skills" className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-8 scroll-mt-24">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="hud-badge text-cyan-400 border-cyan-400">
            {t.skills.badge}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
            {t.skills.title}
          </h2>
        </div>

        <TechStackSection />
      </section>

      {/* ── 5. FORMATION & EXPÉRIENCE PROFESSIONNELLE ──────────── */}
      <section id="quests" className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24">
        {/* Education Timeline */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-3">
            <Trophy size={20} className="text-amber-400" />
            <h3 className="font-display font-black text-xl text-white">
              {t.quests.educationTitle}
            </h3>
          </div>
          <AcademicTimeline />
        </div>

        {/* Experience Quests */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-3">
            <Zap size={20} className="text-rose-500" />
            <h3 className="font-display font-black text-xl text-white">
              {t.quests.experienceTitle}
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {t.quests.experiences.map((exp, i) => (
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
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-black/60 text-muted-foreground text-[10px] font-mono-label border border-rose-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SOFT SKILLS & VOLUNTEERING ───────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Soft Skills */}
        <div className="hud-card p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-2">
            <UserCheck size={20} className="text-emerald-400" />
            <h3 className="font-display font-black text-lg text-white">
              {t.softSkills.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.softSkills.items.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-black/60 border border-emerald-400/40 font-mono-label text-xs font-bold text-white"
              >
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div className="hud-card p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-cyan-400/40 pb-2">
            <Heart size={20} className="text-rose-500" />
            <h3 className="font-display font-black text-lg text-white">
              {t.volunteering.title}
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {t.volunteering.items.map((v) => (
              <div
                key={v.org}
                className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-rose-500/40"
              >
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

      {/* ── 7. LANGUAGES ────────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4">
        <div className="hud-card p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center sm:text-left">
            <span className="hud-badge text-cyan-400 border-cyan-400">{t.languages.badge}</span>
            <h3 className="font-display font-black text-lg text-white mt-1">
              {t.languages.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {t.languages.items.map(({ code, label, level }) => (
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

      {/* ── 8. HOBBIES & PASSIONS ───────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4">
        <Hobbies />
      </section>
    </div>
  );
}
