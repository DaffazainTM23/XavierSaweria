/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ml-blue': {
          DEFAULT: '#1E88E5',
          dark: '#0A1128',
          light: '#64B5F6'
        },
        'ml-gold': {
          DEFAULT: '#FFD700',
          dark: '#FFC107',
          light: '#FFECB3'
        },
        'ml-dark': '#121212',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};