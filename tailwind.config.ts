import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				base: ['Inter', 'sans-serif'], // Backup sans-serif fallback
				heading: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [
		skeleton({
			themes: { preset: ['skeleton'] }
		})
	]
} satisfies Config;

export default config;
