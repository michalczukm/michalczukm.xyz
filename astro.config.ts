import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://michalczukm.xyz/",
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap({
			// /assets is a raw file listing, not content worth indexing
			filter: (page) => !page.includes("/assets"),
		}),
	],
	prefetch: true,
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
