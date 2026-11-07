"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPhp,
  FaJava,
  FaGit,
  FaDocker,
  FaPython,
} from "react-icons/fa";
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
  SiPostgresql,
  SiSqlite,
  SiGooglechrome,
  SiFastapi,
  SiOpenai,
  SiGo,
  SiThreedotjs,
} from "react-icons/si";
import { Cpu, Layers, Radio } from "lucide-react";

export function TechIcon({ name }: { name: string }) {
  const n = name.toLowerCase().trim();

  // Python
  if (n.includes("python")) {
    return <FaPython className="w-3.5 h-3.5 shrink-0 text-emerald-400" />;
  }

  // FastAPI
  if (n.includes("fastapi")) {
    return <SiFastapi className="w-3.5 h-3.5 shrink-0 text-teal-400" />;
  }

  // React / React Native
  if (n.includes("react")) {
    return <FaReact className="w-3.5 h-3.5 shrink-0 text-cyan-400" />;
  }

  // Next.js
  if (n.includes("next")) {
    return <SiNextdotjs className="w-3.5 h-3.5 shrink-0 text-white" />;
  }

  // TypeScript
  if (n.includes("typescript") || n === "ts") {
    return <SiTypescript className="w-3.5 h-3.5 shrink-0 text-sky-400" />;
  }

  // JavaScript
  if (n.includes("javascript") || n === "js") {
    return <SiJavascript className="w-3.5 h-3.5 shrink-0 text-amber-400" />;
  }

  // Go / Golang
  if (n === "go" || n.includes("golang")) {
    return <SiGo className="w-3.5 h-3.5 shrink-0 text-cyan-400" />;
  }

  // Node.js
  if (n.includes("node")) {
    return <FaNodeJs className="w-3.5 h-3.5 shrink-0 text-emerald-500" />;
  }

  // Express
  if (n.includes("express")) {
    return <SiExpress className="w-3.5 h-3.5 shrink-0 text-slate-300" />;
  }

  // SQLite
  if (n.includes("sqlite")) {
    return <SiSqlite className="w-3.5 h-3.5 shrink-0 text-blue-400" />;
  }

  // MySQL
  if (n.includes("mysql")) {
    return <SiMysql className="w-3.5 h-3.5 shrink-0 text-sky-500" />;
  }

  // PostgreSQL
  if (n.includes("postgres")) {
    return <SiPostgresql className="w-3.5 h-3.5 shrink-0 text-blue-400" />;
  }

  // MongoDB
  if (n.includes("mongo")) {
    return <SiMongodb className="w-3.5 h-3.5 shrink-0 text-emerald-500" />;
  }

  // Tailwind
  if (n.includes("tailwind")) {
    return <SiTailwindcss className="w-3.5 h-3.5 shrink-0 text-cyan-400" />;
  }

  // Three.js
  if (n.includes("three")) {
    return <SiThreedotjs className="w-3.5 h-3.5 shrink-0 text-white" />;
  }

  // HTML
  if (n.includes("html")) {
    return <FaHtml5 className="w-3.5 h-3.5 shrink-0 text-orange-500" />;
  }

  // PHP
  if (n.includes("php")) {
    return <FaPhp className="w-3.5 h-3.5 shrink-0 text-indigo-400" />;
  }

  // Java
  if (n.includes("java") && !n.includes("script")) {
    return <FaJava className="w-3.5 h-3.5 shrink-0 text-red-500" />;
  }

  // Docker
  if (n.includes("docker")) {
    return <FaDocker className="w-3.5 h-3.5 shrink-0 text-blue-400" />;
  }

  // Git
  if (n.includes("git") && !n.includes("digital")) {
    return <FaGit className="w-3.5 h-3.5 shrink-0 text-orange-500" />;
  }

  // Vue
  if (n.includes("vue")) {
    return <SiVuedotjs className="w-3.5 h-3.5 shrink-0 text-emerald-400" />;
  }

  // Bootstrap
  if (n.includes("bootstrap")) {
    return <SiBootstrap className="w-3.5 h-3.5 shrink-0 text-purple-400" />;
  }

  // Chrome Extension
  if (n.includes("chrome") || n.includes("extension")) {
    return <SiGooglechrome className="w-3.5 h-3.5 shrink-0 text-amber-400" />;
  }

  // WebSocket
  if (n.includes("websocket") || n.includes("socket")) {
    return <Radio className="w-3.5 h-3.5 shrink-0 text-rose-400" />;
  }

  // AI / BYOK
  if (n.includes("ai") || n.includes("byok")) {
    return <SiOpenai className="w-3.5 h-3.5 shrink-0 text-emerald-400" />;
  }

  // Kelly Sizing / Finance / Quant
  if (n.includes("kelly") || n.includes("sizing") || n.includes("tf-idf")) {
    return <Cpu className="w-3.5 h-3.5 shrink-0 text-amber-400" />;
  }

  // Fallback
  return <Layers className="w-3.5 h-3.5 shrink-0 text-cyan-400" />;
}
