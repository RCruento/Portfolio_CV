import { FaNodeJs, FaHtml5, FaPhp, FaJava, FaReact } from "react-icons/fa";
import { SiMysql, SiMongodb, SiBootstrap, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiCplusplus } from "react-icons/si";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projets | Rayan Koussa",
	description:
		"Découvrez les projets développés par Rayan Koussa : Portfolio Next.js, MBTI Explorer, Indexation HTML, Jeu Hearthstone et plus.",
	keywords: ["projets", "portefeuille", "développement", "Next.js", "React", "Node.js"],
	openGraph: {
		title: "Mes Projets - Portfolio Rayan Koussa",
		description:
			"Découvrez mes projets développés avec Next.js, React, Node.js et d'autres technologies.",
		url: "https://rayankoussa.vercel.app/projects",
		type: "website",
	},
};

const projects = [
	{
		title: "Portfolio Next.js",
		image: "/RK.jpg",
		description:
			"Portfolio personnelle moderne avec Next.js, TypeScript, Tailwind CSS, Shadcn UI, animations et dark mode.",
		altText: "Capture d'écran du portfolio Next.js de Rayan Koussa",
		stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
		github: "https://github.com/RCruento/Portfolio_CV"
	},
	{
		title: "MBTI Explorer",
		image: "https://mmj.azureedge.net/media/90903e37-919a-48a5-a93c-e39fe08b4386.webp",
		description:
			"Application web de lieux a explorier selon son test MBTI fais sur le site à l'aide d'une API, gestion utilisateurs et résultats.",
		altText: "Application MBTI Explorer pour découvrir des lieux selon sa personnalité",
		stacks: ["ReactJS", "Node.js", "Express", "MySQL", "API"],
	},
	{
		title: "Indexation HTML",
		image: "https://cujas.hypotheses.org/files/2022/07/Illustration_Lindexation-une-piste-pour-ameliorer-la-visibilite-de-ses-publications.jpg",
		description: "Indexation de pages HTML et recherche avancée.",
		altText: "Illustration du projet d'indexation de pages HTML",
		stacks: ["HTML", "PHP", "Bootstrap", "MySQL"],
		github: "https://github.com/RCruento/indexation-PHP",
	},
	{
		title: "Jeu Hearthstone 2 joueurs",
		image: "https://d39zum0jwvcigt.cloudfront.net/_next/static/images/default-4fff3c606c794dc03a915b9071f562d3.jpg",
		description: "Jeu de cartes inspiré de Hearthstone pour 2 joueurs (15 cartes).",
		altText: "Interface du jeu Hearthstone à 2 joueurs développé en Java",
		stacks: ["Java"],
		github: "https://github.com/RCruento/HearthStoneJava"
	},
	{
		title: "PACMAN java",
		image: "https://www.radiofrance.fr/pikapi/images/cce35344-1aa1-4345-b1f0-364440059de9/1200x680?webp=false",
		description: "Réalisation du jeu PACMAN en Java",
		altText: "Jeu PACMAN classique implémenté en Java",
		stacks: ["Java"],
		github: "https://github.com/RCruento/PacMan_Java"
	},
	{
		title: "PACMAN C++ Graphes",
		image: "https://www.radiofrance.fr/pikapi/images/cce35344-1aa1-4345-b1f0-364440059de9/1200x680?webp=false",
		description: "Réalisation du jeu PACMAN C++ avec des graphes.",
		altText: "PACMAN en C++ avec algorithmes de graphes pour l'IA",
		stacks: ["C++"],
		github: "https://github.com/RCruento/Pacman_IA_Graphe"
	},
	{
		title: "Trombinoscope",
		image: "https://www.web-creatif.net/wp-content/uploads/2009/03/trombinoscope-avatar.png",
		description: "Calculatrice en ligne de commande.",
		altText: "Trombinoscope en JavaScript avec HTML et CSS",
		stacks: ["JavaScript", "HTML", "CSS"],
		github: "https://github.com/RCruento/Trombinoscope"
	},
	{
		title: "Client/serveur",
		image: "https://www.geonov.fr/fig/client-server/client-server-2-tiers-small.png",
		description: "Application client/serveur multi-protocoles.",
		altText: "Architecture client/serveur à deux niveaux en C++ et Java",
		stacks: ["C++", "Java"],
	},
	{
		title: "Base de données PL/SQL",
		image: "/file.svg",
		description: "Gestion d’achats/ventes d’actions (PL/SQL).",		altText: "Système de gestion de base de données PL/SQL pour actions",		stacks: ["PL/SQL"],
	},
];

