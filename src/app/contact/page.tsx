import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section id="contact" className="w-full max-w-2xl mx-auto mt-20 mb-8 animate-fade-in-up group px-4">
      <h1 className="text-3xl font-bold mb-8 text-primary text-center">Contact</h1>
      <div className="bg-card rounded-xl shadow p-8 flex flex-col gap-6 items-center border border-gray-300 dark:border-none bg-white/80 dark:bg-card/100">
        <p className="text-lg text-muted-foreground text-center max-w-xl">
          Vous souhaitez me contacter pour une opportunité, une collaboration ou simplement échanger&nbsp;? N&apos;hésitez pas à m&apos;écrire ou à me retrouver sur les réseaux sociaux!
        </p>
        <div className="flex flex-col gap-4 w-full items-center">
          <a href="mailto:rayan.koussa@outlook.fr" className="flex items-center gap-2 text-primary hover:underline text-lg font-medium transition-colors">
            <FaEnvelope className="text-xl" />
            rayan.koussa@outlook.fr
          </a>
          <a href="https://linkedin.com/in/rayan-koussa-8b9a84183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 text-lg font-medium transition-colors">
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a href="https://github.com/RCruento" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-primary text-lg font-medium transition-colors">
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
