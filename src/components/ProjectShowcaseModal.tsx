"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import type { Project } from "@/components/ProjectCard";
import { fireConfetti } from "@/lib/confetti";

export function ProjectShowcaseModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  const handleDemoClick = () => {
    fireConfetti();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl bg-surface border-2 border-border-arcade overflow-hidden shadow-2xl rounded-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="p-5 border-b-2 border-border-arcade flex items-center justify-between bg-surface">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-rose-600" />
              <span className="font-mono-label text-xs font-extrabold uppercase tracking-wider text-foreground">
                {project.category || "DÉTAILS DU PROJET"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white border-2 border-border-arcade transition-all cursor-pointer text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-surface">
            {/* Image Preview */}
            {project.image && (
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border-2 border-border-arcade">
                <Image
                  src={project.image}
                  alt={project.altText || project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

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
                POINTS FORTS & CARACTÉRISTIQUES
              </span>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-mono-label">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  Conception responsive et optimisée pour la vitesse de chargement.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  Code modulaire, typage strict TypeScript et architecture propre.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  Intégration d&apos;APIs REST et gestion d&apos;états sécurisée.
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="font-mono-label text-xs font-extrabold uppercase text-foreground">
                TECHNOLOGIES UTILISÉES
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((s) => (
                  <span key={s} className="arcade-badge text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 border-t-2 border-border-arcade bg-surface flex flex-wrap items-center justify-between gap-4">
            {project.private ? (
              <span className="inline-flex items-center gap-1.5 font-mono-label text-xs font-extrabold text-amber-600 dark:text-amber-400">
                <Lock size={14} />
                CONFIDENTIEL (Détails complémentaires sur demande)
              </span>
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
                    CODE SOURCE
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
                    LANCER LA DÉMO
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
