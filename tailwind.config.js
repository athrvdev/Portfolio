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
        lightBg: '#F0F4F8',
        lightText: '#2E3A45',
        darkBg: '#1C1C1E',
        darkText: '#E8E9EB',
      },
    },
  },
  plugins: [],
}
