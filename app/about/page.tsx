"use client";
import { Github, InstagramIcon, LinkedinIcon, Mail, Twitter, YoutubeIcon } from "lucide-react";
import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaTiktok, FaYoutube, FaCalendarPlus, } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { SimpleIcon, siTiktok } from "simple-icons";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

const experiences = [
	{
		icon: <></>,
		href: "#",
		label: "About Me",
		description: "I am a European paragliding athlete, speaker, consultant, and entrepreneur. I co-founded 22d consulting; a consultancy specialised in helping customers adapt to the future of work by making digital transitions a seamless process. I am dedicated person always looking to leave every person better then before we met.",
		startDate: "",
		endDate: "",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/tangerines-adventures",
		label: "Paragliding Athlete",
		description: "As a Paraglider I am discovering the world from a different perspective: The Air.  I am currently working on my skills to improve my flying, safety in flight, and my confidence and knowledge in the air. I compete in Hike and Fly events and am preparing for even more and different kinds of competitions.",
		startDate: "2023-10-01",
		endDate: "ongoing",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/tangerines-adventures",
		label: "Media Production",
		description: "Through my Adventures as an athlete I am creating a lot of experiences I want to share with the world;  I want to inspire people to go out and explore the world; show them the beauty of this globe and that we need to protect it; teach people how to be concious and responsible, and how people can take action in their own workplaces to make a difference.  And I want to show people how to make cool stuff happen and make others follow.",
		startDate: "2023-10-01",
		endDate: "ongoing",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/dahoam-ventures",
		label: "Investment Activities",
		description: "Through dahoam ventures I am looking to support and invest in companies which enable a 'dahoamy' approach for their team, customers, and other stakeholders. Click to learn more and get in touch.",
		startDate: "",
		endDate: "",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/22dconsulting",
		label: "Tech and Security Consulting",
		description: "I am combining my experience in the tech industry with my learnings from my paragliding career to help companies and individuals to improve their security and privacy.  I am also helping companies to improve their digital processes and workflows.  This strategic consulting shall enable my customers to understand their problems from a different perspective and to find new solutions to their problems.",
		startDate: "2021-10-01",
		endDate: "continued",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "",
		label: "Sustainability Consulting",
		description: "My passion for sustainability and regenerativity is a big part of my life.  Using my ability to capture amazing shots from the world I am able to show people the beauty of the world and why we need to protect it.  With my work as a consultant I am helping companies to improve their sustainability and regenerativity.",
		startDate: "2021-10-01",
		endDate: "continued",
		isExternal: false,
	},
	// {
	// 	icon: <></>,
	// 	href: "/projects/hermine",
	// 	label: "Non Profit Activities",
	// 	description: "see more",
	// 	startDate: "",
	// 	endDate: "",
	// 	isExternal: false,
	// },{
	// 	icon: <></>,
	// 	href: "",
	// 	label: "Education",
	// 	description: "Hult Business School",
	// 	startDate: "2023-10-01",
	// 	endDate: "ongoing",
	// 	isExternal: false,
	// },
	// {
	// 	icon: <></>,
	// 	href: "",
	// 	label: "",
	// 	description: "",
	// 	startDate: "",
	// 	endDate: "",
	// 	isExternal: false,
	// },
];

export default function Example() {
	return (
		<div
			style={{ backgroundImage: "url('/2023-10-oludeniz1700-sunsetheart-compressed.webp')" }}
			className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-900 bg-center bg-cover">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-aut">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
					<div className="overflow-auto no-scrollbar h-screen py-20 ">
						{experiences.map((s) => (
							<Card>
								<Link
									href={s.href}
									target={s.isExternal ? "_blank" : "_self"}
									className="p-6 relative flex flex-col items-center gap-4 duration-700 group md:gap-4 md:  lg:  md:p-6"
								>
									<span
										className="absolute w-px my- h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-none bg-zinc-900 group-hover:border-none drop-shadow-orange">
										{s.icon}
									</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className="text-xl font-medium duration-150 lg:text-3xl text-white group-hover:text-white font-display">
											{s.label}
										</span>
										{/* <span className="text-sm font-medium duration-150 lg:text-sm pt-2 text-white group-hover:text-white font-display">
											{s.startDate} - {s.endDate}
										</span> */}
										<span className="mt-4 text-m text-center duration-1000 text-white group-hover:text-zinc-200 break-words">
											{s.description}
										</span>
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
