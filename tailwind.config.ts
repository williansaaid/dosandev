import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#E6B31E',
        white: '#FCFAF1',
        dark: '#1d1d1e',
        gray: '#CACACA'
      },
    },
  },
  plugins: [],
}
export default config
