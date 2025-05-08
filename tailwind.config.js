
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4D90FE', // SoftSell Brand Color
        secondary: '#F1F5F9', // Light background color
      },
    },
  },
  plugins: [],
}
