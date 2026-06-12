/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: { // Now acting as light background palette
          950: '#FFFFFF',
          900: '#FAFAFA',
          850: '#F5F5F5',
          800: '#E5E5E5',
          700: '#D4D4D4',
          600: '#A3A3A3',
          500: '#737373',
          400: '#525252',
          300: '#404040',
        },
        ash: { // Now acting as dark text/content palette
          100: '#000000',
          200: '#0A0A0A',
          300: '#171717',
          400: '#262626',
          500: '#404040',
          600: '#525252',
          700: '#737373',
          800: '#A3A3A3',
        },
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
