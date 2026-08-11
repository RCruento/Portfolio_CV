"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Download, Copy, Check, Send, Gamepad2 } from "lucide-react";
import { fireConfetti } from "@/lib/confetti";

const CONTACT_LINKS = [
  {
    href: "mailto:rayan.koussa@outlook.fr",
    label: "rayan.koussa@outlook.fr",
    sublabel: "EMAIL PROFESSIONNEL",
    icon: Mail,
  },
  {
    href: "https://linkedin.com/in/rayan-koussa-8b9a84183",
    label: "linkedin.com/in/rayan-koussa",
    sublabel: "PROFIL LINKEDIN",
    icon: Linkedin,
  },
  {
    href: "https://github.com/RCruento",
    label: "github.com/RCruento",
    sublabel: "COMPTE GITHUB",
    icon: Github,
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rayan.koussa@outlook.fr");
    setCopied(true);
    fireConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    fireConfetti();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 mb-20 flex flex-col gap-10 pt-16">
      {/* Page Header */}
      <div className="flex flex-col items-center text-center gap-3 border-b-2 border-border-arcade pb-6">
        <span className="arcade-badge flex items-center gap-2">
          <Gamepad2 size={16} className="text-rose-600" />
          DISPONIBLE POUR MISSIONS & EMPLOI
        </span>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-foreground uppercase tracking-tight">
          ME CONTACTER
        </h1>
        <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
          Un projet en tête, une opportunité ou simplement envie d&apos;échanger ? N&apos;hésitez pas à m&apos;envoyer un message !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Links */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {CONTACT_LINKS.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="arcade-card p-4 flex items-center gap-4 group bg-surface"
              >
                <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 border-2 border-border-arcade shrink-0">
                  <IconComponent size={20} />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-mono-label text-[10px] font-bold text-muted-foreground uppercase">
                    {link.sublabel}
                  </span>
                  <span className="font-display font-black text-sm text-foreground truncate group-hover:text-rose-600 transition-colors">
                    {link.label}
                  </span>
                </div>
              </a>
            );
          })}

          <div className="arcade-card p-5 flex flex-col gap-3 mt-2 bg-surface">
            <span className="arcade-badge">ACTIONS RAPIDES</span>

            <button
              onClick={handleCopyEmail}
              className="w-full arcade-btn-blue py-3 rounded-xl text-xs font-mono-label font-bold uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  EMAIL COPIÉ !
                </>
              ) : (
                <>
                  <Copy size={14} />
                  COPIER L&apos;ADRESSE EMAIL
                </>
              )}
            </button>

            <a
              href="/CV_Rayan_K.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => fireConfetti()}
              className="w-full arcade-btn-red py-3 rounded-xl text-xs font-mono-label font-bold uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={14} />
              TÉLÉCHARGER CV (PDF)
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 arcade-card p-6 sm:p-8 flex flex-col gap-6 bg-surface">
          <h2 className="font-display font-black text-2xl text-foreground uppercase border-b-2 border-border-arcade/20 pb-3">
            ENVOYER UN MESSAGE
          </h2>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-center flex flex-col items-center gap-3 border-2 border-emerald-500">
              <Check size={32} className="text-emerald-600" />
              <h3 className="font-display font-black text-xl uppercase">MESSAGE TRANSMIS !</h3>
              <p className="text-xs font-bold">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-mono-label text-xs font-bold text-foreground uppercase">
                  VOTRE NOM / ORGANISATION
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="VOTRE NOM"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border-2 border-border-arcade rounded-xl font-mono-label text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-600 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-mono-label text-xs font-bold text-foreground uppercase">
                  VOTRE ADRESSE EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="NOM@DOMAINE.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border-2 border-border-arcade rounded-xl font-mono-label text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-600 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-mono-label text-xs font-bold text-foreground uppercase">
                  CONTENU DU MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="BONJOUR RAYAN..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border-2 border-border-arcade rounded-xl font-mono-label text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-600 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full arcade-btn-red py-4 rounded-xl text-xs font-mono-label font-black uppercase flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send size={14} />
                ENVOYER LE MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
