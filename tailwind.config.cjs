/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				sans: ['Mulish', 'sans-serif']
			},
			colors: {
				primary: '#3398D4',
				black: '#2A2F32',
				secondary: '969696'

			}
		}
	},

	plugins: []
};

module.exports = config;
