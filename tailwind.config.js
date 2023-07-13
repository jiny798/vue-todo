/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.1s infinite'
      }
    }
  },
  plugins: []
}
