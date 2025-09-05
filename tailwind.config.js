// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./src/index.css"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1b26',
        'panel-bg': 'rgba(42, 45, 62, 0.7)',
        'glow-accent': '#7aa2f7',
        'text-main': '#c0caf5',
        'text-secondary': '#a9b1d6',
      },
      fontFamily: {
        'heading': ['"Cinzel Decorative"', 'serif'],
        'body': ['"Roboto"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(122, 162, 247, 0.6)',
        'glow-hover': '0 0 25px rgba(122, 162, 247, 0.8)',
      },
    },
  },
  plugins: [],
};