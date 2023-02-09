/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#513205',
          50: '#EEEBE6',
          100: '#DCD6CD',
          200: '#B9AD9B',
          300: '#978469',
          400: '#745B37',
          500: '#513205',
          600: '#412804',
          700: '#311E03',
          800: '#201402',
          900: '#100A01',
        },
        secondary: {
          DEFAULT: '#FFD79D',
          50: '#FFFBF5',
          100: '#FFF7EB',
          200: '#FFEFD8',
          300: '#FFE7C4',
          400: '#FFDFB1',
          500: '#FFD79D',
          600: '#CCAC7E',
          700: '#99815E',
          800: '#66563F',
          900: '#332B1F',
        },
        success: {
          DEFAULT: '#6DB5A8',
        },
        error: {
          DEFAULT: '#CC615E',
        },
      },
      fontFamily: {
        signika: ['Signika Negative', 'sans-serif'],
      },
      borderWidth: {
        1.5: '1.5px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    prefix: '',
    themes: [
      {
        potato: {
          primary: '#513205',
          secondary: '#FFD79D',
        },
      },
    ],
  },
};
