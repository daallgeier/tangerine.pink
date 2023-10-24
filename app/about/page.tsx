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

export default function Example() {
	return (
		<div
			style={{ backgroundImage: "url('/2023-10-oludeniz1700-sunsetheart-compressed.webp')" }}
			className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-900 bg-center bg-cover">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-aut">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					<div className="overflow-auto h-screen py-20">
						<h1>headline</h1>text
					</div>
				</div>
			</div>
		</div>
	);
}
