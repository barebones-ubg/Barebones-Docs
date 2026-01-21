// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Barebones UBG Docs',
			favicon: 'public/favicon.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/barebones-ubg/Barebones-Docs' }],
			sidebar: [
				{
					label: 'Basic Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getstarted' },
						{ label: 'How to Add Games', slug: 'guides/addgames' }
					],
				},
			],
		}),
	],
});
