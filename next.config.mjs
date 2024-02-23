import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);

module.exports = {
	async rewrites() {
	  return [
		{
		  source: "/l/:path*",
		  destination: "https://links.tangerine.pink/:path*",
		},
	  ];
	},
  };
  