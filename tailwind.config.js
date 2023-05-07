/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        emerald: {
          500: '#32D4A4'
        },
        gray: {
          900: '#252626',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
          // #5E6C84
        },
        red: {
          500: '#ff0000'
        }
      }
    }
  },
  plugins: []
}
