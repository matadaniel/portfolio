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
        shake: {
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        appear: 'appear 2s',
        wave: 'wave 2s cubic-bezier(1, 0, 0.5, 1)',
        shake: 'shake 1s',
      },
      typography: {
        DEFAULT: {
          css: {
            a: { 'text-decoration-line': 'none' },
            img: { margin: 0 },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: { backgroundColor: '#1E1E1E', padding: '0 0.25rem', borderRadius: '0.25rem' },
            pre: { lineHeight: 1.2 },
          },
        },
        xl: {
          css: {
            img: { margin: 0 },
            pre: { lineHeight: 1.2 },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
