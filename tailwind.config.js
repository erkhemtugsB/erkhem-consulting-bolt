/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7ff',
          100: '#ebeeff',
          200: '#d8e1ff',
          300: '#b6c6ff',
          400: '#8da3ff',
          500: '#6680ff',
          600: '#142C8E',
          700: '#001972',
          800: '#001359',
          900: '#000c40',
          950: '#000833',
        },
      },
    },
  },
  plugins: [],
};