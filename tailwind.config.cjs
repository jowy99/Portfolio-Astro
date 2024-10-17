/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from 'tailwindcss/typography';

module.exports = {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
	theme: {
		extend: {
			colors: {
                green: {
                    '50': '#b1c1b9',
                    '100': '#a2b4ab',
                    '200': '#92a89d',
                    '300': '#839b8f',
                    '400': '#738f81',
                    '500': '#648374',
                    '600': '#5a7568',
                    '700': '#50685c',
                    '800': '#465b51',
                    '900': '#3c4e45',
                    '950': '#32413a',
                },
                green_light: {
                    '50': '#d7e0da',
                    '100': '#cfd9d3',
                    '200': '#c7d3cb',
                    '300': '#bfcdc4',
                    '400': '#b7c7bd',
                    '500': '#AFC1B6',
                    '600': '#9dada3',
                    '700': '#8c9a91',
                    '800': '#7a877f',
                    '900': '#69736d',
                    '950': '#57605b',
                },
                carbon: {
                    '50': '#989898',
                    '100': '#838383',
                    '200': '#6e6e6e',
                    '300': '#5a5a5a',
                    '400': '#454545',
                    '500': '#313131',
                    '600': '#2c2c2c',
                    '700': '#272727',
                    '800': '#222222',
                    '900': '#1d1d1d',
                    '950': '#181818',
                },
                todo: '#c2e0c6',
                inprogress: '#fbca04',
                done: '#2cbe4e',
                blocked: '#e11d21',
                review: '#6f42c1',
                laravel: '#F05340',
            },
            fontFamily: {
                sans: ['AlbertSans', ...defaultTheme.fontFamily.sans],
                serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
            },
		},
	},
	plugins: [
        require('@tailwindcss/typography'),
    ],
}
