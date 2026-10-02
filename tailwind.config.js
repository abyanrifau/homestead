/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EC',
        ivory: '#FAF7F2',
        linen: '#F1EBE1',
        sand: '#E9E1D5',
        taupe: '#D9CFC1',
        greige: '#C7B9A6',
        walnut: { DEFAULT: '#7A5C42', deep: '#5B4636', ink: '#4A3829' },
        espresso: '#2B241D',
        stone: '#75695B',
        mist: '#A69A8B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      letterSpacing: {
        label: '0.18em',
        wide2: '0.08em',
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(43, 36, 29, 0.28)',
        hair: '0 1px 0 rgba(43, 36, 29, 0.06)',
      },
      maxWidth: {
        site: '1320px',
      },
    },
  },
  plugins: [],
}
