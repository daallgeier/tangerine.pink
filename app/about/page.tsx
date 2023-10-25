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
		label: "About Tangerine",
		description: "Tangerine is a dedicated person who is always looking for new ways to improve the world around them. They are a great team player and always willing to help others. They are a great asset to any team and I would highly recommend them for any position. Below you can find information about their work experience and education.",
		startDate: "",
		endDate: "",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/tangerines-adventures",
		label: "Pro Athlete",
		description: "As a Pro Athlete Through my Adventures as an athlete...lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
		startDate: "2023-10-01",
		endDate: "ongoing",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/tangerines-adventures",
		label: "Media Production",
		description: "Through my Adventures as an athlete...lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur ",
		startDate: "2023-10-01",
		endDate: "ongoing",
		isExternal: false,
	},
	{
		icon: <></>,
		href: "/projects/dahoam-ventures",
		label: "Investment Activities",
		description: "Through dahoam ventures...Click to learn moreThrough my Adventures as an athlete...lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
		startDate: "",
		endDate: "",
		isExternal: false,
	},
	{
		icon: <image href="https://22d.li/logo" />,
		href: "https://22dconsulting.com",
		label: "Consulting Activities",
		description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
		startDate: "2021-10-01",
		endDate: "continued",
		isExternal: true,
	},
	{
		icon: <></>,
		href: "/projects/hermine",
		label: "Non Profit Activities",
		description: "see more",
		startDate: "",
		endDate: "",
		isExternal: false,
	},{
		icon: <></>,
		href: "",
		label: "Education",
		description: "Hult Business School",
		startDate: "2023-10-01",
		endDate: "ongoing",
		isExternal: false,
	},
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
					<div className="overflow-auto h-screen py-20">
						{experiences.map((s) => (
							<Card>
								<Link
									href={s.href}
									target={s.isExternal ? "_blank" : "_self"}
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
