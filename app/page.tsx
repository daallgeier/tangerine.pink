import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "PROJECTS", href: "/projects" },
	{ name: "BLOG", href: "/blog" },
	{ name: "LINKS", href: "/contact" },
	{ name: "ABOUT", href: "/about" },
];

export default function Home() {
	return (
		<div
			style={{ backgroundImage: "url('/2023-10-oludeniz1700-sunsetheart-compressed.webp')" }}
			className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-900 bg-center bg-cover"
		>
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-5">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-white hover:text-zinc-500 font-medium hover:font-bold"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<div className="mb-8 text-center animate-fade-in">
				<h2 className="text-base text-white">
					Servus, I am {" "}
				</h2>
			</div>
			<h1 className="mb-4 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text drop-shadow-md">
				tangerine 🍊
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h3 className="text-base text-white">

					Paragliding Athlete, Skier, and Human. {" "}{" "} Mastering Risk in the Air and in Business: {" "}{" "}

					<Link
						target="_blank"
						href="https://tang.erine.ch/en/dahoamventures"
						className="underline duration-500 hover:text-zinc-500"
					>
						learn more
					</Link>

					.  See all my{" "}

					<Link
						target=""
						href="/projects"
						className="underline duration-500 hover:text-zinc-500"
					>
						projects
					</Link>

					. <br /><br />Follow my paragliding adventures on{" "}

					<Link
						target="_blank"
						href="https://tange.erine.ch/en/youtube"
						className="underline duration-500 hover:text-zinc-500"
					>
						YouTube
					</Link>

					{" "} or my other socials on the{" "}
					<Link
						target=""
						href="/contact"
						className="underline duration-500 hover:text-zinc-500"
					>
						links
					</Link>

					{" "} page.

				</h3>
			</div>
		</div>
	);
}
