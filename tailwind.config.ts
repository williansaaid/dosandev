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
      },
      backdropBlur: {
        xs: '1px',
      }
    },
    backgroundImage: {
      code: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1700701316/DevRise/pexels-pixabay-270408_mg1trt.jpg')",
      darkMountain: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1700705088/DevRise/pexels-eberhard-grossgasteiger-2098427_edivfk.jpg')",
      teamMeeting: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1701783898/DevRise/pexels-olia-danilevich-4974920_lgiiwc.jpg')",
      stats: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1701784959/DevRise/is-warren-buffett-bullish-or-bearish-on-stocks_qgte99.webp')",
      laptops: "url('https://res.cloudinary.com/ds41xxspf/image/upload/v1701783900/DevRise/pexels-thisisengineering-3861972_h3b7a6.jpg')",
      gradientFirst: "linear-gradient(to right bottom, #B3953B, #33312C)",
      gradientSecond: "linear-gradient(to left bottom, #33312C, #B3953B)",
      gradientThird: "radial-gradient(ellipse at center, #B3953B, #232323)",
    }
  },
  plugins: [],
}
export default config
