import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        yellow: '#E6B31E',
        white: '#FCFAF1',
        dark: '#343434',
        gray: '#CACACA'
      },
      boxShadow: {
        'yellowShadow': '15px 15px 100px -20px rgba(230,179,30,0.2)'
      }
    },
  },
  plugins: [],
}
export default config
