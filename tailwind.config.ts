import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { COLORS } from './src/assets/css/tailwindColors'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // disable automatic dark mode
  theme: {
    extend: {
      colors: COLORS,
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
    },
    boxShadow: {
      'custom-light': '0 4px 8px rgba(255, 255, 255, 0.2)',
    },
    fontSize: {
      large: ['1.75rem', '1.313rem'], // to replace
      xlHeading: [
        '2rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-1.6px',
          fontWeight: '900',
        },
      ],
      largeHeading: [
        '1.75rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-1.4px',
          fontWeight: '900',
        },
      ],
      mediumHeading: [
        '1.125rem',
        {
          lineHeight: '1.35rem',
          letterSpacing: '-0.54px',
          fontWeight: '900',
        },
      ],
      smallHeading: [
        '0.875rem',
        {
          lineHeight: '0.875rem',
          letterSpacing: '-0.7px',
          fontWeight: '900',
        },
      ],
      body: [
        '1.125rem',
        {
          lineHeight: '1.313rem',
          fontWeight: '500',
        },
      ],
      label: [
        '0.75rem',
        {
          lineHeight: '1.05rem',
          fontWeight: '900',
        },
      ],
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.button-primary': {
          backgroundColor: theme('colors.brand-orange'),
          color: theme('colors.white'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.1')} ${theme('spacing.4')}`,

          '&:hover': {
            backgroundColor: theme('colors.gray.dark'),
          },
        },
      })
    }),
  ],
}
export default config
