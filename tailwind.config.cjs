const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				levee: '#310070',
				purple: '#882BC0',
				orange: '#FF524E',
				tangerine: '#FE9914',
				marigold: '#FBC34A',
				black: '#222831',
				gray: '#DBE0FF',
				'light-gray': '#F4F6FF',
				sunshine: '#FDEBC3',
				white: '#FFFFFF',
				'g-2-left': '#6E229E',
				'g-2-right': '#FE9914',
				'g-3-left': '#AB00F4',
				'g-3-right': '#F5C553',
				'g-4-left': '#FF9898',
				'g-4-right': '#8054FF',
				'g-5-left': '#FE9914',
				'g-5-right': '#FF5B48',
			},
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'20%': { transform: 'rotate(2deg)' },
					'40%': { transform: 'rotate(4deg)' },
					'60%': { transform: 'rotate(8deg)' },
					'80%': { transform: 'rotate(4deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
			},
			animation: {
				'waving-hand': 'wave 2s linear infinite',
			},
			boxShadow: {
				md: '1px 1px 8px rgba(0, 0, 0, 0.1);',
			},
		},
	},
};
