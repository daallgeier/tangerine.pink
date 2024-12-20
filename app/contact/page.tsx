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

const socials = [
	{
		icon: <FaYoutube size={20} />,
		href: "https://tang.erine.ch/en/youtube",
		label: "YouTube",
		handle: "@actual_tangerine",
	},
	{
		icon: <BiLogoInstagramAlt size={20} />,
		href: "https://tang.erine.ch/en/instagram",
		label: "Instagram",
		handle: "@actual_tangerine",
	},
	{
		icon: <FaTiktok size={20} />,
		href: "https://tang.erine.ch/en/tiktok",
		label: "TikTok",
		handle: "@actual_tangerine",
	},
	{
		icon: <FaTwitter size={20} />,
		href: "https://tang.erine.ch/en/twitter",
		label: "Twitter",
		handle: "@reallytangerine",
	},
	{
		icon: <FaLinkedin size={20} />,
		href: "https://tang.erine.ch/en/linkedin",
		label: "LinkedIn",
		handle: "Tangerine",
	},
	{
		icon: <HiMail size={20} />,
		href: "mailto:hi+web@tangerine.pink",
		label: "Email",
		handle: "hi@tangerine.pink",
	},
	{
		icon: <FaCalendarPlus size={20} />,
		href: "https://cal.link/tangerine",
		label: "cal.com",
		handle: "tangerine",
	},
	{
		icon: <FaGithub size={20} />,
		href: "https://tang.erine.ch/en/thehub",
		label: "Github",
		handle: "daallgeier",
	},
];

export default function Example() {
	return (
		<div
			style={{ backgroundImage: "url('/2023-10-oludeniz1700-sunsetheart-compressed.webp')" }}
			className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-900 bg-center bg-cover">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-aut">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					<div className="overflow-auto h-screen overflow-y-scroll no-scrollbar py-20">
						{socials.map((s) => (
							<Card>
								<Link
									href={s.href}
									target="_blank"
									className="p-6 relative flex flex-col items-center gap-4 duration-700 group md:gap-4 md:  lg:  md:p-6"
								>
									<span
										className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-none bg-zinc-900 group-hover:border-none drop-shadow-orange">
										{s.icon}
									</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className="text-xl font-medium duration-150 lg:text-3xl text-white group-hover:text-white font-display">
											{s.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-white group-hover:text-zinc-200 break-words">
											{s.label}
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
