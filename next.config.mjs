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


  