/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Dancing Script"', 'cursive'],
        cinematic: ['"Playfair Display"', 'serif']
      }
    },
  },
  plugins: [],
}
