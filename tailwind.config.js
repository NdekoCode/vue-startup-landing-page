/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif']
    },
    extend: {
      container: {
        center: true
      }
    }
  },
  plugins: []
}