export default function ProjectsPage() {
	return (
		<section
			id="projects"
			className="w-full max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 mb-6 sm:mb-8 animate-fade-in-up group px-4"
		>
			<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary text-center">
				Projets
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="bg-card rounded-xl shadow p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-primary/40 animate-fade-in-up"
						style={{
							animationDelay: `${1000 + idx * 100}ms`,
						}}
					>
						<Image
							src={project.image}
							alt={project.altText || project.title}
							width={600}
							height={200}
							className="rounded-lg w-full h-32 sm:h-40 object-cover mb-2 border border-muted"
						/>
						<h2 className="font-semibold text-base sm:text-lg">{project.title}</h2>
						<p className="text-xs sm:text-sm text-muted-foreground">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{project.stacks.map((stack, i) => {
								let hideText = false;
								if (
									(project.title === "Calculatrice console" && stack === "C") ||
									(project.title === "Base de données PL/SQL" &&
										stack === "PL/SQL") ||
									(project.title === "PACMAN C++ Graphes" && stack === "C++") ||
									(project.title === "MBTI Explorer" && stack ===
										"API") ||
									(project.title === "Client/serveur" && stack === "C++")
								) {
									hideText = true;
								}
								let icon = null;
								if (stack === "React" || stack === "ReactJS")
									icon = <FaReact className="text-sky-400" title="React" />;
								if (stack === "Next.js")
									icon = <SiNextdotjs className="text-white" title="Next.js" />;
								if (stack === "Node.js")
									icon = (
										<FaNodeJs className="text-green-600" title="Node.js" />
									);
								if (stack === "Express")
									icon = (
										<SiExpress className="text-gray-600" title="Express" />
									);
								if (stack === "MongoDB")
									icon = (
										<SiMongodb className="text-green-700" title="MongoDB" />
									);
								if (stack === "MySQL" || stack === "SQL")
									icon = (
										<SiMysql className="text-blue-700" title="MySQL/SQL" />
									);
								if (stack === "TypeScript")
									icon = (
										<SiTypescript className="text-blue-500" title="TypeScript" />
									);
								if (stack === "Tailwind CSS")
									icon = (
										<SiTailwindcss className="text-sky-400" title="Tailwind CSS" />
									);
								if (stack === "Shadcn UI")
									icon = (
										<span
											className="font-bold text-sm text-primary"
											title="Shadcn UI"
										>
											UI
										</span>
									);
								if (stack === "Bootstrap")
									icon = (
										<SiBootstrap className="text-purple-600" title="Bootstrap" />
									);
								if (stack === "HTML" || stack === "HTML5")
									icon = (
										<FaHtml5 className="text-orange-500" title="HTML5" />
									);
								if (stack === "CSS")
									icon = (
										<span className="text-blue-500 font-bold text-base" title="CSS">
											CSS
										</span>
									);
								if (stack === "PHP")
									icon = <FaPhp className="text-indigo-500" title="PHP" />;
								if (stack === "JavaScript" || stack === "Javascript")
									icon = (
										<SiJavascript className="text-yellow-400" title="JavaScript" />
									);
								if (stack === "Java")
									icon = <FaJava className="text-red-500" title="Java" />;
								if (stack === "C++")
									icon = (
										<SiCplusplus className="text-blue-600" title="C++" />
									);
								if (stack === "C")
									icon = (
										<span
											className="text-blue-500 font-bold text-base"
											title="C"
										>
											C
										</span>
									);
								if (stack === "PL/SQL")
									icon = (
										<span
											className="text-orange-700 font-bold text-base"
											title="PL/SQL"
										>
											PL/SQL
										</span>
									);
								if (stack === "API")
									icon = (
										<span
											className="text-pink-500 font-bold text-base"
											title="API"
										>
											API
										</span>
									);
								return (
									<span
										key={i}
										className="flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs font-medium text-primary/80 border border-primary/10"
									>
										{icon}
										{!hideText && stack}
									</span>
								);
							})}
						</div>
						{project.github && (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 text-primary hover:underline flex items-center gap-1 text-sm font-medium"
							>
								<svg
									width="18"
									height="18"
									fill="currentColor"
									viewBox="0 0 24 24"
									className="inline-block"
								>
									<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
								</svg>
								Voir sur GitHub
							</a>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
