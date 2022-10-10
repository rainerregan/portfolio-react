/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    extend: {
      colors: {
        'primary-gray': '#212121',
        'primary-red': '#F02F43'
      },
      fontFamily: {
        'jet-brains-mono': ["JetBrainsMono", "sans-serif"],
        'poppins': ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
}
