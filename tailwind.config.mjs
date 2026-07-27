/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0A0A0F',
          elevated: '#12121F',
        },
        ink: {
          DEFAULT: '#F0EDF5',
          muted: 'rgba(240, 237, 245, 0.68)',
          soft: 'rgba(240, 237, 245, 0.48)',
        },
        glass: {
          fill: 'rgba(245, 243, 240, 0.10)',
          edge: 'rgba(232, 228, 239, 0.26)',
        },
        accent: {
          DEFAULT: '#D4C5F9',
          soft: 'rgba(212, 197, 249, 0.18)',
          glow: 'rgba(212, 197, 249, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      borderRadius: {
        glass: '1.35rem',
        'glass-lg': '1.75rem',
        'glass-xl': '2rem',
      },
      boxShadow: {
        glass:
          '0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        'glass-lg':
          '0 18px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
        glow: '0 0 40px rgba(212, 197, 249, 0.18)',
      },
      backgroundImage: {
        'glass-border':
          'linear-gradient(135deg, rgba(232, 228, 239, 0.34), rgba(232, 228, 239, 0.08) 45%, rgba(212, 197, 249, 0.22))',
        'hero-glow':
          'radial-gradient(ellipse at 50% 0%, rgba(212, 197, 249, 0.16), transparent 55%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
