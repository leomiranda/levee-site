import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	base: './',
	output: 'static',
	build: {
		format: 'file',
	},
	integrations: [
		mdx(),
		tailwind({
			config: { applyBaseStyles: false },
		}),
	],
});
