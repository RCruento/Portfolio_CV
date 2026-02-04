import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Rayan Koussa",
	description:
		"Contactez Rayan Koussa pour une opportunité, une collaboration ou échanger. Disponible par email et sur les réseaux sociaux.",
	keywords: ["contact", "email", "LinkedIn", "GitHub", "collaboration"],
	openGraph: {
		title: "Me Contacter - Rayan Koussa",
		description:
			"Contactez-moi pour discuter d'une opportunité, d'une collaboration ou simplement pour échanger sur le développement web.",
		url: "https://rayankoussa.vercel.app/contact",
		type: "website",
	},
};

export default function ContactPage() {
  return (
    <section id="contact" className="w-full max-w-2xl mx-auto mt-12 sm:mt-16 md:mt-20 mb-6 sm:mb-8 animate-fade-in-up group px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary text-center">Contact</h1>
      <div className="bg-card rounded-xl shadow p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 items-center border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100">
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center max-w-xl px-2">
          Vous souhaitez me contacter pour une opportunité, une collaboration ou simplement échanger&nbsp;? N&apos;hésitez pas à m&apos;écrire ou à me retrouver sur les réseaux sociaux!
        </p>
        <div className="flex flex-col gap-3 sm:gap-4 w-full items-center">
          <a href="mailto:rayan.koussa@outlook.fr" className="flex items-center gap-2 text-primary hover:underline text-sm sm:text-base md:text-lg font-medium transition-colors break-all">
            <FaEnvelope className="text-base sm:text-xl flex-shrink-0" />
            <span className="break-all">rayan.koussa@outlook.fr</span>
          </a>
          <a href="https://linkedin.com/in/rayan-koussa-8b9a84183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 text-sm sm:text-base md:text-lg font-medium transition-colors">
            <FaLinkedin className="text-base sm:text-xl flex-shrink-0" />
            LinkedIn
          </a>
          <a href="https://github.com/RCruento" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-primary text-sm sm:text-base md:text-lg font-medium transition-colors">
            <FaGithub className="text-base sm:text-xl flex-shrink-0" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
