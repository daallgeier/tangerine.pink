import { Metadata } from "next";

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
			{children}
		</div>
	);
}

export const metadata: Metadata = {
	metadataBase: new URL("https://tangerine-pink-2duszalqy-daallgeiers-projects.vercel.app"), 
	title: "Blog - Tangerine", 
	description: "Welcome to my Blogs and Articles.", 
	openGraph: {
		title: "Blog - Tangerine",
		description: "Welcome to my Blogs and Articles.",
		images: ["/2023-10-oludeniz1700-sunsetheart-compressed.webp"], // Added the image
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog - Tangerine",
		description: "Welcome to my Blogs and Articles.",
		images: ["/2023-10-oludeniz1700-sunsetheart-compressed.webp"], // Added the image
	},
};