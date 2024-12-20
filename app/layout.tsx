import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: {
		default: "tangerine.pink",
		template: "%s | tangerine.pink",
	},
	description: "Paragliding Athlete, Skier, and Human. Mastering Risk in the Air and in Business.",
	openGraph: {
		title: "tangerine.pink",
		description:
			"Paragliding Athlete, Skier, and Human. Mastering Risk in the Air and in Business.",
		url: "https://tangerine.pink",
		siteName: "tangerine.pink",
		images: [
			{
				url: "/images/tangerine-pink-banner-3840-2160.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-UK",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "tangerine",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
