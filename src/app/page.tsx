"use client";

import { Button } from "@/components/ui/button";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaJava, FaGit, FaCamera, FaGuitar, FaGamepad, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMysql, SiMongodb, SiBootstrap, SiTypescript, SiJavascript, SiVuedotjs, SiNextdotjs, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { AcademicTimeline as Timeline } from "@/components/AcademicTimeline";
import { SkillBadge } from "@/components/SkillBadgeItem";
import Hobbies from "@/components/Hobbies";
import { useEffect, useRef } from "react";

// Hook utilitaire pour effet scroll reveal
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (typeof window === "undefined") return; // S'assure d'être côté client
    const el = ref.current;
    if (!el) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-in-up-visible");
        } else {
          el.classList.remove("fade-in-up-visible");
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.15,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  // Ajout des refs pour scroll reveal
  const skillsRef = useScrollReveal<HTMLDivElement>();
  const langRef = useScrollReveal<HTMLDivElement>();
  const hobbiesRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] gap-8 text-center px-4 scroll-mt-20 animate-fade-in scroll-smooth">
      <div className="flex flex-col items-center gap-4 group transition-transform duration-300 hover:scale-105 animate-reveal-in">
        <Image
          src="/RK.jpg"
          alt="Photo de Rayan Koussa"
          width={320}
          height={320}
          className="rounded-full object-cover border-4 border-primary shadow-2xl aspect-square max-w-[220px] max-h-[220px] sm:max-w-[260px] sm:max-h-[260px] group-hover:shadow-primary/40 transition-shadow duration-300"
          priority
          quality={100}
        />
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Rayan KOUSSA</h1>
        <h2 className="text-xl sm:text-2xl font-medium text-primary">Développeur Full-Stack Junior</h2>
        <p className="max-w-xl mx-auto text-base sm:text-lg text-muted-foreground mt-2">
          Diplômé du Master 2 « Technologies de l'Hypermédia » (Université Paris 8), passionné par la conception et la mise en œuvre de solutions numériques innovantes. À la recherche d’une opportunité en tant que développeur web ou ingénieur full-stack junior.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/CV_Rayan_K.pdf" download target="_blank" rel="noopener noreferrer">
          <Button variant="default">Télécharger le CV (PDF)</Button>
        </a>
        <Link href="/projects">
          <Button variant="outline">Voir projets</Button>
        </Link>
      </div>
      <div className="flex flex-row justify-center gap-4 mt-2">
        <a href="https://linkedin.com/in/rayan-koussa-8b9a84183" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="flex items-center justify-center text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors text-2xl px-2">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RCruento" target="_blank" rel="noopener noreferrer" title="GitHub" className="flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-primary transition-colors text-2xl px-2">
          <FaGithub />
        </a>
      </div>
      {/* Stack technique détaillé */}
      <section id="skills" ref={skillsRef} className="w-full max-w-5xl mt-16 mb-8 animate-fade-in-up group scroll-reveal">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Stack technique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col gap-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40 animate-fade-in-up border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100" style={{animationDelay: '900ms'}}>
            <h3 className="font-semibold text-lg mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="React" level={5} icon={<FaReact className="text-sky-400 group-hover:animate-bounce" />} />
              <SkillBadge name="TypeScript" level={4} icon={<SiTypescript className="text-blue-500 group-hover:animate-bounce" />} />
              <SkillBadge name="JavaScript" level={4} icon={<SiJavascript className="text-yellow-400 group-hover:animate-bounce" />} />
              <SkillBadge name="HTML5" level={5} icon={<FaHtml5 className="text-orange-500 group-hover:animate-bounce" />} />
              <SkillBadge name="CSS3" level={4} icon={<FaCss3Alt className="text-blue-400 group-hover:animate-bounce" />} />
              <SkillBadge name="Bootstrap" level={3} icon={<SiBootstrap className="text-purple-600 group-hover:animate-bounce" />} />
              <SkillBadge name="Vue.js" level={2} icon={<SiVuedotjs className="text-green-500 group-hover:animate-bounce" />} />
            </div>
          </div>
          {/* Backend */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col gap-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40 animate-fade-in-up border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100" style={{animationDelay: '1000ms'}}>
            <h3 className="font-semibold text-lg mb-2">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Node.js" level={4} icon={<FaNodeJs className="text-green-600 group-hover:animate-bounce" />} />
              <SkillBadge name="PHP" level={3} icon={<FaPhp className="text-indigo-500 group-hover:animate-bounce" />} />
              <SkillBadge name="Java" level={3} icon={<FaJava className="text-red-500 group-hover:animate-bounce" />} />
              <SkillBadge name="MySQL" level={4} icon={<SiMysql className="text-blue-700 group-hover:animate-bounce" />} />
              <SkillBadge name="MongoDB" level={3} icon={<SiMongodb className="text-green-700 group-hover:animate-bounce" />} />
            </div>
          </div>
          {/* Frameworks/libs */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col gap-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40 animate-fade-in-up border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100" style={{animationDelay: '1100ms'}}>
            <h3 className="font-semibold text-lg mb-2">Frameworks / Libs</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Next.js" level={4} icon={<SiNextdotjs className="text-black dark:text-white group-hover:animate-bounce" />} />
              <SkillBadge name="Tailwind CSS" level={4} icon={<SiTailwindcss className="text-sky-400 group-hover:animate-bounce" />} />
              <SkillBadge name="Shadcn UI" level={3} icon={<span className="font-bold text-lg group-hover:animate-bounce">shadcn</span>} />
              <SkillBadge name="Git" level={4} icon={<FaGit className="text-orange-600 group-hover:animate-bounce" />} />
            </div>
          </div>
          {/* Autres */}
          <div className="bg-card rounded-xl shadow p-6 flex flex-col gap-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-primary/40 animate-fade-in-up border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100" style={{animationDelay: '1200ms'}}>
            <h3 className="font-semibold text-lg mb-2">Autres</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Photoshop" level={3} icon={<SiAdobephotoshop className="text-blue-700 group-hover:animate-bounce" />} />
              <SkillBadge name="Lightroom" level={4} icon={<SiAdobeillustrator className="text-blue-400 group-hover:animate-bounce" />} />
              <SkillBadge name="Office" level={4} icon={<span className="font-bold text-base group-hover:animate-bounce"></span>} />
            </div>
          </div>
        </div>
      </section>
      {/* Parcours académique & Expérience */}
      <div className="w-full max-w-5xl mt-24 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up" style={{animationDelay: '600ms'}}>
        <div className="bg-card rounded-xl shadow p-10 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-primary/40 animate-fade-in-up border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100" style={{animationDelay: '700ms'}}>
          <h3 className="font-semibold text-xl mb-2 text-primary">Parcours académique</h3>
          <Timeline />
        </div>
        <div className="bg-card rounded-xl shadow p-10 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-primary/40 animate-fade-in-up border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100" style={{animationDelay: '800ms'}}>
          <h3 className="font-semibold text-xl mb-2 text-primary">Expérience professionnelle</h3>
          <ul className="space-y-4 text-left">
            <li className="transition-transform duration-300 hover:scale-105 hover:bg-muted/40 rounded p-2 animate-fade-in-up" style={{animationDelay: '900ms'}}>
              <span className="font-bold">Développeur Intégrateur</span> — BASSETTI, Paris<br />
              <span className="text-muted-foreground">Sept 2024 – Fév 2025</span><br />
              <span className="text-sm">Développement de modules personnalisés, optimisation logicielle, migration, conception UI responsive, gestion de versions avec Git, tests et débogage.</span>
            </li>
            <li className="transition-transform duration-300 hover:scale-105 hover:bg-muted/40 rounded p-2 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
              <span className="font-bold">Développeur Web (Stage)</span> — Beo-France, Taverny<br />
              <span className="text-muted-foreground">Fév 2021 – Juil 2021</span><br />
              <span className="text-sm">Maintenance et évolution d’outils web sous WordPress, optimisation SEO/SEA/SMO/SEM, ajout de fonctionnalités.</span>
            </li>
            <li className="transition-transform duration-300 hover:scale-105 hover:bg-muted/40 rounded p-2 animate-fade-in-up" style={{animationDelay: '1100ms'}}>
              <span className="font-bold">Développeur Web (Projet de fin d’études)</span> — UFR MIM, Université de Lorraine, Metz<br />
              <span className="text-muted-foreground">Avr 2020 – Juin 2020</span><br />
              <span className="text-sm">Conception et réalisation d’une application de gestion des enseignants et modules, UML, base de données relationnelle.</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Section Langues */}
      <section className="w-full max-w-5xl mx-auto mt-10 mb-8 animate-fade-in-up group px-4" ref={langRef}>
        <div className="bg-card rounded-xl shadow p-6 flex flex-col gap-4 items-center border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100">
          <h3 className="font-semibold text-lg mb-2">Langues</h3>
          <div className="flex gap-4 text-2xl justify-center">
            <span title="Français" className="flex items-center gap-1 transition-transform duration-300 hover:scale-110 hover:text-blue-600">
              <ReactCountryFlag countryCode="FR" svg style={{ width: "2em", height: "2em" }} />
              Natif
            </span>
            <span title="Anglais" className="flex items-center gap-1 transition-transform duration-300 hover:scale-110 hover:text-indigo-700">
              <ReactCountryFlag countryCode="GB" svg style={{ width: "2em", height: "2em" }} />
              C1
            </span>
            <span title="Arabe" className="flex items-center gap-1 transition-transform duration-300 hover:scale-110 hover:text-green-700">
              <ReactCountryFlag countryCode="DZ" svg style={{ width: "2em", height: "2em" }} />
              Natif
            </span>
          </div>
        </div>
      </section>

      {/* Section Loisirs */}
      <section className="w-full mt-10 mb-8 animate-fade-in-up group px-4" ref={hobbiesRef}>
        <Hobbies />
      </section>
    </section>
  );
}
