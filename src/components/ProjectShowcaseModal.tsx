"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, Lock, Sparkles, CheckCircle2, Play } from "lucide-react";
import type { Project } from "@/components/ProjectCard";
import { TechIcon } from "@/components/TechIcon";
import { fireConfetti } from "@/lib/confetti";
import { useLanguage } from "./LanguageProvider";

export function ProjectShowcaseModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  if (!project) return null;

  const currentMedia = selectedMedia || (project.video ? "video" : project.image);

  const handleDemoClick = () => {
    fireConfetti();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-24 sm:pt-28 pb-8 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-surface border-2 border-border-arcade shadow-2xl rounded-2xl flex flex-col max-h-[85vh] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="px-5 py-4 border-b-2 border-border-arcade flex items-center justify-between bg-surface shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-rose-600" />
              <span className="font-mono-label text-xs font-extrabold uppercase tracking-wider text-foreground">
                {project.category || t.projectsPage.detailsTitle}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white border-2 border-border-arcade transition-all cursor-pointer text-foreground flex items-center justify-center"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-surface">
            {/* Media Player / Image Preview */}
            <div className="space-y-3">
              {currentMedia === "video" && project.video ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-border-arcade bg-black shadow-lg">
                  <video
                    src={project.video}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : currentMedia ? (
                <div className="relative w-full h-56 sm:h-80 rounded-xl overflow-hidden border-2 border-border-arcade bg-slate-900 shadow-lg">
                  <Image
                    src={currentMedia}
                    alt={project.altText || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
              ) : null}

              {/* Thumbnails Gallery */}
              {(project.video || (project.gallery && project.gallery.length > 0)) && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
                  {project.video && (
                    <button
                      type="button"
                      onClick={() => setSelectedMedia("video")}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-mono-label font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                        currentMedia === "video"
                          ? "bg-rose-600 text-white border-rose-500 shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-border-arcade/40 hover:border-rose-500/50"
                      }`}
                    >
                      <Play size={12} className="fill-current" />
                      <span>DÉMO 30s (VIDÉO)</span>
                    </button>
                  )}

                  {project.image && (
                    <button
                      type="button"
                      onClick={() => setSelectedMedia(project.image!)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-mono-label font-bold border transition cursor-pointer ${
                        currentMedia === project.image
                          ? "bg-rose-600 text-white border-rose-500 shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-border-arcade/40 hover:border-rose-500/50"
                      }`}
                    >
                      <span>VUE PRINCIPALE</span>
                    </button>
                  )}

                  {project.gallery?.map((imgUrl, i) => (
                    <button
                      key={imgUrl}
                      type="button"
                      onClick={() => setSelectedMedia(imgUrl)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-mono-label font-bold border transition cursor-pointer ${
                        currentMedia === imgUrl
                          ? "bg-rose-600 text-white border-rose-500 shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-border-arcade/40 hover:border-rose-500/50"
                      }`}
                    >
                      <span>CAPTURE #{i + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-display font-extrabold text-2xl text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features / Highlights */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-border-arcade/30 space-y-2">
              <span className="font-mono-label text-xs font-extrabold uppercase tracking-wider block text-foreground">
                {t.projectsPage.highlightsTitle}
              </span>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-mono-label">
                {t.projectsPage.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="font-mono-label text-xs font-extrabold uppercase text-foreground">
                {t.projectsPage.techUsed}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-label font-bold bg-black/60 text-slate-200 border border-cyan-500/40 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xs"
                  >
                    <TechIcon name={s} />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 border-t-2 border-border-arcade bg-surface flex flex-wrap items-center justify-between gap-4">
            {project.private ? (
              <div className="flex flex-wrap items-center justify-between w-full gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono-label text-xs font-extrabold text-amber-600 dark:text-amber-400">
                  <Lock size={14} />
                  {t.projectsPage.confidentialNotice}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDemoClick}
                    className="arcade-btn-red inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs"
                  >
                    <ExternalLink size={15} />
                    {t.projectsPage.liveDemo}
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDemoClick}
                    className="arcade-btn-blue inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs"
                  >
                    <Github size={15} />
                    {t.projectsPage.sourceCode}
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDemoClick}
                    className="arcade-btn-red inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs"
                  >
                    <ExternalLink size={15} />
                    {t.projectsPage.liveDemo}
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
