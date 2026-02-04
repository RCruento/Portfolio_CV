import * as React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";

const timelineData = [
	{
		title: "Master 2 — Technologies de l’Hypermédia",
		place: "Université Paris 8, Saint-Denis",
		date: "2023 – 2025",
		color: "bg-green-500",
		icon: (
			<FaGraduationCap
				className="text-white text-2xl animate-spin-slow"
				title="En cours"
			/>
		),
	},
	{
		title: "Master 1 — Management de projets informatiques",
		place: "École IRIS, Paris",
		date: "2020 – 2021",
		color: "bg-green-500",
		icon: (
			<FaGraduationCap
				className="text-white text-2xl"
				title="Diplômé"
			/>
		),
	},
	{
		title: "Licence — Informatique",
		place: "Université de Lorraine, Metz",
		date: "2015 – 2020",
		color: "bg-green-500",
		icon: (
			<FaGraduationCap
				className="text-white text-2xl"
				title="Diplômé"
			/>
		),
	},
];

export function AcademicTimeline() {
	return (
		<ol className="relative ml-8">
			{timelineData.map((item, idx) => (
				<li
					key={idx}
					className="mb-10 ml-6 animate-timeline-card"
					style={{ animationDelay: `${idx * 180}ms` }}
				>
					<span
						className={`absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-white dark:ring-black ${item.color} animate-timeline-dot`}
						style={{ animationDelay: `${idx * 180 + 80}ms` }}
					>
						{item.icon}
					</span>
					<div className="flex flex-col gap-1">
						<h4 className="font-bold text-lg text-primary mb-0.5">
							{item.title}
						</h4>
						<span className="text-sm text-muted-foreground">
							{item.place}
						</span>
						<span className="text-xs text-muted-foreground">
							{item.date}
						</span>
					</div>
				</li>
			))}
		</ol>
	);
}

// Ajout des animations personnalisées dans le fichier CSS global requis.
