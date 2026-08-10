import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        serif: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--border)',
        ring: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--background)',
        },
        secondary: {
          DEFAULT: 'var(--surface)',
          foreground: 'var(--foreground-muted)',
        },
        muted: {
          DEFAULT: 'var(--surface)',
          foreground: 'var(--foreground-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--background)',
        },
        card: {
          DEFAULT: 'var(--surface)',
          foreground: 'var(--foreground)',
        },
        surface: 'var(--surface)',
        'luxury-accent': 'var(--accent)',
      },
      borderRadius: {
        lg: '2px',
        md: '2px',
        sm: '1px',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [animate],
} satisfies Config
