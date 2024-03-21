/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#00B495',
        'offWhite': '#fffdf5',
        'lightBrown': '#ede7da',
        'darkBlue': '#041e42'
      },
      screens: {
        'mo-xs': '0px',
        'mo-sm': '350px',
        'mo-md': '475px',
        'mo-lg': '576px'
      }
    },
  },
  plugins: [],
}
