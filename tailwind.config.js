/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleGray: '#f5f5f7',
        appleDarkGray: '#1d1d1f',
        appleBlue: '#007aff',
        appleGreen: '#34c759',
        appleRed: '#ff3b30',
        appleYellow: '#ffcc00',
      },
    },
  },
  plugins: [],
}
