import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: {
					1: '#1C1F2E',
					2: '#161925',
					3: '#252A41',
					4: '#1E2757',
				},
				blue: {
					1: '#0E78F9'
				},
				sky: {
					1: '#c9ddff',
					2: '#ECF0FF',
				},
				orange: {
					1: '#FF742E'
				},
				purple: {
					1: '#830EF9'
				},
				yellow: {
					1: '#F9A90E'
				}
			},
			backgroundImage: {
				hero: "url('/images/hero-background.png')",

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
