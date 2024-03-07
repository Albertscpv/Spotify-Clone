/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			utilities:{
				'scrollbar-none':{
					'scrollbar-width': 'none',
					'-ms-overflow-style':'none,'
				}
			}
		},
	},
	plugins: [],
}
