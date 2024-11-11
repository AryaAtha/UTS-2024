/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/input.css", "./src/output.css", "./src/index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      halant: ['Halant'],
      rampart: ['Rampart One', 'Cursive'],
      lato: ['Lato']
    }
  },
  plugins: [],
}

