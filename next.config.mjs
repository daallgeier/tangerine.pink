import { withContentlayer } from "next-contentlayer";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);


const config = {
    ...nextConfig,
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap')
      }

      // Add the plugin to your webpack plugins
      config.plugins.push(new MiniCssExtractPlugin());

      return config
    },
}