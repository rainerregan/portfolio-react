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
        'primary-red': '#F02F43',
        'bright-yellow': "#FEDB39",
        'bright-red': "#D61C4E",
        'bright-cyan': "#1CD6CE",
        'bright-pink': "#FF62AF",
        'dark-navy': "#293462",
        'calm-white': "#FFFAE7",
        'linked-in': "#0e76a8",
        'github': "#171515"
      },
      fontFamily: {
        'jet-brains-mono': ["JetBrainsMono", "sans-serif"],
        'poppins': ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
}
