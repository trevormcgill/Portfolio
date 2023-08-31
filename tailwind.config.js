/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'soft': {
          100: '#4A707A',
          200: '#7697A0',
          300: '#94B0B7',
          400: '#C2C8C5',
          500: '#DDDDDA',
        },
        'maine': {
          10: '#0A0F13',
          20: '#0C1118',
          30: '#070B0E',
          40: '#304E6D',
          50: '#132639',
          60: '#253F5B',
          70: '#0E1523',
          80: '#E38CED',
        }
      },
    },
  },
  plugins: [],
}
