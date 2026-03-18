/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:       '#C9A84C',
        'gold-light': '#E5C97E',
        'gold-dark':  '#9E7A28',
        dark:       '#111111',
        dark2:      '#1A1A1A',
        dark3:      '#222222',
        cream:      '#F8F6F1',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: {
          '0%':   { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 1s 0.2s forwards',
        'fade-up-2': 'fadeUp 1s 0.4s forwards',
        'fade-up-3': 'fadeUp 1s 0.6s forwards',
        'fade-up-4': 'fadeUp 1s 0.8s forwards',
        'fade-up-5': 'fadeUp 1s 1.0s forwards',
        'fade-up-6': 'fadeUp 1s 1.2s forwards',
        'scroll-line': 'scrollLine 2s infinite',
      },
    },
  },
  plugins: [],
}
