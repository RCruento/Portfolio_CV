"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";

const navLinks = [
	{ href: "/", label: "Accueil" },
	{ href: "/projects", label: "Projets" },
	{ href: "/contact", label: "Contact" },
];

export default function AppNavbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800 transition-all",
				"shadow-lg"
			)}
			aria-label="Main navigation"
		>
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
				<Link
					href="/"
					className="font-bold text-lg tracking-tight text-primary"
				>
					Rayan Koussa
				</Link>
				<div className="hidden md:flex gap-6 items-center">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium px-2 py-1 rounded"
						>
							{link.label}
						</Link>
					))}
					<ThemeModeToggle />
				</div>
				<div className="md:hidden flex items-center gap-2">
					<ThemeModeToggle />
					<button
						className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
						aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
						onClick={() => setOpen((v) => !v)}
					>
						{open ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>
			{/* Mobile menu */}
			{open && (
				<div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-4 py-2 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors font-medium px-2 py-1 rounded"
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
