/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        fadeInUp: 'fadeInUp 1.5s ease-in-out forwards',
        textGlow: 'textGlow 1s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255, 255, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
  
}