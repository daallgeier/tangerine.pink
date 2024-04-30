import { withContentlayer } from "next-contentlayer";
import { Rewrite } from "next/dist/lib/load-custom-routes";

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
		{
			source: "/en/:path*",
			destination: "https://erine.ch/:path*",
		  },
	  ];
	},
  };
  