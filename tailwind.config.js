/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Dark backgrounds
        abyss: {
          950: '#020617',
          900: '#050505',
          800: '#0a0d14',
          700: '#0f1420',
          600: '#141a2a',
        },
        // Venom Green - growth/AI
        venom: {
          50: '#edfcf2',
          100: '#d3f9e0',
          200: '#aaf2c7',
          300: '#73e6a5',
          400: '#3bd47e',
          500: '#22c55e',
          600: '#14a34a',
          700: '#10823d',
          800: '#116633',
          900: '#0f542b',
        },
        // Electric Cyan - system/security
        cyber: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Deep Amethyst - mystery/sovereignty
        amethyst: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0e7a',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'grain': 'grain 0.5s steps(1) infinite',
        'line-pulse': 'linePulse 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
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
        linePulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-venom': '0 0 20px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)',
        'glow-cyber': '0 0 20px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)',
        'glow-amethyst': '0 0 20px rgba(124, 58, 237, 0.3), 0 0 60px rgba(124, 58, 237, 0.1)',
        'glow-venom-lg': '0 0 40px rgba(34, 197, 94, 0.4), 0 0 80px rgba(34, 197, 94, 0.15)',
        'glow-cyber-lg': '0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.15)',
        'glow-amethyst-lg': '0 0 40px rgba(124, 58, 237, 0.4), 0 0 80px rgba(124, 58, 237, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
