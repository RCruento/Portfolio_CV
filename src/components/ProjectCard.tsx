"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, Eye, Play } from "lucide-react";
import { ProjectShowcaseModal } from "@/components/ProjectShowcaseModal";

export type ProjectSize = "large" | "medium" | "small";

export interface Project {
  title: string;
  image?: string;
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setModalOpen(true)}
        className="arcade-card flex flex-col h-full group cursor-pointer"
      >
        {/* Media Top */}
        {project.image ? (
          <div className="relative w-full h-48 sm:h-56 shrink-0 border-b-2 border-border-arcade overflow-hidden bg-slate-900">
            <Image
              src={project.image}
              alt={project.altText || project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono-label text-xs font-black uppercase tracking-widest gap-2 bg-rose-600/90">
              <Play size={18} className="fill-white" />
              VOIR LE PROJET
            </div>
          </div>
        ) : (
          <div className="w-full h-28 bg-gradient-to-br from-rose-600 to-blue-600 border-b-2 border-border-arcade flex items-center justify-between px-6 text-white font-mono-label font-black text-sm uppercase tracking-widest">
            <span>{project.category || "PROJET ARCADE"}</span>
            <Play size={20} className="fill-white" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-3">
          <div className="flex items-center justify-between gap-2">
            {project.category && (
              <span className="arcade-badge">{project.category}</span>
            )}

            {project.private && (
              <span className="arcade-badge bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-500 flex items-center gap-1">
                <Lock size={10} />
                CONFIDENTIEL
              </span>
            )}
          </div>

          <h3 className="font-display font-extrabold text-lg sm:text-xl text-foreground group-hover:text-rose-600 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t-2 border-border-arcade/20">
            {project.stacks.map((stack) => (
              <span key={stack} className="arcade-badge text-[10px]">
                {stack}
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
