/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{scss,module.scss}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#2C2C2C',
      green: '#3BB763',
      blue: '#02A4E0',
      yellow: '#EFCE4A',
    },
    extend: {},
  },
  plugins: [],
}

