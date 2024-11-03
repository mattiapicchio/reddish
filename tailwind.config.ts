import type { Config } from 'tailwindcss'
import { COLORS } from './src/assets/css/tailwindColors'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // disable automatic dark mode
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
}
export default config
