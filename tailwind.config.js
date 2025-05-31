/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#a5c8ff',
          400: '#6d9eff',
          500: '#3b76ff',
          600: '#142C8E',
          700: '#0d1f63',
          800: '#0a1952',
          900: '#081544',
          950: '#040c2e',
        },
      },
    },
  },
  plugins: [],
};