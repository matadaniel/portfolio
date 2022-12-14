const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MontserratVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: '#627eea',
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0, transform: 'translateX(20vw)' },
          '100%': { opacity: 1 },
        },
        wave: {
          '0%': { transform: 'rotate(90deg)' },
        },
      },
      animation: {
        appear: 'appear 2s',
        wave: 'wave 2s cubic-bezier(1, 0, 0.5, 1)',
      },
      typography: {
        DEFAULT: {
          css: {
            ul: {
              'max-width': 360,
              display: 'grid',
              'grid-template-columns': 'repeat(2, minmax(0, 1fr))',
            },
            a: { 'text-decoration-line': 'none' },
            'ul > li > *:first-child': { margin: '1em 0' },
            img: { margin: 0 },
          },
        },
        xl: {
          css: {
            'ul > li > *:first-child': { margin: '1em 0' },
            img: { margin: 0 },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
