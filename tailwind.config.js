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
        vibrantBlue:'#1f77b4',
        vibrantOrange: '#ff7f0e',
        vibrantGreen: '#2ca02c', 
        vibrantRed: '#d62728', 
        vibrantPurple: '#9467bd',
        vibrantBrown: '#8c564b',
        vibrantPink: '#e377c2',
        vibrantGray: '#7f7f7f',
        vibrantOlive: '#bcbd22',
        vibrantCyan: '#17becf',
      },
    },
  },
  plugins: [],
}
