/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: { 
          950: 'rgb(var(--noir-950) / <alpha-value>)',
          900: 'rgb(var(--noir-900) / <alpha-value>)',
          850: 'rgb(var(--noir-850) / <alpha-value>)',
          800: 'rgb(var(--noir-800) / <alpha-value>)',
          700: 'rgb(var(--noir-700) / <alpha-value>)',
          600: 'rgb(var(--noir-600) / <alpha-value>)',
          500: 'rgb(var(--noir-500) / <alpha-value>)',
          400: 'rgb(var(--noir-400) / <alpha-value>)',
          300: 'rgb(var(--noir-300) / <alpha-value>)',
        },
        ash: { 
          100: 'rgb(var(--ash-100) / <alpha-value>)',
          200: 'rgb(var(--ash-200) / <alpha-value>)',
          300: 'rgb(var(--ash-300) / <alpha-value>)',
          400: 'rgb(var(--ash-400) / <alpha-value>)',
          500: 'rgb(var(--ash-500) / <alpha-value>)',
          600: 'rgb(var(--ash-600) / <alpha-value>)',
          700: 'rgb(var(--ash-700) / <alpha-value>)',
          800: 'rgb(var(--ash-800) / <alpha-value>)',
        },
        black: 'rgb(var(--theme-black) / <alpha-value>)',
        white: 'rgb(var(--theme-white) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'line-draw': 'lineDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        lineDraw: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(0,0,0,0.06)',
        'card-hover': '0 0 0 1px rgba(0,0,0,0.12), 0 16px 48px -8px rgba(0,0,0,0.1)',
        'elevated': '0 24px 64px -16px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
