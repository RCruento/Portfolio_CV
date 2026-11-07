"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, Play } from "lucide-react";
import { ProjectShowcaseModal } from "@/components/ProjectShowcaseModal";
import { TechIcon } from "@/components/TechIcon";
import { useLanguage } from "./LanguageProvider";

export type ProjectSize = "large" | "medium" | "small";

export interface Project {
  title: string;
  image?: string;
  video?: string;
  gallery?: string[];
  altText?: string;
  description: string;
  stacks: string[];
  github?: string;
  link?: string;
  size: ProjectSize;
  private?: boolean;
  category?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setModalOpen(true)}
        className="hud-card flex flex-col h-full group cursor-pointer overflow-hidden border border-cyan-500/30"
      >
        {/* Media Top */}
        {project.image ? (
          <div className="relative w-full h-48 sm:h-56 shrink-0 border-b border-cyan-500/30 overflow-hidden bg-slate-900">
            <Image
              src={project.image}
              alt={project.altText || project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono-label text-xs font-black uppercase tracking-widest gap-2">
              <span className="hud-btn-primary px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-rose-500/50">
                <Play size={15} className="fill-white" />
                {t.projectsPage.viewProject}
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full h-28 bg-gradient-to-br from-rose-600/90 to-purple-600/90 border-b border-cyan-500/30 flex items-center justify-between px-6 text-white font-mono-label font-black text-sm uppercase tracking-widest">
            <span>{project.category || t.projectsPage.detailsTitle}</span>
            <Play size={20} className="fill-white" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-3">
          <div className="flex items-center justify-between gap-2">
            {project.category && (
              <span className="hud-badge text-cyan-400 border-cyan-400/50 bg-cyan-400/10">
                {project.category}
              </span>
            )}

            {project.private && (
              <span className="hud-badge text-amber-400 border-amber-400/50 bg-amber-400/10 flex items-center gap-1">
                <Lock size={10} />
                {t.projectsPage.confidential}
              </span>
            )}
          </div>

          <h3 className="font-display font-extrabold text-lg sm:text-xl text-foreground group-hover:text-rose-600 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyan-500/20">
            {project.stacks.map((stack) => (
              <span
                key={stack}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-label font-bold bg-black/60 text-slate-200 border border-cyan-500/40 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all"
              >
                <TechIcon name={stack} />
                <span>{stack}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <ProjectShowcaseModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
