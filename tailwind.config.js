/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

